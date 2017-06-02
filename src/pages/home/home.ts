import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {Datos} from '../../providers/datos';
import {Bienvenida} from '../bienvenida/bienvenida';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public login:any;
  
  constructor(public navCtrl: NavController, public _form:FormBuilder, public datos:Datos) {
    this.login=this._form.group({
      "usuario":["awdawdawdawd",Validators.compose([Validators.required,Validators.minLength(6),
      Validators.pattern(/^[a-z]+$/)])],                  
      "password":["",Validators.compose([Validators.required,Validators.minLength(8),
      Validators.pattern(/^[0-9]+[@|#|%|&][a-zA-Z]+/)])]                  
    });    
  }

  submit(){    
    if(!this.login.invalid){
      var valores=this.login.value;                  
      if(valores.usuario=='kegarciaca' && valores.password=='13400411@ittepic'){
        this.datos.Usuario=valores.usuario;
      console.log("user"+this.datos.Usuario);      
      this.navCtrl.push(Bienvenida);
      }
    }
  }

}
