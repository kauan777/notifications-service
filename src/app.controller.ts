import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Atribuindo decorator @Controller a class AppController
 para indicar que esta class é um Controller */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* Como primeiro parâmetro, o método/decorator Get pode receber o caminho da rota
  assim como o @Controller também. O que faira que a rota do get ficasse dentro da rota do controller */

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
