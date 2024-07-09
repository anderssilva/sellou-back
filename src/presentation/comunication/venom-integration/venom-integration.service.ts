import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';
import { SendMessageDto } from "./send-message.dto";

@Injectable()
export class WhatsappService {
  private client: Whatsapp;

  async getQRCode(): Promise<string> {
    return new Promise((resolve, reject) => {
      create(
        'sessionName',
        (base64Qr, asciiQR, attempts, urlCode) => {
          resolve(base64Qr);
        },
        undefined,
        { logQR: false }
      )
        .then(client => {
          this.client = client;
        })
        .catch(err => reject(err));
    });
  }

  async listContacts(): Promise<any> {
    if (!this.client) {
      throw new Error('Client is not initialized');
    }
    try {
      return await this.client.getAllContacts();
    } catch (error) {
      console.error('Error listing contacts:', error);
      throw error;
    }
  }

  async isSessionConnected(): Promise<boolean> {
    if (!this.client) {
      return false;
    }
    const state = await this.client.getConnectionState();
    return state === 'CONNECTED';
  }

  async sendMessage(sendMessageDto: SendMessageDto): Promise<any> {
    const { phoneNumber, message } = sendMessageDto;
    if (!this.client) {
      throw new Error('Client is not initialized');
    }
    try {
      return await this.client.sendText(phoneNumber, message);
    } catch (error) {
      throw error;
    }
  }

  async getContactPhoto(contactId: string): Promise<string> {
    try {
      const contact = await this.client.getContact(contactId);
      return contact.profilePicThumbObj.eurl;
    } catch (error) {
      throw new Error(`Unable to fetch contact photo: ${error.message}`);
    }
  }
}
