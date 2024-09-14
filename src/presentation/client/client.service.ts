import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dtos/client.dto';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: typeof Client,
  ) {}

  async createClient(clientData: CreateClientDto): Promise<Client> {
    try {
      const client = {
        status: clientData.status,
        companyName: clientData.companyName,
        companyFantasyName: clientData.companyFantasyName,
        document: clientData.document,
        stateRegistration: clientData.stateRegistration,
        cep: clientData.cep,
        homeNumber: clientData.homeNumber,
        complement: clientData.complement,
        city: clientData.city,
        UF: clientData.UF,
        neighborhood: clientData.neighborhood,
        reference: clientData.reference,
        phoneNumber: clientData.phoneNumber,
        secondPhoneNumber: clientData.secondPhoneNumber,
        whatsapp: clientData.whatsapp,
        email: clientData.email,
        shoppingEmail: clientData.shoppingEmail,
        invoiceEmail: clientData.invoiceEmail,
        billEmail: clientData.billEmail,
        site: clientData.site,
        group: clientData.group,
        headquarterCod: clientData.headquarterCod,
        observations: clientData.observations,
        defaultPayment: clientData.defaultPayment,
        shipmentObservation: clientData.shipmentObservation,
        typeUserCod: clientData.typeUserCod,
        typeUser: clientData.typeUser,
        userGroupCod: clientData.userGroupCod,
        latitude: clientData.latitude,
        longitude: clientData.longitude,
        region: clientData.region,
        partial: clientData.partial,
        creditSituation: clientData.creditSituation,
        creditLimit: clientData.creditLimit,
        creditAnalysisObservation: clientData.creditAnalysisObservation,
        serasaStatus: clientData.serasaStatus,
        lakeDate: clientData.lakeDate,
        score: clientData.score,
        deliveryDays: clientData.deliveryDays,
        deliveryHours: clientData.deliveryHours,
        inactivationDate: clientData.inactivationDate,
        branch: clientData.branch,
        ecommerce: clientData.ecommerce,
        minimumOrder: clientData.minimumOrder,
      };

      return await this.clientRepository.create(client);
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
