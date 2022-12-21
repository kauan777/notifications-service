import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}

/* Atribuindo decorator @Controller a class AppController
 para indicar que esta class é um Controller */

/* Como primeiro parâmetro, o método/decorator GET pode receber o caminho da rota
  assim como o @Controller também. O que faira que a rota do get ficasse dentro da rota do controller */
