export interface User {
  id: String;
  username: string;
}

export interface UserState {
  user: User;
}

export const UPDATE_USER = 'UPDATE_USER';

export interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

export type UserActionTyp = UpdateUserAction;
