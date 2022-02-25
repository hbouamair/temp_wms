import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password: string = "";
  username: string = "";
  showPassword= false ;
  passwordToggleIcone ='eye' ;
  classIcon = 'eye-up ';



  constructor(public navCtrl: NavController , private route: Router,private crud: CrudService) { }

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


login(){

   this.crud.checkLogin(this.username ,this.password)


}

}
