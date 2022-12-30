import { Request, Response } from 'express';
import fs from "fs";

import { cloudinary, uploadPost, updatePost, deletePost } from '../utils';
import { Posts, Playlist, User } from '../models';

import { PostsParamsProps } from '../types';

function refiningFolderName(str: string) {
  return str.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").replace(' ', '_').toLowerCase();
};

export class PostsController {
  async index (req:Request, res:Response) {
    const posts = await Posts.get();
    const list = await Playlist.get();

    const shuffled = list.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort).map(({ value }) => value).slice(0, 7);

    const recently = posts.slice(0, 7);
    const popular = posts.sort((a, b) => a.like - b.like).reverse().slice(0, 7);
    const playlist = shuffled;
    const keep_watching = [].slice(0, 7);

    return res.status(200).json({ recently, popular, playlist, keep_watching });
  };

  async pagination (req:Request, res:Response) {
    const docs = await Posts.get();
    const { page }: any = req.query;

    const posts = docs.sort((a, b) => a.like - b.like).reverse();

    const firstItem = page == 1 ? 0 : (page * 10) - 9;
    const lastItem = page * 10;

    const pagination = posts.slice(firstItem, lastItem);

    const calc = docs.length / pagination.length;
    const isInteger = Number.isInteger(calc);

    const result = {
      data: pagination,
      page: Number(page),
      totalPage: isInteger ? calc : parseInt(String(calc + 1)),
      totalObjects: docs.length,
    };

    return res.status(200).json(result);
  };

  async video (req:Request, res:Response) {
    const { dataid: dataId } = req.headers;

    const docs = await Posts.get();
    const data = docs.find(items => items.id === dataId);

    const matches = docs.filter(({ tags }) => data.tags.every(val => tags.indexOf(val) > -1));

    const removeMe = matches.filter(item => item.id !== dataId);

    return res.status(200).json(removeMe);
  };

  async post (req: Request, res:Response) {
    const { title, description, tags, width, height }: PostsParamsProps = req.query;
    const { userid: userId }: any = req.headers;

    const findTitle = await Posts.find(userId, 'id');
    const user = await User.find(userId, 'id');

    if(findTitle){
      return res.status(409).json({ message: 'title exist' });
    };

    const folderName = refiningFolderName(user.username);

    uploadPost(req.files, folderName)
      .then((response) => {
        Posts.posts({
          userId,
          title,
          width,
          height,
          like: Math.floor(Math.random() * 100000),
          dislike: Math.floor(Math.random() * 100),
          description,
          views: Math.floor(Math.random() * 10000),
          folderName,
          files: response,
          tags: JSON.parse(`${tags}`),
          createAt: new Date(),
        })
          .then((response) => res.status(200).json(response))
          .catch((error) => res.status(error.status).json({ message: error.message }))
      })
      .catch(error => res.status(400).json(error))
  };

  async put (req:Request, res:Response) {
    const { ...rest }: PostsParamsProps = req.query;
    const { dataid: dataId }: any = req.headers;

    const database: PostsParamsProps[] = JSON.parse(fs.readFileSync(process.env.DATABASE_POSTS, 'utf-8'));
    const oldData = database.find(items => items.id === dataId);
    const files = await updatePost(oldData, rest, req.files);

    const constructorFile = { ...oldData.files, ...files };

    const data = {
      ...oldData,
      files: constructorFile,
      ...JSON.parse(JSON.stringify(rest)),
    };

    return Posts.put(data)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(400).json(error))
  };

  async delete (req:Request, res:Response) {
    const { data_id }: any = req.headers;
    const path_url = await Posts.delete(data_id);

    const result = await deletePost(path_url);

    return res.json(result);
  };
};
