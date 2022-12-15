import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';

/* Atribuindo decorator @Controller a class AppController
 para indicar que esta class é um Controller */

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  /* Como primeiro parâmetro, o método/decorator Get pode receber o caminho da rota
  assim como o @Controller também. O que faira que a rota do get ficasse dentro da rota do controller */

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova solicitação de amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
