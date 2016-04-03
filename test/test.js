/**
 * Created by tinybear on 2016/4/3.
 */

var assert  = require('assert');
var views   = require('../index');
var co      = require('co');


describe("koa-arttemplate",()=>{
    it("render",(done)=>{
        co(function*(){
            var render  = views('views');
            var html = yield render('test');
            assert.equal('<div>hello</div>',html);
            html = yield render('test',{hello:"hello"});
            assert.equal('<div>hello</div>',html);
            html = yield render('test1',{hello:"hello"});
            assert.equal('<div>hello</div>',html);

            var render1 = views({});
            html = yield render1('test');
            assert.equal('<div>hello</div>',html);
            var render2 = views();
            html = yield render2('test');
            assert.equal('<div>hello</div>',html);
            //目录或者文件找不到
            var render3 = views('test');
            html = yield render3('test');
            assert.equal('',html);
        }).then(()=>{
            done()
        },(err)=>{
            done(err);
        });

    });
});



