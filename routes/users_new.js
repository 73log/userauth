const express = require('express');
const router = express.Router();
const getFlash = require('../util/get_flash.js');


router.get('/', (req, res, next) => {
  res.render('users_new', {
    title: 'サインアップ',
    csrfToken: req.csrfToken(),
    flash: getFlash(req)
  });
});


module.exports = router;
