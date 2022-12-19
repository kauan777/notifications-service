import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}

/*Contrato nada mais é uma interface que diz quais métodos
devem existir no repositório, mas não implementa os métodos*/

//Nest trabalha melhor com calsses abstratas melhor do que com interface
