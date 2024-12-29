import {UserTypeEnum} from './user-type.enum.js';

export type UserType = {
  username: string;
  email: string;
  avatar?: string;
  type : UserTypeEnum;
}
