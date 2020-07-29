// ==UserScript==
// @name         网络画板链接分享脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.netpad.net.cn/svg.html*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  // 感谢 @flaribbit 的帮助，这是他的 GitHub 地址 https://github.com/flaribbit
  var url = document.URL;
  var len = "https://www.netpad.net.cn/svg.html#posts/".length;
  var id = url.slice(len);
  var target = document.querySelector("div.files");
  // el
  var el = document.createElement("div");
  var input = document.createElement("input");
  target.parentNode.insertBefore(el, target);
  target.parentNode.insertBefore(input, target);
  input.style = "border: none;width: 1px;z-index: -1;";
  el.className = "export";
  el.innerText = "复制分享链接";
  el.style = "cursor: pointer;";
  // el1
  var el1 = document.createElement("div");
  var input1 = document.createElement("input");
  target.parentNode.insertBefore(el1, target);
  target.parentNode.insertBefore(input1, target);
  input1.style = "border: none;width: 1px;z-index: -1;";
  el1.className = "export";
  el1.innerText = "复制嵌入链接";
  el1.style = "cursor: pointer;";
  // el1
  el.onclick = function () {
    prompt("", "https://www.netpad.net.cn/resource_web/course/#/" + id);
  };
  el1.onclick = function () {
    prompt(
      "",
      '<iframe width="772" height="434" src="https://www.netpad.net.cn/thirdInnerPad.html?id=' +
        id +
        "#posts/" +
        id +
        '" frameborder="0" scrolling="auto"></iframe>'
    );
  };
})();
