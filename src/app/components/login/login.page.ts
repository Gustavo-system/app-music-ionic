import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validatorMessage = {
    email: [
      { type: 'required', message: 'email required' },
      { type: 'pattern', message: 'compruebe su escritura' }
    ],
    password: [
      { type: 'required', message: 'password required' },
      { type: 'minlength', message: 'contraseña muy corta' },
      { type: 'maxlength', message: 'contraseña muy larga' }
    ],
  };

  errorMessage:string = "";

  constructor(
    private formBuilder: FormBuilder, 
    private authService:AuthenticateService, 
    private navCtrl:NavController,
    private storage:Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ])
      ),
    });
  }

  loginUser = (credentials) => {
    console.log(credentials);
    this.authService.loginUser(credentials).then(resp=>{
      this.errorMessage = "";
      this.storage.create();
      this.storage.set('loginSuccess', true);
      this.navCtrl.navigateForward("/home");
    }).catch(errs => {
      this.errorMessage = errs;
    });
  };

  goToRegister = () => {
    this.navCtrl.navigateForward("/register");
  }

  ngOnInit() {}
}
