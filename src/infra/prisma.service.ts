/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/* Assim que eu implemento em algum service do Nest essa classe OnModuleInit
eu tenho acesso a criar um novo método onModuleInit que eu permite que eu excute alguma coisa
assim que a aplicação rodar 
*/

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  //Se o banco cair, feche a aplicação
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
