import * as express from "express";

const app = express();
const HttpPort = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(HttpPort, () => {
  console.log('Example app listening on port 3000!');
});