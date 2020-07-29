# Netpad_Share_Link
网络画板外链分享方案

如果只是分享演示链接

```
https://www.netpad.net.cn/resource_web/course/#/+id
```

例如

```
https://www.netpad.net.cn/resource_web/course/#/114514
```

---

如果需要 iframe 嵌入

把 `{id}` 换成课件编号

```
<iframe width="772" height="434" src="https://www.netpad.net.cn/thirdInnerPad.html?id={id}#posts/{id}" frameborder="0" scrolling="auto"></iframe>
```

---

手动替换太麻烦，放了 Python 脚本

---

TODO

- [x] [编写油猴脚本一键生成](https://greasyfork.org/zh-CN/scripts/407902-%E7%BD%91%E7%BB%9C%E7%94%BB%E6%9D%BF%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB%E8%84%9A%E6%9C%AC)

- [ ] 减少代码重复部分
