import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    UnreadNotification,
    ReadNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
  ],
})
export class HttpModule {}
