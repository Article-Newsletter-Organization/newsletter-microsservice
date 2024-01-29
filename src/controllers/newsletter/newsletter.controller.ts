import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { NewsletterService } from '../../core/usecases/newsletter/newsletter.service';
import { CreateNewsletterDto } from '../../core/shared/dtos/create-newsletter.dto';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  create(@Body() createNewsletterDto: CreateNewsletterDto) {
    return this.newsletterService.addUser(createNewsletterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsletterService.remove(id);
  }
}
