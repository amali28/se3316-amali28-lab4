import { Component, OnInit } from '@angular/core';
import { ParkaItemsService } from '../parka-items.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parka-items',
  templateUrl: './parka-items.component.html',
  styleUrls: ['./parka-items.component.css']
})
export class ParkaItemsComponent implements OnInit {

  private _response: Observable<any[]>;
  
  constructor(private _getParkas: ParkaItemsService) { }

  ngOnInit() {
  }
  
  onClick(){
    this._getParkas.getParkaData(this.onResponse.bind(this));
  }
  
  onResponse(_res: Observable<any[]>){
    this._response = _res;
  }
  
}
