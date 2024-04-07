const express = require("express");
//app server 객체 생성
const app = express();
//router 객체 생성
const router = express.Router();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello express!");
});

router
  .route("/contacts")
  .get((req, res) => {
    //연락처 전체보기
    res.status(200).send("View All Contact");
  })
  .post((req, res) => {
    //새 연락처 추가하기
    res.status(201).send(`Update Contact for ID: ${req.params.id}`);
  });

router
  .route("/contacts/:id")
  .get((req, res) => {
    // 연락처 상세보기
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
  })
  .post((req, res) => {
    // 연락처 수정하기
    res.status(201).send(`Update Contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    // 연락처 삭제하기
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  });

app.use(router);

app.listen(port, () => {
  console.log(`port: ${port} server executed`);
});
