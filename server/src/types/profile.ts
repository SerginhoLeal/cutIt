export interface ProfileSchema {
  id?: string;
  userId?: string;
  items?: Array<string>;
};

type ProfileObj = keyof ProfileSchema;

export interface ProfileParamsProps {
  get: (profileId: string, param: ProfileObj) => Promise<ProfileSchema[]>
  create: (profileId: ProfileSchema) => Promise<ProfileSchema>
}