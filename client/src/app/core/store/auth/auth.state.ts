import {User} from '../../../users';


export interface AuthState {
  user: User
  token: string;
  loggedIn: boolean;
}

export const defaultAuthState: AuthState = {
  user: undefined,
  token: this.user ? this.user.token : undefined,
  loggedIn: !!this.token
};

export const authSelectors = {
  user   : (state: AuthState) => state.user,
  token   : (state: AuthState) => state.token,
  loggedIn: (state: AuthState) => !!state.token,
};
