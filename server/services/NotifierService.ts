import { INotifierService } from 'types/services';
import { Notification } from '../models/Notification';
import { User } from '../models/User';
import { Event } from '../models/Event';

export default class NotifierService implements INotifierService {
  userChangedRSVP: (user: User, event: Event) => void;
  settingsUpdated: (
    userBefore: User,
    userAfter: User,
    updatedFields: string[],
  ) => void;
  sendNotifications: () => void;
  removeNotifications: (notification: Notification) => void;
  addNotifications: (notification: Notification) => void;
}
