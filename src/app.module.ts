import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],

  /* No controller não precisa passar as dependências como parâmetro, pois o nest trabalha com
  a inserção de dependências, o que faz a instância da class 'service' ser passada como parãmetro.
  Porém o service precisa ter o decorator @Injectable() */

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Para classes abstratas, muda a estrutura do 'providers'
