const fs = require("fs");
const data = fs.readFileSync("./data.json","utf-8");

let dataParseada = JSON.parse(data);

function list(){
    return dataParseada.map(tarea=>tarea.titulo);
}

module.exports = { list }