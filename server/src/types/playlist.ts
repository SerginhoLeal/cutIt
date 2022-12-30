export interface PlayListProps {
  id?: string | number;
  name?: string;
  description?: string;
  createBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  items?: Array<string | number>;
};

type Param = keyof PlayListProps;

type IdProps = string | number;

export interface PlayListActionsProps {
  find: (idData: IdProps, param: Param) => Promise<PlayListProps>;
  get: () => Promise<Array<PlayListProps>>;
  posts: (data: PlayListProps) => Promise<PlayListProps>;
  put: (newData: PlayListProps) => Promise<PlayListProps>;
  delete: (idData: IdProps) => Promise<PlayListProps>;
  add: (folderId: IdProps, videoId: IdProps) => Promise<PlayListProps>;
};
