//----------------------------------------------
// to array
const fs = require('fs')
lnamefile = '.dcm';
folderPath = './data';
var make=(path)=>{
    const treelist=[];
    fs.readdirSync(path).forEach(file=>{
        const key = `${path}/${file}`;
        const treeNode = {
            label:file,
            key:key,
        };
        if(!file.includes(lnamefile)){
            treeNode.nodes = make(`${path}/${file}`);
        }else{
            treeNode.value =`${path}/${file}`;
            // treeNode.leaf = true;
        }
        treelist.push(treeNode);
    })
    return treelist;
}

const treelist_array = make(folderPath);
console.log(treelist_array);

// to json
let data= JSON.stringify(treelist_array,null, 2);
fs.writeFileSync('nattavee.json',data,(err) => {
    if(err){throw err;}
});
// ----------------------------------------------------------