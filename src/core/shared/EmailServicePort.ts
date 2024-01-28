import { Email } from '../entities/Email';
import { User } from '../entities/user';

export interface EmailServicePort {
  sendEmail(to: string, email: Email);
  sendToAll(receptors: User[], email: Email);
}
