import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      recipientId: notification.recipientId,
      category: notification.category,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
