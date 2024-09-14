import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { ClientService } from './client.service';
import { CreateClientDto } from './dtos/client.dto';
import { Client } from './client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('create')
  async createUser(@Body() clientData: CreateClientDto): Promise<Client> {
    try {
      return await this.clientService.createClient(clientData);
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  async getClients(): Promise<Client[]> {
    return await this.clientService.getClients();
  }

  @Get('find-one')
  async getClient(@Query() param: any): Promise<Client> {
    return await this.clientService.getClientsBy(param.id);
  }

  @Delete('delete-one')
  async deleteClient(@Query() param: any): Promise<any> {
    return await this.clientService.deleteClient(param.id);
  }
}
