import less from 'less';
import * as fs from 'fs/promises';
import {
  valueList
} from "../pub.config.js";
import {
  minify
} from "./simpleMinify.js";
import path from "path";

// it works under Node.js version 16+

const encodingUtf8 = {
  encoding: 'utf8'
}

const dirc = x => path.resolve(process.cwd(), x)
const src = dirc('./src')

const r = async (name) => await fs.readFile(new URL(`${src}/common/${name}.less`,
  import.meta.url), encodingUtf8);

const repalceList = {
  ...valueList,
  partialBase: await r('base'),
  partialColor: await r('color'),
  partialSpace: await r('space'),
  partialTypeset: await r('typeset'),
}


// write file

const writeFile = async (data, fileName, type) => {
  const dist = path.resolve(process.cwd(), './dist')
  try {
    await fs.mkdir(`${dist}/${type}`, {
      recursive: true
    });
    if (type === 'css') {
      data = minify(data)
    }
    fs.writeFile(`${dist}/${type}/${fileName}`, data, {
      encoding: 'utf8'
    });
  } catch (err) {
    console.error(err);
  }
}

const replaceVal = (str) => {
  const replacedText = str.replace(/[A-Za-z]+__cfg__val/g, (match) => {
    return repalceList[match.replace('__cfg__val', '')]
  })
  return replacedText
}

// less to css 

const less2css = async (str, fileName) => {
  try {
    const strAbs = str.replace(/\@import url\(\'.\//g, `@import url('${dirc('./dist/less')}/`);
    const render = await less.render(strAbs, {})
    writeFile(render.css, fileName.replace('less', 'css'), 'css')
  } catch (err) {
    console.error(err);
  }
}

// read dir

const genFile = async type => {
  try {
    let input = dirc(`./src/${type}`)
    if (type === 'css') {
      input = dirc(`./dist/less`)
    }
    const files = await fs.readdir(input);
    for await (const file of files) {
      const readData = await fs.readFile(`${input}/${file}`, encodingUtf8)
      const newVal = replaceVal(readData)
      if (type === 'css') {
        less2css(newVal, file)
      } else {
        writeFile(newVal, file, type)
      }
    }
  } catch (err) {
    console.error(err);
  }
}


// build less
genFile('less')

// build scss
genFile('scss')

// build css
setTimeout(() => {
  genFile('css')
}, 1000);