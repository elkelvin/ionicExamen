import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {Datos} from '../../providers/datos';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class Registro { 
  public formulario:any; 
  public rfc:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _form:FormBuilder,
  public datos:Datos
  ) {
    this.formulario=this._form.group({
      "nombre":["kervin",Validators.required],
      "materno":["garcia",Validators.required],
      "paterno":["carlos",Validators.required],
      "fecha":["",Validators.compose([Validators.pattern(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/),Validators.required])]      
    }); 
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }
  submit(){
      if(!this.formulario.invalid){
        var valores=this.formulario.value;
        this.rfc=valores.paterno.substring(0,1)+valores.paterno.substring(1,2)+
                  valores.materno.substring(0,1)+valores.nombre.substring(0,1)+                                    
                  valores.fecha.substring(2,4)+valores.fecha.substring(5,7)+valores.fecha.substring(8,10);
      }
  }

}
