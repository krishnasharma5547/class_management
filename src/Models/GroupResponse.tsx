import {User} from './User'
export interface GroupResponse {
  data: {
    name: string;
    creator: User;
    description: string;
    group_image_url: string;
    state: State;
  };
}

  export interface State {
    created_at: string;
    state_code: string;
    title: string;
    updated_at: string;
  }