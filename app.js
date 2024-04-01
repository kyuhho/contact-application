const express = require("express");
const path = require("path");
//app server 객체 생성
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello express!");
});

// 모든 연락처 가져오기
app.get("/contacts/:id", (req, res) => {
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
  // res.sendFile(__dirname + "/assets/contacts.html");
});

// 새 연락처 추가하기
app.post("/contacts/:id", (req, res) => {
  res.status(201).send(`Update Contact for ID: ${req.params.id}`);
});

app.delete("/contacts/:id", (req, res) => {
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`port: ${port} server executed`);
});
