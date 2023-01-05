## Descrição

Micro-serviço de notificações, onde ele poderá ser usado por outros micro-serviços através do kafka.

Link do fake producer⤵
  <a href="">Fake producer</a>

## Instalar as dependências

```bash
$ yarn
```

## Migrar tabelas do banco com o prisma

```bash
  yarn migrate
```

## Inserir as variáveis ambiente

```env
DATABASE_URL="file:./dev.db"
PASSWORD=[SUA SENHA DO UPSTASH]
```

## No arquivo kafka-consumer.service.ts, troque as configurações pelas suas do UPSTASH

```ts
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaCosumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['devoted-cicada-6826-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGV2b3RlZC1jaWNhZGEtNjgyNiTHWBEYnfmdBRlkPWT96xxWrB3tNovwU22e2n8',
          password: `${process.env.PASSWORD}`,
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}

```

## Rode a aplicação
```bash
yarn dev
#OU
yarn start:dev
```





