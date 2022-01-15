//funcion de multiplicar

const fs= require('fs');
const colors = require('colors'); // importa npm colors


                   //async vuelve promesa a funcion 
const crearARchivo= async (tabla=5, listar= false, hasta =10)=>{

    let salida = '';
    let consola = '';

    
//la variable hasta se declara en yargs, con valor por default si no entra en consola
    for( let i=1; i<=hasta; i++){
    
        salida+=(`${tabla} x ${i} = ${tabla*i} \n`); // el archivo se graba sin intruccion de colores
        consola+=(`${tabla} ${'x'.red} ${i} ${'='.red} ${tabla*i} \n`); // se visualiza la tabal con colores
    }
  
    try{
        // imprimir tabla de 5


        if(listar){
            console.log("=============".green);
            console.log('Tabla del :'.green ,colors.blue(`${tabla}`) );
            console.log("=============".green); // usa.green de color para cambiar color
            console.log(consola);
        }

    //grabar archivo en node por medio de funcion file system
    
    /*
    //con writeFile
    
    fs.writeFile(`tabla ${tabla}.txt`,salida,(err)=>{
    
        if(err) throw err;
        console.log('archivo guardado');
    
    })
    */
    
    //con writeFileSync
                    //./salida direcciona la salida de la tabla en carpera
    fs.writeFileSync(`./salida/tabla ${tabla}.txt`,salida);
    
    return `tabla-${tabla}.txt creada`;
  }catch(err){
      throw err;
  }
    
}

//expotacion de metodo en node

module.exports = { 
    crearARchivo
}  // exporta ewl modulo para usar mcrear archivo q trae multiplicar