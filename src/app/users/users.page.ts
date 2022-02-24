import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService, User } from "../database/dataservice.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  hideMe :boolean = true ;
  user: User = null;

  constructor(private router: Router, private route: ActivatedRoute, private db:DataserviceService, private toast: ToastController ) {
   
    
    

   }
   usersData = {};
   users: User[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');

      this.db.getUserById(id).then(data => {
        this.user = data;
      });
    });

    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getUsers().subscribe(users => {
          this.users = users;
          console.log(this.users);
        });
      }
    });
  }

  updateUserData() {
    this.db.updateUser(this.user).then(async (res) => {
      let toast = await this.toast.create({
        message: 'users Details Updated Successfully..',
        duration: 3000
      });
      toast.present();
    }).then(() => {this.router.navigateByUrl('users') , this.hideMe=true;}
    
    
    );
  }

  delete() {
    console.log('Deleting Student Id '+this.user.id);
    this.db.deleteUsers(this.user.id).then(() => {
      this.router.navigateByUrl('users');
      this.hideMe=true;
    });
  }

  addUsersDetails() {
    this.db.addUserData(this.usersData['name'], this.usersData['prenom'], this.usersData['username'] ,this.usersData['email'] ,this.usersData['password'],this.usersData['tele'],this.usersData['role']).then(_ => {
      this.usersData = {};
    });
  }


 hide(){
  this.hideMe = false;
 }


  
  returnHome(){
    this.router.navigate(['/home']);
  }

  back(){
    this.router.navigate(['/users']);
    this.hideMe=true;


    
  }





  

}