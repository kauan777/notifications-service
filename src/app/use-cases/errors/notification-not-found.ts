export class NotificationNotFound extends Error {
  constructor() {
    super('Notification not found.');
  }
}

// super() é o contructor da classe Error, Ex: throw Error("Notification not found")
