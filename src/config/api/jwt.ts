import dotenv from "dotenv";
import { StringValue } from 'ms';
dotenv.config();

export const jwtConfig: {
  secret: string;
  expiresIn: StringValue;
} = {
  secret: process.env.JWT_SECRET || "default_secret",
  expiresIn: "1d"
};