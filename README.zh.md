自定义变量：


```css
#yourApp {
  --pub-code-font: "JetBrains Mono", "Fira Mono", "DejaVu Sans Mono",
}

```



Less 中定义变量：（要求 less v4.0.0 以上 ）

示例：

```
@pub-user-times: 500,1000; // 时间
```

缺省值

位于 `pub.config.js` 中的 `valueList.time`

`100, 150, 200, 250, 300, 350, 400, 500, 750, 1000, 1250, 1500, 2000, 4000, 5000, 10000`

对应关系：

| scss | less | valueList |
| --- | --- | --- |
| $pub-user-time | @pub-user-time | time |



全局使用：

```less
@pub-user-time: 500,1000;
@import '~pub.css/less/index.less';
```

分文件引入：

```less
@pub-user-time: 500,1000;
@import '~pub.css/less/time.less';
```

