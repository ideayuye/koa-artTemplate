
var koa     = require('koa');
var route   = require('koa-route');
var app     = koa();
var views   = require('../index');
// var render  = views(__dirname+"/views");
var render  = views();

app.use(route.get('/test',function *(){
    this.body = yield render('hello');
}));

app.listen(8089);
console.log('listen 8089');
