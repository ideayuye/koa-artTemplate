/*
* koa的arttempalte的渲染模块
*/

var tmpl    = require('art-template');
var path    = require('path');
var fs      = require('fs');


/*
* @description  封装适用于koa的art-template的渲染中间件
* @param 指定的模板目录
*
* @returns 返回Generator类型的渲染方法 参数-模板名称、数据
* */
var render = function (dir) {
    var viewsDir = dir||'views';
    
    if( Object.prototype.toString.call(viewsDir) !== "[object String]"){
        viewsDir = 'views';
    }

    return function *(view,data) {
        var vPath = path.resolve(viewsDir,view),
            ext = '.html';
            data = data||{};
        var html;
        var exist = yield new Promise((resolve,reject)=>{
            fs.exists(vPath + ext, (exists) => {
                if(!exists)
                    console.warn("template '" + vPath + ext + "' is not found");
                resolve(exists);
            });
        });

        html = exist?tmpl(vPath,data):"";
        return html;
    };
};

module.exports = render;

