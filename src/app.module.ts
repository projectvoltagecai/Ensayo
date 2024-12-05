import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { EstudianteModule } from './estudiante/estudiante.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:semillero2024*@cluster0.vhq3q.mongodb.net/Voltage_dev'),
    EstudianteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
