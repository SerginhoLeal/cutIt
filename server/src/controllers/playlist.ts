import { Request, Response } from 'express';
import fs from "fs";

import { Playlist, User, Posts } from '../models';
import { PlayListProps } from '../types';

export class PlaylistController {
  async index (req:Request, res:Response) {
    const docs = await Playlist.get();
    return res.status(200).json(docs);
  };

  async add (req:Request, res:Response) {
    const { playlistid: playlistId, videoid: videoId }: any = req.headers;

    return Playlist.add(playlistId, videoId)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(400).json(error))
  };

  async create (req: Request, res:Response) {
    const { name, description }: PlayListProps = req.query;
    const { userid: userId }: any = req.headers;

    const findUser = await User.find(userId, 'id');

    if(findUser === undefined){
      return res.status(400).json({ param: 'user', message: 'user not found' })
    };

    if(name === undefined){
      return res.status(400).json({ param: 'name', message: 'parameter name cannot be undefined' })
    };

    if(description === undefined){
      return res.status(400).json({ param: 'description', message: 'parameter description cannot be undefined' })
    };

    return await Playlist.posts({
      name,
      description,
      createBy: userId,
      items: [],
    })
      .then(response => res.status(200).json(response))
      .catch(error => res.status(error.status).json(error.message))
  };

  async put (req:Request, res:Response) {
    const { name, description }: PlayListProps = req.query;
    const { playlistid: playlistId }: any = req.headers;

    const oldData = await Playlist.find(playlistId, 'id');
    const verify = JSON.parse(JSON.stringify({ name, description }));

    const data = { ...oldData, ...verify };

    return Playlist.put(data)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(400).json(error))
  };

  async delete (req:Request, res:Response) {
    const { dataid: dataId }: any = req.headers;

    return await Playlist.delete(dataId)
      .then(response => {
        res.status(200).json({ message: `item ${response.name} has been deleted`})
      })
      .catch(error => {
        res.status(error.status).json(error.message)
      })
  };
};
