import less from 'less';
import * as fs from 'fs/promises';
import {
    valueList
} from "../pub.config.js";

// it works under Node.js version 16+


process.chdir('./src/')


// write file

const writeFile = async (data, fileName, type) => {
    try {
        await fs.mkdir(`../${type}`, {
            recursive: true
        });
        fs.writeFile(`../${type}/${fileName}`, data, {
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
        return valueList[match.replace('__cfg__val', '')]
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

// read file

const readFile = async fileName => {
    try {
        const output = await fs.readFile(fileName, {
            encoding: 'utf8'
        })
        const newVal = replaceVal(output)
        return newVal
    } catch (err) {
        console.error(err);
    }
}

// read dir

const readHandle = async (dir, fn) => {
    try {
        const files = await fs.readdir(dir);
        for await (const file of files) {
            fn(file);
        }
    } catch (err) {
        console.error(err);
    }
}

const readFileHandle = async (fileName, dir, fn) => {
    try {
        const newVal = await readFile(dir + fileName)
        fn(newVal, fileName)
    } catch (error) {
        console.error(error);
    }
}

// build less

const readLess = fileName => readFileHandle(fileName, './less/', writeLess)
readHandle('./less', readLess)

// build scss

const readScss = fileName => readFileHandle(fileName, './scss/', writeScss)
readHandle('./scss', readScss)

// build css

setTimeout(() => {
    process.chdir('../less/')
    const readLess2CSS = fileName => readFileHandle(fileName, './', less2css)
    readHandle('./', readLess2CSS)
}, 1000);