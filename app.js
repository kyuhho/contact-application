const express = require("express");
//app server 객체 생성
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const port = 3000;

// /로 요청했을 때 라우트 코드
app.get("/", (req, res) => {
  res.status(200).send("hello express!");
});

app.get("/test", (req, res, next) => {
  const error = new Error("test");
  error.status = 401;
  next(error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /contacts로 요청했을 때의 라우트 코드
app.use("/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`port: ${port} server executed`);
});
