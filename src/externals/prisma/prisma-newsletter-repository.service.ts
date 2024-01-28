import { Injectable } from '@nestjs/common';
import { Newsletter } from '@prisma/client';
import { PrismaService } from 'src/externals/prisma/prisma.service';
import { CreateNewsletterDto } from 'src/core/shared/dtos/create-newsletter.dto';
import { UpdateNewsletterDto } from 'src/core/shared/dtos/update-newsletter.dto';
import { NewsletterRepository } from 'src/core/shared';

@Injectable()
export class PrismaNewsletterRepositoryService implements NewsletterRepository {
  constructor(private prisma: PrismaService) {}

  async add(data: CreateNewsletterDto): Promise<Newsletter> {
    return await this.prisma.newsletter.create({ data });
  }

  async get(id: string): Promise<Newsletter> {
    return await this.prisma.newsletter.findUnique({ where: { id } });
  }

  async update(data: UpdateNewsletterDto): Promise<Newsletter> {
    return await this.prisma.newsletter.update({
      data,
      where: { id: data.id },
    });
  }

  async getAll(): Promise<Newsletter[]> {
    return await this.prisma.newsletter.findMany();
  }

  async remove(id: string): Promise<Newsletter> {
    return await this.prisma.newsletter.delete({ where: { id } });
  }
}
