const fs = require("fs"); 
const data = fs.readFileSync("./data.json","utf-8");
const dataParseada = JSON.parse(data);


function edit(tituloEditar,descripcionNueva){
    const nuevoArray = dataParseada.map((item=>
        {
            if (item.titulo===tituloEditar){
          
                return {
                    titulo:tituloEditar,
                    descripcion: descripcionNueva
                }
            
            }
            return item;
        })
    )
    const dataStringify = JSON.stringify(nuevoArray)
    fs.writeFileSync("./data.json",dataStringify);

    console.log(nuevoArray);
}



module.exports = { edit }