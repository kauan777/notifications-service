// Um bom prefixo que o Diego usa para criação de factories, é o 'make'

import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

// Partial<> diz que todas os atributos são opcionais, assim eu não preciso informar todos

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova Solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}
