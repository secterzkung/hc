const express = require('express');
const router = express.Router();

const huay = [
    { id:1, up3:'XXX',up2:'XX' }
];

router.get('/',(request,response)=> {
    // const { q, sortBy } = request.query;
    response.render('home',{ huay });
});
module.exports= router;