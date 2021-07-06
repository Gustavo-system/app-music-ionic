import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) {}
  async canActivate() {
    this.storage.create();
    const slidesShowed: boolean = await this.storage.get('slideShowed');
    if (slidesShowed) {
      return true;
    } else {
      this.router.navigateByUrl('/slides');
    }
  }
}
