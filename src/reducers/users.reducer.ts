import { Reducer } from "redux";
import { ME_FETCH } from "../actions/auth.actions";
import { User } from "../Models/User";
import { LOGIN_ME } from "../Store";
import { addOne, EntityState } from "./entity.reducer";

export interface UsersState extends EntityState<User>{
}
const initialState = {
  byId: {},
};

export const userReducer: Reducer<UsersState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case LOGIN_ME:
      // const user = action.payload as User;
      // return { ...state, byId: { ...state.byId, [user.id]: user } };
      return addOne(state,action.payload) as UsersState;
    default:
      return state;
  }
};
