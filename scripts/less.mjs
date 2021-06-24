import less from 'less';
import * as fs from 'fs/promises';
const basepath = './'
const outputpath = '../css/'

// change dir

process.chdir('./less/')

// write file

const writeFile = async (data, name) => {
    try {
        await fs.mkdir(outputpath, {
            recursive: true
        });
        fs.writeFile(outputpath + name.replace('less', 'css'), data, {
            encoding: 'utf8'
        });
    } catch (err) {
        console.error(err);
    }
}


// less to css 

const less2css = async (str, name) => {
    try {
        const render = await less.render(str, {})
        writeFile(render.css, name)
    } catch (err) {
        console.error(err);
    }
}

// read file

const readFile = async fileName => {
    try {
        const output = await fs.readFile(basepath + fileName, {
            encoding: 'utf8'
        })
        less2css(output, fileName)
    } catch (err) {
        console.error(err);
    }
}

// read dir

try {
    const files = await fs.readdir(basepath);
    for await (const file of files)
    readFile(file);
} catch (err) {
    console.error(err);
}