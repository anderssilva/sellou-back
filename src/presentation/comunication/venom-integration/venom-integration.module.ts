import { Module } from '@nestjs/common';
import { WhatsappController } from "./venom-integration.controller";
import { WhatsappService } from "./venom-integration.service";

@Module({
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class VenomIntegrationModule {}
