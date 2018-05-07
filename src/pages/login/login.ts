import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LoginDataProvider } from "../../providers/login-data/login-data";
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: LoginDataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  signIn(u, p) {
    this.data.getData().then(login => {
      if (login) {
       if(u===login.user && p===login.pass){
         this.navCtrl.push(HomePage)
       }
       }else{
        this.navCtrl.push(RegisterPage)
       }
       
    });
  }
}
