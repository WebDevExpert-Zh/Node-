import fs from 'fs';
import fs2 from 'fs/promises';
fs.readFile('./redeme.txt', (err, data) => {
    console.log(data.toString());
    console.log('err',err);
})
fs2.readFile('./redeme.txt').then(data => {
    console.log(data.toString());
    
}).catch(err => {
    console.log(err);
    
})
fs.writeFileSync('./redemes.txt', '哥们儿要进大厂1', {
    flag: 'a'
})
let fsData = fs.readFileSync('./redeme.txt')
console.log(fsData.toString(),'同步');
