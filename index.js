/*
* koa的arttempalte的渲染模块
*/

var tmpl    = require('art-template');
var path    = require('path');
var debug   = require('debug')('koa-arttemplate');


var render = function (dir) {
    var viewsDir = dir||'views';
    
    if( Object.prototype.toString.call(viewsDir) !== "[object String]"){
        throw new Error('dir should be string');
    }

    return function *(view,data) {
        var vPath = path.resolve(viewsDir,view);
            data = data||{};
        var html = tmpl(vPath,data);
        return html;
    }
}

module.exports = render;


