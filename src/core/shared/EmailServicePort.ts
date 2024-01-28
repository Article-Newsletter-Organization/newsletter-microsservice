import { Email } from '../model/Email';
import { User } from '../model/user';

export interface EmailServicePort {
  sendEmail(to: string, email: Email);
  sendToAll(receptors: User[], email: Email);
}
