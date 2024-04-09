const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    //연락처 전체보기
    res.status(200).send("View All Contact");
  })
  .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    //새 연락처 추가하기
    res.status(201).send(`Update Contact for ID: ${req.params.id}`);
  });

router
  .route("/:id")
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

module.exports = router;
