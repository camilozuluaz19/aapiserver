//Importamos el modelo de datos
//import {modeloHabitacion} from '../models/modeloHabitacion.js'

export class ServicioReserva{

    constructor(){}

    async registrar(reserva){
        //let reservaARegistrar=new modeloHabitacion(reserva)
        return await reservaARegistrar.save()
    }

    async buscarPorId(id){
        //let reserva=await modeloHabitacion.findById(id)
        return reserva
    }

    async editar(id,datos){
        //return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        //return await modeloHabitacion.findByIdAndDelete(id)
    }

}