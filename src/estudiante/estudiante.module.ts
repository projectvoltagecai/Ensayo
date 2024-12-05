import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { Mongoose } from 'mongoose';
import { EstudianteSchema } from './estudiante.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Estudiante', schema: EstudianteSchema }])
  ],
  controllers:[EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
