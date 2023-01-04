const csvFilePath='train_study_level.csv'
const csv=require('csvtojson')
const fs = require('fs')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

    fs.writeFileSync("train_study_tabledata.json",JSON.stringify(jsonObj),"utf-8",(err) =>{
        if(err) console.log(err)
    })
})