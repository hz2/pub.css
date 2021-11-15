import * as fs from 'fs/promises';

const cfg = {
    recursive: true,
    force: true
}
fs.rm('dist', cfg);