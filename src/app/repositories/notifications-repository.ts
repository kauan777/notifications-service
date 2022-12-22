import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}

/*Contrato nada mais é uma interface que diz quais métodos
devem existir no repositório, mas não implementa os métodos*/

//Nest trabalha melhor com calsses abstratas melhor do que com interface
