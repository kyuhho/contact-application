const express = require("express");
//app server 객체 생성
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello express!");
});

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
  res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기
app.post("/contacts", (req, res) => {
  res.status(201).send("Create Contacts");
});

app.listen(port, () => {
  console.log(`port: ${port} server executed`);
});
