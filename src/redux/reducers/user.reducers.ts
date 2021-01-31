import {UPDATE_USER, UpdateUserAction, User, UserState} from '../types/users';

const initialUserState: UserState = {
  user: {} as User,
};

export function userReducer(
  state: UserState = initialUserState,
  action: UpdateUserAction,
): UserState {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
