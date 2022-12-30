import { Router } from 'express';
import multer from "multer";

import { UserController, PostsController, PlaylistController, ProfileController } from './controllers';

const multerConfig = require('./utils/multer');

const routes = Router();

const userController = new UserController();
const postsController = new PostsController();
const playlistController = new PlaylistController();
const profileController = new ProfileController();

// user
routes.post('/auth-user', userController.auth);
routes.post('/create-user', userController.create);

// posts
routes.get('/get-post', postsController.index);
routes.post('/create-post', multer(multerConfig).array('file', 2), postsController.post);
routes.put('/put-post', multer(multerConfig).array('file', 2), postsController.put);
routes.delete('/delete-post', postsController.delete);

routes.get('/more-posts', postsController.pagination);
routes.get('/play-video', postsController.video);

//playlist
routes.get('/get-playlist', playlistController.index);
routes.post('/create-playlist', playlistController.create);
routes.put('/put-playlist', playlistController.put);
routes.delete('/delete-playlist', playlistController.delete);

routes.post('/add-video-playlist', playlistController.add);

//profile
routes.get('/profile-posts', profileController.profilePosts);

export { routes };
