import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

/* Atribuindo decorator @Controller a class AppController
 para indicar que esta class é um Controller */

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  /* Como primeiro parâmetro, o método/decorator GET pode receber o caminho da rota
  assim como o @Controller também. O que faira que a rota do get ficasse dentro da rota do controller */

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    console.log('my changes');

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
