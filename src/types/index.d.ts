import { IConfig } from "config";
import Server from "../server";

declare global {
  var config: IConfig;
  var server: Server;
}

// external module marker
export {}