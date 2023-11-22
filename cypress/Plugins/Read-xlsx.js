const XLSX = require("xlsx");
const fs = require("fs");


const read=({file,sheet})=>{
  const buf=fs.readFileSync(file);
  const workbook=XLSX.read(buf,{type:'buffer'});
  const rows=XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
}
module.exports={
  read,
}