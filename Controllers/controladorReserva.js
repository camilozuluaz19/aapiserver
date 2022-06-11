//Importo els ervicio
//import {ServicioHabitacion} from '../services/ServicioHabitacion.js'


import { request } from "express";


export class ControladorReserva {
  //Logica para el servicio
  constructor() {}

  //let {ServicioHabitacion} from '../services/ServicioHabitacion.js'
  //BUSCAR POR ID GET
   async buscarPorId(request, response) {
    let datos = [
      {
        nom_cliente: "cristian zuluaga",
        fecha_ing: "abril 19 2022",
        fecha_salida: "abril 24 2022",
        num_personas: 2,
      },
    ]; //Borrar despues
    let id = request.params.id;
    console.log(id);
    try {
      //todo sale bien
      response.status(200).json({
        mensaje: "exito buscando los datos " + id,
        data: datos,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Error buscando los datos: " + error,
        data: [],
        estado: falso,
      });
    }
  }

  //REGISTRAR RESERVA POST

  registrarReserva(request, response) {
    let datosPeticion = request.body;
    try {
      response.status(200).json({
        mensaje: "EXITO AGREGANDO LA RESERVA ",
        data: datosPeticion,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "ERROR REGISTRANDO LA RESERVA ",
        data: [],
        estado: false,
      });
    }
  }


  //EDITAR RESERVA PUT
  editarReserva(request, response) {
    let id = request.params.id;
    let datosPeticion = request.body;
    try {
      response.status(200).json({
        mensaje: "EXITO EDITANDO SU RESERVA ",
        data: datosPeticion,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "ERROR EDITANDO SU RESERVA " + error,
        data: [],
        estado: false,
      });
    }
  }


  //ELIMINANDO RESERVA DELTE
  eliminarReserva(request, response) {
    let id = request.params.id;
    try {
      response.status(200).json({
        mensaje: "EXITO ELIMINANDO LA HABITACION RESERVADA ",
        data: [],
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "ERROR ELIMINANDO LA RESERVA " + error,
        data: [],
        estado: false,
      });
    }
  }
}