import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEstudiante } from './estudiante.model';
import { EstudianteDto } from './estudiante.DTO';

@Injectable()
export class EstudianteService {

    constructor(@InjectModel('Estudiante') private estudianteModel: Model<IEstudiante>){}

    saludo(): string{
        return "Esta es la ruta de estudiante"
    }

    //** CRUD*/
/** Crear */
   async CrearEstudiante (estudiante: EstudianteDto ){
        const resultado =new this.estudianteModel(estudiante)
        return await resultado.save()
    }
/** Find All */
    async ConsultarEstudiantes() : Promise <IEstudiante[]> {
        return await this.estudianteModel.find().exec()


    }

/** Delete */
 async EliminarEstudiantes(id: string){
    const res=await this.estudianteModel.findByIdAndDelete(id).exec()
    if (res!= null)
        return res
    else 
    return null
 }

 /** Actualizacion */

 async ActualizarEstudiante(id: string , estudiante: EstudianteDto){
    const res = await this.estudianteModel.findByIdAndUpdate(id, estudiante).exec()
    if (res!= null)
        return res
    else 
    return null
 }

}
