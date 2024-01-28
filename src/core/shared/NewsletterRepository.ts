import { Newsletter } from '@prisma/client';
import { Repository } from './Repository';

export interface NewsletterRepository extends Repository<Partial<Newsletter>> {}