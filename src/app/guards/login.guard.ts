import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private navigate: Router) {}
  async canActivate() {
    this.storage.create();
    const loginSuccess = await this.storage.get('userSuccess');
    if(loginSuccess){
      return true;
    }
    else{
      this.navigate.navigateByUrl("/login");
    }
  }
}
