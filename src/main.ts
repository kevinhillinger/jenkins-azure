// Load the .env file if it exists, first
import * as dotenv from "dotenv";
dotenv.config();

import config from 'config';
global.config = config;

console.log("> Configuration:")
console.log(config);

import Startup from "./startup";

new Startup(config).configureServices().then(startup => {
  startup.start();
});