import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password: string = "";
  login: string = "";
  showPassword= false ;
  passwordToggleIcone ='eye' ;
  classIcon = 'eye-up ';

  constructor(public navCtrl: NavController , private route: Router) { }

  ngOnInit() {
  }
  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcone == 'eye' ){
      this.passwordToggleIcone = 'eye-off';
      this.classIcon ='eye-down' ;
      
    }else{
      this.passwordToggleIcone='eye';
      this.classIcon="eye-up"
    }
}

loginCont(){
  if( this.password=="admin" && this.login=="admin"){
    this.route.navigate(['/home']);

  }else {
    alert("error");
  }
  

}

}
