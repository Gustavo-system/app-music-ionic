import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage:Storage) { }

  loginUser = async (credentials) => {
    this.storage.create();
    const userStorage = await this.storage.get('user');
    return new Promise((accept, reject)=>{
      if(credentials.email == userStorage.email && credentials.password == userStorage.password){
        accept('login correcto');
      }
      else{
        reject('login incorrecto');
      }
    })
  }

  registerUser = (data:any) => {
    this.storage.create();
    return this.storage.set('user', data);
  }

}
