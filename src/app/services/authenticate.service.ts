import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser = (credentials) => {
    return new Promise((acept, reject)=>{
      if(credentials.email == "test@test.com"){
        acept('login correcto');
      }
      else{
        reject('login incorrecto');
      }
    })
  }
}
