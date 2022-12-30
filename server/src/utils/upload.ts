import { cloudinary } from '.';

let object: any = {};

export const uploadPost = async(files, playlist) => {
  // new Promise(async(resolver, reject) => {
    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        const element = files[key];

        await cloudinary.uploader['upload'](element.path, {
          chunk_size: 6000000,
          upload_preset: process.env.UPLOAD_PRESET,
          folder: `${process.env.FOLDER_NAME}${playlist.replace(' ', '_')}`,
          public_id: element.filename,
          resource_type: element.mimetype,
        })
          .then((response) => {
            object[`${element.mimetype}`] = {
              public_id: `${process.env.FOLDER_NAME}${playlist.replace(' ', '_')}/${element.filename}`,
              type: element.mimetype,
              url: response.url.replace(`http://res.cloudinary.com/zasetrewsqw/${element.mimetype}/upload/`, '')
            }
          })
          // .catch(error => reject({ status: 400, error: error }))
      };
    };
  // })

  return object;
};

export const updatePost = async(oldData, newData, files) => {
  const data = {
    ...oldData,
    ...JSON.parse(JSON.stringify(newData)),
  };

  // remove
  if(files.length !== 0){
    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        const element = files[key];
        await cloudinary.uploader.destroy(data.files[`${element.mimetype}`].public_id, { resource_type: element.mimetype });
      };
    };
  };

  // save
  for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      const element = files[key];
      console.log('pass');

      await cloudinary.uploader['upload'](element.path, {
        chunk_size: 6000000,
        resource_type: element.mimetype,
        upload_preset: process.env.UPLOAD_PRESET,
        folder: `${process.env.FOLDER_NAME}${data.folderName}`,
        public_id: element.filename,
      })
        .then((response) => {
          object[`${element.mimetype}`] = {
            public_id: `${process.env.FOLDER_NAME}${data.folderName}/${element.filename}`,
            type: element.mimetype,
            url: response.url.replace(`http://res.cloudinary.com/zasetrewsqw/${element.mimetype}/upload/`, '')
          }
        })
        .catch(console.log)
    };
  };

  return object
};

export const deletePost = async(path_url) => {
  let result = [];

  for (const key in path_url) {
    if (Object.prototype.hasOwnProperty.call(path_url, key)) {
      const element = path_url[key];

      await cloudinary.uploader.destroy(element.public_id, { resource_type: element.type })
        .then(() => {
          result.push({
            status: 'success',
            response: `${element.type} has been removed`
          })
        })
        .catch((error) => {
          result.push({
            status: 'error',
            error
          })
        })
    };
  };

  return result
};