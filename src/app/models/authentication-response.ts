import {UserDetail} from "./user-detail";

export interface AuthenticationResponse{
  httpStatus?:string;
  message?:string;
  timestamp?:string;
  object?:UserDetail;
}
