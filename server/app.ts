import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";
import { userRouter } from "./routes/video";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

function createVideo() {
  var exec = require('child_process').exec;
  var child = exec('java -jar server/ressources/idm_tp_jar.jar vignette',
    function (error, stdout, stderr){
      console.log('Output -> ' + stdout);
      if(error !== null){
        console.log("Error -> "+error);
      }
    });
  var child = exec('java -jar server/ressources/idm_tp_jar.jar variante',
    function (error, stdout, stderr){
      console.log('Output -> ' + stdout);
      if(error !== null){
        console.log("Error -> "+error);
      }
    });
}

function addVideo() {
}

// fichier
app.use(express.static(path.join(__dirname, "ressources/")));
// api routes
app.get("/api/video", function (request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  createVideo();
});

app.post("/api/video", (request, response) => {
  const name = request.body.name;
  if (!isNaN(name)) {
    response
      .status(400)
      .send("No string as name");
  } else {
    console.log("Hello " + name);
  }

  response.send("POST request to homepage");
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
