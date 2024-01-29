import { Inject, Injectable } from '@nestjs/common';
import { CreateNewsletterDto } from '../../shared/dtos/create-newsletter.dto';
import { NewsletterRepository } from '../../shared';

@Injectable()
export class NewsletterService {
  @Inject('NewsletterRepository')
  private newsletterRepository: NewsletterRepository;

  async addUser(createNewsletterDto: CreateNewsletterDto) {
    return await this.newsletterRepository.add(createNewsletterDto);
  }

  async remove(id: string) {
    return await this.newsletterRepository.remove(id);
  }
}
