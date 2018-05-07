import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";
import { LoginDataProvider } from "../../providers/login-data/login-data";

@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: LoginDataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  register(u, p) {
    let user = {
      user: u,
      pass: p
    };
    this.data.saveData(user);
    this.navCtrl.popToRoot();
  }
}
