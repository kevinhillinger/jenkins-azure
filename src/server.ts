import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes'
import { Server as HttpServer } from 'http';
import logger from 'morgan';
import { IConfig } from "config";
import { Socket } from 'net';

export interface ServerOptions {
  port: number;
  config: IConfig;
}

class Server {
  config: IConfig;

  /** The HTTP server handle for when we start express. */
  private httpServer?: HttpServer;
  private app?: express.Application;

  connections: Socket[] = [];

  constructor(private options: ServerOptions) {
    this.config = options.config;
  }

  async start(): Promise<Server> {
    this.app = await this.createExpress();

    return new Promise<Server>((resolve) => {
      console.log("  Starting Express server.");

      if (this.app === undefined) {
        throw new Error('Express app is undefined');
      }

      this.httpServer = this.app.listen(this.options.port, () => {
        console.log(`🚀 Server ready at http://localhost:${this.options.port}`);
        resolve(this);
      });

      this.httpServer.on('connection', connection => {
          this.connections.push(connection);
      });
    });
  }

  stop(): Promise<{ err: Error | undefined }> {
    return new Promise<{ err: Error | undefined }>((resolve) => {
      if (this.httpServer) {
        this.httpServer.close(err => {
          resolve({ err });
        });
      } 
      else {
        resolve({ err: undefined });
      }
    });
  }

  private async createExpress(): Promise<express.Application> {
    const app = express();

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/', routes);

    return app;
  }

}

export default Server;
