import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from '../../services/Data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Data]
})
export class HomePage {

  constructor(public navCtrl: NavController, private _data: Data) {

  }
  IonViewDidLoad(){
     
  }
}
