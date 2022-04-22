import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { UserRoutes } from "../routers/user_routes";
import { CommonRoutes } from "../routers/common_routes";

class App {

   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

   private user_routes: UserRoutes = new UserRoutes();
   private common_routes: CommonRoutes = new CommonRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.user_routes.route(this.app);
      this.common_routes.route(this.app);
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      //mongoose.connect(this.mongoUrl);
   }

}
export default new App().app;