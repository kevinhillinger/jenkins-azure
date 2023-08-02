import Server from "./server";
import { IConfig } from "config";

export default class Startup {
  private server?: Server;

  constructor(private config: IConfig) {
  }

  public async configureServices(): Promise<Startup> {
    await this.configureServer();
    return this;
  }

  public async start(): Promise<void> {
    await this.server?.start();
  }

  private async configureServer() {
    const server = new Server({
      port: this.config.get('server.port'),
      config: this.config
    });

    global.server = this.server = server;
    
    return Promise.resolve();
  }

}