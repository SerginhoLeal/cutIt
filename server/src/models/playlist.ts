import fs from "fs";
import { randomUUID } from 'node:crypto';

import { PlayListActionsProps, PlayListProps } from '../types';
import { Posts } from "./posts";

const DATABASE = process.env.DATABASE_PLAYLIST;
const PlayListSchema: PlayListProps[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

export const Playlist: PlayListActionsProps = {
  find: (dataId, param) => {
    return new Promise((resolver, reject) => {
      try {
        const docs = PlayListSchema.find(items => items[param] === dataId);
        return resolver(docs);
      } catch (error) {
        return reject(error)
      }
    });
  },

  get: () => {
    return new Promise((resolver, reject) => {
      try {
        const database = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));
        return resolver(database);
      } catch (error) {
        return reject(error)
      }
    });
  },

  posts: (data) => {
    return new Promise(async(resolver, reject) => {
      let database = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

      const result = {
        id: randomUUID(),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      database.push(result);

      fs.writeFile(DATABASE, JSON.stringify(database, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });

        resolver(result);
      });
    });
  },

  put: (newData) => {
    return new Promise(async(resolver, reject) => {

      const playlistData: PlayListProps = PlayListSchema.find(items => items.id === newData.id);
      if(playlistData === undefined) return reject({ status: 409, message: 'playlist not found' });

      const update = PlayListSchema.map((items) => {
        if(items.id === newData.id) {
          return ({
            name: newData.name,
            description: newData.description,
            createBy: newData.createBy,
            createdAt: newData.createdAt,
            updatedAt: new Date(),
            items: newData.items,
          })
        }

        return items;
      });

      fs.writeFile(DATABASE, JSON.stringify(update, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });
        resolver(newData);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolver, reject) => {
      const PlayListSchema: PlayListProps[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

      const findUser: PlayListProps = PlayListSchema.find(items => items.id === id);
      if(findUser === undefined) return reject({ status: 409, message: 'user not found' });

      const remove: PlayListProps[] = PlayListSchema.filter(items => items.id !== id);
      fs.writeFile(DATABASE, JSON.stringify(remove, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });
        resolver(findUser);
      });
    });
  },

  add: (playlistId, videoId) => {
    return new Promise(async(resolver, reject) => {

      const PlaylistObj: PlayListProps = PlayListSchema.find(items => items.id === playlistId);
      const videoObj = await Posts.find(videoId, 'id');

      if(PlaylistObj === undefined) return reject({ status: 409, message: 'data not found' });
      if(videoObj === undefined) return reject({ status: 409, message: 'data not found' });

      PlaylistObj.items.push(videoObj.id);

      const update = PlayListSchema.map((items) => {
        if(items.id === playlistId) return PlaylistObj;

        return items;
      });

      fs.writeFile(DATABASE, JSON.stringify(update, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });
        resolver(PlaylistObj);
      });
    });
  }
};