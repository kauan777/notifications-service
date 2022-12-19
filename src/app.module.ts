import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

/* No controller não precisa passar as dependências(services) como parâmetro, pois o nest trabalha com
  a inserção de dependências, o que faz a instância da class 'service' ser passada como parãmetro.
  Porém o service precisa ter o decorator @Injectable() e o service precisa ta em 'providers' */

// Para classes abstratas(contrato), muda a estrutura do 'providers'

// Module é um acoplador, ele acopla todos os controllers e services

// Um module pode importar outros module em 'imports'
