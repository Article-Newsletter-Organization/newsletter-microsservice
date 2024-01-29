import { Email } from '../entities/Email';

export interface EmailProviderService {
  send(email: Email): Promise<void>;
}
