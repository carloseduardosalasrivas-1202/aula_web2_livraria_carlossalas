import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { autoresrepository } from './autores.repository';
@Module({
  controllers: [AutoresController],
  providers: [AutoresService, autoresrepository],
  exports: [],
})
export class AutoresModule {}
