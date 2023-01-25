const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const hbs = require('hbs');

const generalRouter = require('./routers/general')
const app = express();
const hup3 = [
    { id:1, up3:'XXX' }
];
const hup2 = [
    { id:1, up2:'XX' }
];
app.use(express.urlencoded({ extend:true }));
app.use(express.static('./images'));
app.use(express.static('./images/bg'));
app.use(express.static('./images/icon'));
app.use(express.static('./images/marketing'));
app.use(express.static(__dirname));
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use('/', generalRouter);

app.listen(8888, () => {
    console.log('http://localhost:8888');
});