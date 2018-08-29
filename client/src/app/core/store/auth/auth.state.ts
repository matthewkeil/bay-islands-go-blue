
import {User} from '../../../users';


export interface AuthState {
  user?: User
  token?: string;
  loggedIn?: boolean;
  redirect: {
    login?: string;
    admin?: string;
  }
}

export const defaultAuthState: AuthState = {
  user: undefined,
  token: this.user ? this.user.token : undefined,
  loggedIn: !!this.token,
  redirect: {}
};


