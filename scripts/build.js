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

const readCommon = async (name) => await fs.readFile(new URL(`${src}/common/${name}.less`,
  import.meta.url), encodingUtf8);

const repalceList = {
  ...valueList,
  partialBase: await readCommon('base'),
  partialColor: await readCommon('color'),
  partialSpace: await readCommon('space'),
  partialTypeset: await readCommon('typeset'),
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

const writeCSS = (data, fileName) => writeFile(data, fileName, 'css')
const writeLess = (data, fileName) => writeFile(data, fileName, 'less')
const writeScss = (data, fileName) => writeFile(data, fileName, 'scss')

const replaceVal = (str) => {
  const replacedText = str.replace(/[A-Za-z]+__cfg__val/g, (match) => {
    return repalceList[match.replace('__cfg__val', '')]
  })
  return replacedText
}
// less to css 

const less2css = async (str, fileName) => {
  try {
    const render = await less.render(str, {})
    writeCSS(render.css, `${fileName.replace('less', 'css')}`)
  } catch (err) {
    console.error(err);
  }
}

// read dir

const genFile = async (type, fn) => {
  try {
    const input = dirc(`./src/${type}`)
    const files = await fs.readdir(input);
    for await (const file of files) {
      const readData = await fs.readFile(`${input}/${file}`, encodingUtf8)
      const newVal = replaceVal(readData)
      fn(newVal, file)
    }
  } catch (err) {
    console.error(err);
  }
}


// build less

genFile('less', writeLess)

// build scss

// readHandle(dirc('./src/dist/scss'), fileName => readFileHandle(fileName, './scss/', writeScss))

// // build css

// setTimeout(() => {
//   readHandle(dirc('./dist/less'), fileName => readFileHandle(fileName, './', less2css))
// }, 1000);