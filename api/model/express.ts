import { Request, Response, NextFunction } from "express";

export interface CustomeRequest extends Request{
    user?:string;
}
export interface CustomeResponse extends Response{
   
}
export type CustomeRequestHandeler =(req:CustomeRequest,res:CustomeResponse,next:NextFunction)=>any;