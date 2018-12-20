import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmTransPage} from "../confirm-trans/confirm-trans";
import {HomePage} from "../home/home";

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
  openConfirmTransPage(){
    this.navCtrl.push(ConfirmTransPage)
  }
  openHomePage(){
    this.navCtrl.push(HomePage)
  }
}
