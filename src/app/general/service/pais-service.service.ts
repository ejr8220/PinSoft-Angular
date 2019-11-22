import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaisModel } from '../models/pais-model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { RequestModel } from '../models/request-model';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  ListPaises : PaisModel[];
  postData   = new RequestModel;
  Url = 'http://localhost:8000/general';

  constructor(private http: HttpClient) { 
    this.postData.op = "pais";
  }
  

  getPaises() {
    let pais = new PaisModel();
    pais.action = "read";
    this.postData.data = pais;

    //return this.http.post<PaisModel[]>(this.Url, this.postData)
    let responseData: any;
    responseData = this.http.post(this.Url, this.postData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    );
    this.ListPaises = responseData.data;
    
    return responseData;
  }

  createPais(paisRequest: RequestModel) {
    let responseData: any;
    responseData =  this.http.post(this.Url, JSON.stringify(paisRequest),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return responseData;
  }

  deletePais(idPais: number) {
    let pais    = new PaisModel();
    pais.action = "delete";
    pais.id     = idPais;
    this.postData.data = pais;
    console.log(this.postData);
    let responseData: any;
    responseData =  this.http.post(this.Url, JSON.stringify(this.postData),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return responseData;
  }

}
