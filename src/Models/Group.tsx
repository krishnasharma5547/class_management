import { Entity } from './Entity';
import {User} from './User'
export interface Group extends Entity{
  name: string;
  is_private: boolean;
  description: string;
  introductory_message?: null;
  group_image_url: null | string;
  join_code: string;
  created_at: Date;
  updated_at: Date;
  chatCount: number;
  state: State | undefined;
  creator: User;
  issues: any[];
  invitedMembers: User[];
  participants: User[];
  advocatePage: string | null;
}

  export interface State {
    created_at: string;
    state_code: string;
    title: string;
    updated_at: string;
  }