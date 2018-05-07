import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';




@Injectable()
export class LoginDataProvider {

  constructor(public storage:Storage) {
    console.log('Hello LoginDataProvider Provider');
  }

  getData(){
   return this.storage.get('loginData')

  }

  saveData(data){
    this.storage.set('loginData',data)

  }

}
