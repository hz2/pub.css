import * as fs from 'fs/promises';

const cfg = {
    recursive: true,
    force: true
}
fs.rm('less', cfg);
fs.rm('css', cfg);
fs.rm('scss', cfg);