import { Request, Response, Router } from "express";

const userRouter: Router = Router();

function createVideo() {
  var exec = require('child_process').exec;
  var child = exec('java -jar idm_tp_jar.jar vignette',
    function (error, stdout, stderr){
      console.log('Output -> ' + stdout);
      if(error !== null){
        console.log("Error -> "+error);
      }
  });
  var child = exec('java -jar idm_tp_jar.jar variante',
    function (error, stdout, stderr){
      console.log('Output -> ' + stdout);
      if(error !== null){
        console.log("Error -> "+error);
      }
  });
}

userRouter.get("/", (request: Request) => {
  createVideo();
});

export { userRouter };
