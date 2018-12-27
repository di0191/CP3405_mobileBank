import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the Account1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account1',
  templateUrl: 'account1.html',
})
export class Account1Page {

  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afDatabase: AngularFireDatabase) {
                this.getDataFromFireBase();
  }

  getDataFromFireBase(){
    this.afDatabase.list('accountprofile').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Account1Page');
  }

}
