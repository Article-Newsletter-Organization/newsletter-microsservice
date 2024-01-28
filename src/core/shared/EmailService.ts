import { Email } from '../model/Email';
import { User } from '../model/User';

export interface EmailService {
  sendToAll(receptors: User[], email: Email);
}
