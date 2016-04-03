# koa-artTemplate
封装koa的art-template模板中间件

#Example
初始化传入模板目录,会返回一个渲染中间件。然后每次需要渲染的时候，传入模板名称和数据。

    var koa     = require('koa');
    var route   = require('koa-route');
    var app     = koa();
    var views   = require('koa-arttemplate');
    var render  = views(__dirname+"/views");

    app.use(route.get('/test',function *(){
        this.body = yield render('hello');
    }));

    app.listen(8089);


