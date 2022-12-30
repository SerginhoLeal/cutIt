export interface PathProps {
  video: {
    url: string;
    type:string;
    public_id: string;
  };
  image: {
    url: string;
    type:string;
    public_id: string;
  };
};

export interface PostsParamsProps {
  id?: string | number;
  url?: string;
  views?: number;
  like?: number;
  width?: string;
  title?: string;
  height?: string;
  userId?: string;
  dislike?: number;
  files?: PathProps;
  folderName?: string;
  tags?: Array<string>;
  description?: string;
  createAt?: Date;
};

type Param = keyof PostsParamsProps;
type IdProps = string | number;

export interface PostsSchema {
  find: (idData: IdProps, param: Param) => Promise<PostsParamsProps>;
  filter: (idData: IdProps, param: Param) => Promise<Array<PostsParamsProps>>;
  get: () => Promise<Array<PostsParamsProps>>;
  posts: (data: PostsParamsProps) => Promise<PostsParamsProps>;
  put: (newData: PostsParamsProps) => Promise<PostsParamsProps>;
  delete: (idData: PostsParamsProps) => Promise<Array<PathProps>>;
};
