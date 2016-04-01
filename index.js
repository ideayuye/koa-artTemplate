/*
* koa的arttempalte的渲染模块
*/

var tmpl = require('art-template');
var path = require('path');


var render=function (dir) {
    var viewsDir = dir;
    return function *(view,data) {
        var vPath = path.resolve(viewsDir,view);
            data = data||{};
        var html = tmpl(vPath,data);
        return html;
    }
}

module.exports = render;


