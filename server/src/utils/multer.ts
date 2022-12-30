import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { v2 as cloudinary } from 'cloudinary';

type UsersProps = {
  id: number;
  name: string;
  folderName: string;
  password: number;
  description: string;
  social_media: {
    only_fans?: string;
    twitter?: string;
    fansly?: string;
    tiktok?: string;
  };
};

const Users: Array<UsersProps> = require(`../.${process.env.DATABASE_USERS}`);

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      const { userid: userId }: any = req.headers;

      const findUser = Users.find(user => user.id == userId);
      const dir = `./database/uploads/${findUser.folderName.toLowerCase().replace(' ', '_')}`;

      if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      };

      cb(null, path.resolve(__dirname, "..", "..", "database", "uploads", `${findUser.folderName.toLowerCase().replace(' ', '_')}`));
    },
    filename: (req, file: any, callback) => {
      const { user_id }: any = req.headers;
      const findUser = Users.find(user => user.id == user_id);

      const name_file = findUser.folderName.toLowerCase().replace(' ', '_');
      const type_file = file.mimetype === 'video/mp4' ? '.mp4' : '.jpg';

      crypto.randomBytes(3, (err, hash) => {
        if (err) return callback(err, null);
        file.key = `${hash.toString("hex")}_${name_file}${type_file}`;
        callback(null, file.key);
      });
    }
  }),

  cloudinary: multer.diskStorage({
    filename: (req, file, callback) => {
      file.mimetype = file.mimetype.slice(0, 5);
      file.originalname = `${file.mimetype === 'image' ? 'thumbnail_' : ''}${file.originalname}`;
      file.filename = file.originalname.replace(/\..*$/, '');

      return callback(null, file.filename);
    }
  })
};

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: storageTypes['cloudinary'],
  limits: {
    fileSize: 100 * 1024 * 1024 // 5 mb, 1024 kb, 1024 mb
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "video/mp4"
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  }
};
