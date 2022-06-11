//importar mongoose
import mongoose from 'mongoose';

export async function conectarConBD(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandose a BD ")
        
    }catch(error){
        console.log("Error en BD:"+error)
    

    }
}