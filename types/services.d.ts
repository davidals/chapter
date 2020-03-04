import { User } from 'server/models/User';
import { Event } from 'server/models/Event';
import { Notification } from 'server/models/Notification';

export interface IMailerService {
  emailList: Array<string>;
  subject: string;
  htmlEmail: string;
  backupText: string;
  transporter: Transporter;
  ourEmail: string;
  emailUsername: string;
  emailPassword: string;
  emailService: string;
  sendEmail: () => void;
}

/**
 * This interface should be implemented by all classes that react to an RSVP event
 */
export interface IRSVPListener {
  userChangedRSVP: (user: User, event: Event) => void;
}

/**
 * This interface should be implemented by all classes that react to an User updating its settings
 */
export interface IUserSettingUpdateListener {
  settingsUpdated: (
    userBefore: User,
    userAfter: User,
    updatedFields: Array<string>,
  ) => void;
}

/**
 * This interface represents a service capable of handling notifications
 */
export interface INotifierService {
  sendNotifications: () => void;
  removeNotifications: (notification: Notification) => void;
  addNotifications: (notification: Notification) => void;
}
