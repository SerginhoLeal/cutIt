import { randomUUID } from 'node:crypto';
import fs from "fs";

import * as Types from '../types';

const DATABASE = process.env.DATABASE_USERS;
const UserSchema: Types.UserSchema[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

export const User: Types.UserProps = {
  find: (data, param) => {
    return new Promise((resolver, reject) => {
      const docs = UserSchema.find(items => items[param] === data);
      // console.log(docs);
      return resolver(docs);
    });
  },

  auth: (username, password) => {
    return new Promise(async(resolver, reject) => {
      const user = UserSchema.find(use => use.username == username && use.password == password);

      if(user === undefined)
        return reject({ status: 409, message: 'User not found' });

      return resolver(user);
    });
  },

  create: (data) => {
    return new Promise((resolver, reject) => {
      let database: Types.UserSchema[] = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

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
};

/*

export type Promolve<ResT=void,RejT=Error> = {
  promise: Promise<ResT>;
  resolve: (value:ResT|PromiseLike<ResT>) => void;
  reject:(value:RejT) =>void
};

export function makePromolve<ResT=void,RejT=Error>(): Promolve<ResT,RejT> {
  let resolve: (value:ResT| PromiseLike<ResT>)=>void = (value:ResT| PromiseLike<ResT>)=>{}
  let reject: (value:RejT)=>void = (value:RejT)=>{}
  const promise = new Promise<ResT>((res,rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};

*/