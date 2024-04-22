import { Inject, Injectable } from '@nestjs/common';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: typeof Client,
  ) {}

  async createClient(clientData: Client): Promise<Client> {
    try {
      return await this.clientRepository.create({
        companyName: clientData.companyName,
        companyFantasyName: clientData.companyFantasyName,
        document: clientData.document,
        stateRegistration: clientData.stateRegistration,
        group: clientData.headquarterCod,
        headquarterCod: clientData.group,
        creditLimit: clientData.creditLimit,
        taxationType: clientData.taxationType,
        phoneNumber: clientData.phoneNumber,
        email: clientData.email,
      });
    } catch (e) {
      return e;
    }
  }

  async getClients(): Promise<Client[]> {
    return await this.clientRepository.findAll();
  }

  async getClientsBy(id: number): Promise<Client> {
    return await this.clientRepository.findOne({ where: { id: id } });
  }

  async deleteClient(id: number): Promise<any> {
    return await this.clientRepository.destroy({ where: { id: id } });
  }
}
