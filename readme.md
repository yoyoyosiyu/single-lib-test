# 基于rollup打包的单库项目

## 如何使用

通过运行如下命令来打包库
```
npm run build
```

如果需要生成类型声明文件，可以运行如下命令
```
npm run build:types
```

如果要清空已经打好包的文件夹
```
npm run clean:dist
```

测试commonjs模块
```
node test/index.cjs
```

测试es module模块
```
node test/index.mjs
```

## 在开发环境下如何测试自己发布

在项目的根目录下运行
```
npm link
```
这样的话就会在本机的npm 公共 node_modules下创建一个相应的软连接，这个可以到自己所在的电脑上相应的位置查看。模拟发布到了npm的中央仓库的效果

然后到需要使用该库的项目目录下运行

```
npm link @huyutech/single-lib-test
```
相当于npm install @huyutech/single-lib-test

在test目录下项目可以用来做测试。test目录下的index.cjs和index.mjs分别用来测试commonjs和esm两种模块的工作情况。每个文件都采用了直接路径+文件和npm依赖管理的方式。

## 实际的发布

如果希望发布带有@开头的包，那么需要先登录npm的官方网站。然后创建一个public的组织（organization），例如我们需要发布的包的名字为@a/bbbb, 那么我们必须要先在npm上创建一个叫做a的组织。
然后使用npm命令登录
```
npm login
```

然后进入你要发布的包所在项目的根目录中，运行
```
npm publish --access public
```

