export interface SocialMedia {
  tiktok?: string;
  instagram?: string;
  twitter?: string;
  fansly?: string;
  onlyfans?: string;
};

export interface UserSchema {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  repeatpassword?: string;
  description?: string;
  socialMedia?: SocialMedia;
};

type Param = keyof UserSchema;

export interface UserProps {
  find: (data: string, param: Param) => Promise<UserSchema>;
  auth: (name: string, password: string) => Promise<UserSchema>;
  create: (data: UserSchema) => Promise<UserSchema>;
}