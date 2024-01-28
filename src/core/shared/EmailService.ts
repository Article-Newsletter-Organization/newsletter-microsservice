import { Email } from '../entities/Email';
import { User } from '../entities/User';

export interface EmailService {
  sendToAll(receptors: User[], email: Email);
}
