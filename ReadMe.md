# node

## 命令

### nrm

npm i nrm -g
安装

nrm ls
查看当前 nrm 内置的几个 npm 源的地址

nrm use < npm 源别名>
切换 npm 源地址

# MongDB

Windows 用户向导：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
Linux 用户向导：https://docs.mongodb.com/manual/administration/install-on-linux/
Mac 用户向导：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

brew tap mongodb/brew
安装

brew install mongodb-community@4.2
安装 MongDB

brew untap mongodb/brew && brew tap mongodb/brew
卸载

brew services start mongodb-community
作为主进程

mongod --config /usr/local/etc/mongod.conf --fork
作为后台进程

ps aux | grep -v grep | grep mongod
验证 mongdb 是否在运行

mongo
运行

https://nodejs.org/api/modules.html#modules_cycles

# package.json

语义化版本（semver）即 dependencies、devDependencies 和 peerDependencies 里的如："co": "^4.6.0"。

### semver 格式：主版本号.次版本号.修订号。版本号递增规则如下：

- 主版本号：做了不兼容的 API 修改
- 次版本号：做了向下兼容的功能性新增
- 修订号：做了向下兼容的 bug 修正
- v1.0.1

## npm install -h

```
npm install (with no args, in package dir)
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>

aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]
```

直接使用 `npm i` 安装的模块是不会写入 `package.json` 的 `dependencies(或 devDependencies)`

- `npm i express --save/ npm i express -S`
- `npm i express --save-dev / npm i express -D`
- `npm i express --save --save-exact`

## 每次安装锁定版本号

```
npm config set save-exact true
```

这样每次 `npm i xxx --save` 的时候回锁定依赖的版本号, 相当于加了 `--save-exact` 参数

## npm shrinkwrap 依赖树

运行 `npm shrinkwrap` 会在当前目录下产生一个 `npm-shrinkwrap.json` , 包含了通过 `node_modules` 计算出的依赖书及版本, 只要目录下有 `npm-shrinkwrap.json` 则运行 `npm install` 会优先使用 `npm -shrinkwrap.json` 进行安装, 没有则使用 `package.json` 进行安装

# node 模板

```
<% code %>：运行 JavaScript 代码，不输出
<%= code %>：显示转义后的 HTML 内容
<%- code %>：显示原始 HTML 内容
```

## inclues 拆分模板

- 模板可服用,减少重复代码
- 主模板结构清晰

我们将原来的 users.ejs 拆成出了 header.ejs 和 footer.ejs，并在 users.ejs 通过 ejs 内置的 include 方法引入，从而实现了跟以前一个模板文件相同的功能。

### header.ejs

```
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {padding: 50px;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;}
    </style>
  </head>
  <body>
```

### footer.ejs

```
  </body>
</html>
```

### users.ejs

```
<%- include('header') %>
  <h1><%= name.toUpperCase() %></h1>
  <p>hello, <%= name %></p>
<%- include('footer') %>
```
