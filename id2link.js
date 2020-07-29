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
  ("use strict");
  // 感谢 @flaribbit 的帮助，这是他的 GitHub 地址 https://github.com/flaribbit
  // SICP 的思想无处不在
  var len = "https://www.netpad.net.cn/svg.html#posts/".length;
  var id = document.URL.slice(len);
  function AddLink(name, web) {
    var target = document.querySelector("div.files");
    var el = document.createElement("div");
    var input = document.createElement("input");
    target.parentNode.insertBefore(el, target);
    target.parentNode.insertBefore(input, target);
    input.style = "border: none;width: 1px;z-index: -1;";
    el.className = "export";
    el.innerText = name;
    el.style = "cursor: pointer;";
    el.onclick = function () {
      prompt("Ctrl+C", web);
    };
  }
  AddLink(
    "复制分享链接",
    "https://www.netpad.net.cn/resource_web/course/#/" + id
  );
  AddLink(
    "复制嵌入链接",
    '<iframe width="772" height="434" src="https://www.netpad.net.cn/thirdInnerPad.html?id=' +
      id +
      "#posts/" +
      id +
      '" frameborder="0" scrolling="auto"></iframe>'
  );
})();
