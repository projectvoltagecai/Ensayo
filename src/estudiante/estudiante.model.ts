import mongoose from "mongoose";

export const EstudianteSchema = new mongoose.Schema({
    Nombres: String,
    Apellidos: String,
    User: String,
    Pass: String,
    audio: Buffer

})

export interface IEstudiante extends mongoose.Document{
    Nombres: String;
    Apellidos: String;
    User: String;
    Pass: String;
    audio: Buffer
}