import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDto } from './estudiante.DTO';

@Controller('estudiante')
export class EstudianteController {

    constructor (private readonly estudianteService: EstudianteService){}

    @Get()
    estudianteHola(): string{
        return this.estudianteService.saludo()
    }

    @Post()
    async create(@Body() estudiante : EstudianteDto){
        const respuesta = await this.estudianteService.CrearEstudiante(estudiante)
        return {ok: true, respuesta}
    }

    @Get('all')
    async buscarTodos(){
        return await this.estudianteService.ConsultarEstudiantes()
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: string){
        const estudianteEliminado= await this.estudianteService.EliminarEstudiantes(id)
        if (estudianteEliminado){
            return {ok: true , estudianteEliminado}
        }
        return {ok: false, mensaje: "El estudiante no existe"}
    }

    @Patch('/:id')
    async actualizar (@Param("id") id:string, @Body() estudiante: EstudianteDto){
        const estudianteActualizado= await this.estudianteService.ActualizarEstudiante(id, estudiante)
        if (estudianteActualizado){
            return {ok: true , estudianteActualizado}
        }
        return {ok: false, mensaje: "El estudiante no se pudo actualizar, no existe!"}
    }


}
