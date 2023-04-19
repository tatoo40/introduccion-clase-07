const { list } = require("./list");

function find(parametro){
    const titulos = list();
    return titulos.includes(parametro);
}

module.exports = { find }