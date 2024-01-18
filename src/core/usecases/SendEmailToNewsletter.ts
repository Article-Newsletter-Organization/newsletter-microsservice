import { Injectable } from '@nestjs/common';
import { UseCase } from '../shared/useCase';
import { NewsletterRepository } from '../shared';
import { Article } from '../model/Article';
import { EmailServicePort } from '../shared/EmailServicePort';
import { Email } from '../model/Email';

@Injectable()
export class SendEmailToNewsletter implements UseCase<Article, void> {
  constructor(
    private readonly newsletterRepository: NewsletterRepository,
    private readonly emailService: EmailServicePort,
  ) {}

  async execute(article: Article): Promise<void> {
    const newsletterUsers = await this.newsletterRepository.getAll();

    // to get information of article here ( I don't know. )
    const articleDescription = article;

    const email = new Email();
    email.content = articleDescription.title;

    // @TODO check if needs a queue here
    this.emailService.sendToAll(newsletterUsers, email);
  }
}
