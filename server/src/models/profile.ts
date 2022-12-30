import fs from "fs";
import { randomUUID } from 'node:crypto';

import * as Types from '../types';
import {  } from "./posts";

const DATABASE = process.env.DATABASE_PROFILE;
const ProfileSchema: Types.ProfileSchema[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

export const Profile: Types.ProfileParamsProps = {
  get: (profileId, param) => {
    return new Promise((resolver, reject) => {
      try {
        const docs = ProfileSchema.filter(items => items[param] === profileId);
        return resolver(docs);
      } catch (error) {
        return reject(error)
      }
    });
  },

  create: (data) => {
    return new Promise(async(resolver, reject) => {
      let database: Types.ProfileSchema[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

      const result = {
        id: randomUUID(),
        userId: data.userId,
        items: []
      };

      database.push(result);

      fs.writeFile(DATABASE, JSON.stringify(database, null, 2), 'utf-8', (err) => {
        if(err) return reject({ status: 400, message: err });

        resolver(result);
      });
    });
  },

};
