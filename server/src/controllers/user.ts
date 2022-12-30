import { Request, Response } from 'express';

import { User, Profile } from '../models';

export class UserController {
  async auth (req:Request, res:Response) {
    const { username, password } = req.body;

    User.auth(username, password)
      .then(response => res.status(200).json(response))
      .catch((error) => res.status(error.status).json(error.message))
  };

  async create (req:Request, res:Response) {
    const { name, username, email, password, repeatpassword, description, socialMedia } = req.body;

    if(password !== repeatpassword)
      return res.status(400).json({ message: 'password do not match' });

    const findRepeatUserName = await User.find(username, 'username');

    if(findRepeatUserName)
      return res.status(400).json({ message: 'username was used' });

    User.create({ name, email, username, password, description, socialMedia })
      .then((response) => {
        // await Profile.create(response)
        //   .then(console.log)
        //   .catch(console.log)
        res.status(200).json(response);
      })
      .catch((error) => res.status(400).json(error))
  };

  async put (req:Request, res:Response) { };

  async delete (req:Request, res:Response) { };
};
