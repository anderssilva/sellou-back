import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientProviders } from './client.providers';
import { ClientController } from './client.controller';

@Module({
  providers: [ClientService, ...ClientProviders],
  controllers: [ClientController],
})
export class ClientModule {}
