import { Request, Response } from 'express';
import fs from "fs";

import { Posts } from '../models';
import {  } from '../types';

export class ProfileController {
  async profilePosts (req:Request, res:Response) {
    const { userid: userId }: any = req.headers;
    const posts = await Posts.filter(userId, 'userId');

    return res.status(200).json(posts);
  };

  async profileSaved (req: Request, res:Response) {
    
  };
};
