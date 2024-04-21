const express = require("express");
//app server 객체 생성
const app = express();

const port = 3000;

const requestTime = (res, req, next) => {
  let today = new Date();
  let now = today.toLocaleTimeString();
  req.requestTime = now;
  next();
};

app.use(requestTime);

app.route("/").get((req, res) => {
  const responseText = `요청 시간 ${res.requestTime}`;
  res.set("Content-type", "text/plain");
  res.status(200).send(responseText);
});
// /contacts로 요청했을 때의 라우트 코드
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`port: ${port} server executed`);
});
