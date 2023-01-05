import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notifications.controller';
import { KafkaCosumerService } from './kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaCosumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}
