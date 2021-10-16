[![Open in VS Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/hz2/pub.css)
[![NPM Package](https://github.com/hz2/pub.css/actions/workflows/action.yml/badge.svg)](https://github.com/hz2/pub.css/actions/workflows/action.yml)
[![npm](https://img.shields.io/npm/v/pub.css)](https://www.npmjs.com/package/pub.css)
[![npm](https://img.shields.io/npm/dm/pub.css)](https://www.npmjs.com/package/pub.css)
[![Docker Package](https://github.com/hz2/pub.css/actions/workflows/action-docker.yml/badge.svg)](https://github.com/hz2/pub.css/actions/workflows/action-docker.yml)
[![Docker Image Version](https://img.shields.io/docker/v/hzsq/pub.css)](https://hub.docker.com/r/hzsq/pub.css)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/hz2/pub.css) 
![GitHub last commit](https://img.shields.io/github/last-commit/hz2/pub.css) 


A simple CSS style toolkit that helps you build pages easily

# Logo:

<img src="./assets/logo-v2.svg" alt="logo" width="120px" loading="lazy">

# Useage：

- For Less

```less
@import '~pub.css/less/index.less';
```

- For Scss

```scss
@import '~pub.css/scss/index.scss';
```

- css bundle

```scss
@import '~pub.css/css/index.css';
```

- main.js

```js
import 'pub.css/css/index.css';
```

- docker
start a service
```bash
docker run --name some-pubcss -d -p 8012:80 hzsq/pub.css
```
proxy `localhost:8012` as `/pubcss`
```html
<link rel="stylesheet" type="text/css" href="/pubcss/css/index.css">
```

# Document

- [Document](./doc.md)
