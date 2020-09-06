export interface IUserAttrs {
  email: string;
  password: string;
}


export interface ISignInRequestBody extends IUserAttrs {

}

export interface ISignInResponse {
  email: string;
  id: string;
}

export interface IUserIdResolveBody {
  ids: string[]
}
