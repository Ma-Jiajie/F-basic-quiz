完成度：
=======
* 页面还原度还可以，但还有优化空间
* 查询用户始终404，但查询education可以正常从后端拿到数据显示出来


测试：
=====
* 有对API进行测试，但测试文件名和被测文件名称没有对齐

Details:
+ \+ 正确进行manual mock和异步测试


知识点：
=======


Details:
+ \+ 合理使用了flex布局
+ \+ 语义化标签有一些使用，但还可以优化
+ \+ 使用了es6语法，如模版字符串等
- \- 下面部分加强语义化标签但使用，并注意使用正确但标签，例如span h1/2/3，p的区别
- \- 可以使用参数的结构解构赋值

工程实践：
=========
* 有小步提交，但提交的massgae可以更明确，尤其是后面的提交
* 有单独抽出api层，但app.js内容还可以进一步做抽取拆分
* 有抽取baseURL意识，但更进一步可以把此类配置相关内容抽取出config.js

Details:
+ \+ css比较扁平，没有过度嵌套
- \- class命名需要更加语义化
- \- 测试example需要被删除
- \- default图片直接写在html即可，且注意拼写错误
- \- userAvatarEleMent 注意拼写，element是一个单词中间不用大写
- \- 这种取id方式与url关联性很强，若url层次变多则会出问题，建议使用正则匹配
- \- 渲染DOM相关代码可以单独抽出方法


