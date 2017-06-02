import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Datos} from '../../providers/datos';
import {Registro} from '../registro/registro';
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class Bienvenida {

  constructor(public navCtrl: NavController, public navParams: NavParams,public datos:Datos) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenida');
  }
  next(){
    this.navCtrl.push(Registro);
  }
}
