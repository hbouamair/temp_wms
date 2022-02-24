import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { CanLoad, Router } from '@angular/router';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';

export interface User {
  id: number;
  name: string;
  prenom: string;
  username :string;
  email: string;
  password:string ;
  tele:number ;
  role :number ;
}

@Injectable({
  providedIn: 'root'
})


export class DataserviceService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  users = new BehaviorSubject([]);
  
  

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient, private router : Router) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'wms.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });



   }


   seedDatabase() {
    this.http.get('assets/wms.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.getUsers();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }




  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }
  loadUsers() {
    return this.database.executeSql('SELECT * FROM user', []).then(data => {
      let users: User[] = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          users.push({
            id: data.rows.item(i).studId,
            name: data.rows.item(i).name,
            prenom: data.rows.item(i).prenom,
            username: data.rows.item(i).username ,
            email : data.rows.item(i).email ,
            password : data.rows.item(i).password ,
            tele : data.rows.item(i).tele ,
            role : data.rows.item(i).role,
           });
        }
      }
      this.users.next(users);
    });
  }


  addUserData(name, prenom , username , email , password ,tele , role ) {
    let data = [name, prenom , username , email , password ,tele , role];
    return this.database.executeSql('INSERT INTO user (name, prenom , username , email , password ,telephone , role) VALUES (?, ?, ? , ?,?,?)', data).then(data => {
      this.loadUsers();
    });
  }
  getUserById(id): Promise<User> {
    return this.database.executeSql('SELECT * FROM user WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).studId,
        name: data.rows.item(0).name,
        prenom: data.rows.item(0).prenom,
        username: data.rows.item(0).username ,
        email : data.rows.item(0).email ,
        password : data.rows.item(0).password ,
        tele : data.rows.item(0).tele ,
        role : data.rows.item(0).role,
      };
    });
  }
  updateUser(user: User) {
    let data = [user.name, user.prenom,user.username ,user.email,user.password,user.tele,user.role];
    return this.database.executeSql(`UPDATE user SET name = ?, prenom = ?, username = ? , email = ? ,  password = ? , tele = ?, role = ?  WHERE studId = ${user.id}`, data).then(data => {
      this.loadUsers();
    });
  }
  deleteUsers(id) {
    console.log('Inside Deleting DB User Id '+ id);
    return this.database.executeSql('DELETE FROM user WHERE id = ?', [id]).then(_ => {
      this.loadUsers();
    });
  }













}