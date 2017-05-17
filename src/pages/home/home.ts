import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataService} from '../../services/dataservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private _data: DataService) {

  }
  IonViewWillEnter(){
     this._data.db.child('staticData').on('value', data => {
            console.log(data.val());
        });
  }
}
