import fs from "fs";
import { randomUUID } from 'node:crypto';

import { PostsSchema, PostsParamsProps } from '../types';

const DATABASE = process.env.DATABASE_POSTS;
const PostsData: PostsParamsProps[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

export const Posts: PostsSchema = {
  find: (dataId, param) => {
    return new Promise((resolver, reject) => {
      try {
        const docs = PostsData.find(items => items[param] === dataId);
        return resolver(docs);
      } catch (error) {
        return reject(error)
      }
    });
  },

  filter: (dataId, param) => {
    return new Promise((resolver, reject) => {
      try {
        const docs = PostsData.filter(items => items[param] === dataId);
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
    return new Promise((resolver, reject) => {
      let database: PostsParamsProps[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

      const result = {
        id: randomUUID(),
        ...data,
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
      fs.writeFile(DATABASE, JSON.stringify([newData], null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });
        resolver(newData);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolver, reject) => {
      const database: PostsParamsProps[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

      const remove = database.filter(items => items.id !== id);
      const { files } = database.find(items => items.id === id);

      fs.writeFile(DATABASE, JSON.stringify(remove, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });
        resolver(files);
      });
    });
  },
};
