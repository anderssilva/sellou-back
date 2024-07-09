import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { WhatsappService } from './venom-integration.service';
import { SendMessageDto } from './send-message.dto';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Get('qr')
  async getQRCode() {
    return this.whatsappService.getQRCode();
  }

  @Get('contact-list')
  async getContactList() {
    return this.whatsappService.listContacts();
  }

  @Get('status')
  async getStatusSession() {
    return this.whatsappService.isSessionConnected();
  }

  @Post('send-message')
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.whatsappService.sendMessage(sendMessageDto);
  }

  @Get('contact-photo/:id')
  async getContactPhoto(@Param('id') id: string): Promise<{ photoUrl: string }> {
    const photoUrl = await this.whatsappService.getContactPhoto(id);
    return { photoUrl };
  }


  //
  // @Get('status')
  // async getStatus() {
  //   return this.whatsappService.getStatus();
  // }
}
