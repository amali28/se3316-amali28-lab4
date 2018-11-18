import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParkaItemsService {

  constructor(private _http: HttpClient) { }
  
  getParkaData(call_back){
    this._http.get('/api/items').subscribe(data => {
      console.log(data);
      call_back(data);
    })
  }
}
