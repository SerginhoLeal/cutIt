require('dotenv').config()
import express from 'express'
import cors from 'cors'
import fs from "fs";

import { routes } from './routes'

const app = express();
const database = [ 'posts.json', 'users.json', 'playlists.json', 'profile.json' ];

app.use(express.json());

app.use(cors());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  if (!fs.existsSync('./database')) {
    fs.mkdirSync('./database');
  };

  for (const key in database) {
    setTimeout(() => {
      if (Object.prototype.hasOwnProperty.call(database, key)) {
        const element = database[key];
        const verify = fs.existsSync(`./database/${element}`);
  
        if(!verify){
          return fs.writeFile(`./database/${element}`, JSON.stringify([], null, 2), 'utf-8', (err) => {
            if(err) return console.log({
              error: err,
              message: 'check if the folder was created/files successfully.'
            })
            console.log(`${element} created successfully`);
          });
        };
      };
    }, 1000);
  };
});
