import fs from 'fs';

fs.readFile('./.gitignore','utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
    console.log('data', data)
    }
})

