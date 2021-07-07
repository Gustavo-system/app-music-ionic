import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm:FormGroup;

  validatorMessage = {
    name: [
      { type: 'required', message: 'nombre required' },
      { type: 'pattern', message: 'compruebe su escritura' }
    ],
    last_name: [
      { type: 'required', message: 'apellidos required' },
      { type: 'pattern', message: 'compruebe su escritura' }
    ],
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
    private formBuilder:FormBuilder,
    private navCtrl:NavController,
    private storage:Storage,
    private authService:AuthenticateService, 
  ) { 
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]+')
        ])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]+')
        ])
      ),
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
    })

  }

  registerUser = (credentials) => {
    console.log(credentials);
    this.authService.registerUser(credentials).then(()=>{
      this.navCtrl.navigateForward("/login");
    })
  }

  back = () => {
    this.navCtrl.navigateForward("/login");
  }

  ngOnInit() {
  }

}
