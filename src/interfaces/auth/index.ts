export enum LoginMode {
  manual = 'manual',
  gmail = 'gmail'
}


export interface IUserAttrs {
  email: string;
  password: string;
  loginMode: LoginMode;
}


export interface ISignInRequestBody extends IUserAttrs {

}

export interface ISignInResponse {
  id: string;
  email: string;
  loginMode: string;
}

export interface IUserIdResolveBody {
  ids: string[]
}

export interface IVerifyGoogleTokenRequestBody {
  idToken: string;
}
