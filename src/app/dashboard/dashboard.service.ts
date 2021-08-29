import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly _searchClientsByIds;
  private readonly _addClient;
  private readonly _updateClient;
  private readonly _addClientByPolicyId;
  private readonly _getAllClients;
  private readonly _getAllClientsByRegion;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    this._searchClientsByIds = `${environment.rootPath}client/searchClientsByIds`;
    this._addClient = `${environment.rootPath}client/createClient`;
    this._updateClient = `${environment.rootPath}client/updateClient`;
    this._addClientByPolicyId = `${environment.rootPath}client/getClientsByPolicyId`;
    this._getAllClients = `${environment.rootPath}client/getAllClients`;
    this._getAllClientsByRegion = `${environment.rootPath}client/getAllClientsByRegion`;
  }

  searchClientsByIds(searchTerm) {
    if (!searchTerm) {
      return this.getAllClients();
    }
    return this.httpClient.get(`${this._searchClientsByIds}?searchTerm=${searchTerm}`).pipe(map((res: any) => res.data));
  }

  addClient(clientData) {
    return this.httpClient.post(this._addClient, clientData);
  }

  updateClient(clientData) {
    return this.httpClient.put(this._updateClient, clientData);
  }
 
  getClientsByPolicyId(policyId) {
    return this.httpClient.get(`${this._addClientByPolicyId}?policyid=${policyId}`).pipe(map((res: any) => res.data[0]));
  }
 
  getAllClients(limit = 100) {
    return this.httpClient.get(`${this._getAllClients}?limit=${limit}`);
  }
 
  getAllClientsByRegion(region) {
    return this.httpClient.get(`${this._getAllClientsByRegion}?region=${region}`);
  }

}
