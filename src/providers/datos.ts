import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Datos {
  private _usuario:string;  
  constructor() {
  }
  get Usuario():string{
    return this._usuario;
  }  

  set Usuario(value){
    this._usuario=value;
  }
  

}
