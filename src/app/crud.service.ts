import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  private dbInstance: SQLiteObject;
  readonly db_name: string = "remotestack.db";
  readonly db_table: string = "productsTable";
  readonly db_users: string = "usTable";
  Products: Array <any> ;
  Emplo : Array <any>;

  constructor(
    private platform: Platform,
    private sqlite: SQLite    
  ) { 
    this.databaseConn();
  }

    // Create SQLite database 
    databaseConn() {
        this.platform.ready().then(() => {
          this.sqlite.create({
              name: this.db_name,
              location: 'default'
            }).then((sqLite: SQLiteObject) => {
              this.dbInstance = sqLite;
              sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_table} (
                product_id INTEGER PRIMARY KEY, 
                material varchar(255),
                description varchar(255),
                cagette varchar(255)

              )`, [])
              sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_users} (
                user_id INTEGER PRIMARY KEY, 
                nom varchar(255),
                prenom varchar(255),
                username varchar(255),
                email varchar(255),
                password varchar(255),
                telephone INTEGER, 
                role INTEGER

              )`, [])
                .then((res) => {
                   alert(JSON.stringify(res));
                })
                .catch((error) => alert(JSON.stringify(error)));
            })
            .catch((error) => alert(JSON.stringify(error)));
        });   
    }

    // Crud
    public addItem(n, e ,c) {
      // validation
      if (!n.length || !e.length  || !c.length ) { 
        alert('Provide both email & name');
        return; 
      }
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (material, description , cagette) VALUES ('${n}', '${e}' , '${c}')`, [])
        .then(() => {
          alert("Success");
          this.getAllProducts();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

    getAllProducts() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        this.Products = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Products.push(res.rows.item(i));
          }
          return this.Products;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Get user
    getProduct(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE product_id = ?`, [id])
      .then((res) => { 
        return {
          product_id: res.rows.item(0).product_id,
          material: res.rows.item(0).material,  
          description : res.rows.item(0).description,
          cagette : res.rows.item(0).cagette,
        }
      });
    }

    // Update
    updateProduct(id, material, description , cagette) {
      let data = [material, description , cagette];
      return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET material = ?, description = ? , cagette = ? WHERE product_id = ${id}`, data)
    }  

    // Delete
    deleteProduct(product) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE product_id = ${product}`, [])
        .then(() => {
          alert("User deleted!");
          this.getAllProducts();
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }









    public addUser(n, p ,u , e ,pa , te , r ) {
      // validation
     
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_users} (nom, prenom , username , email , password ,telephone , role ) VALUES ('${n}', '${p}' , '${u}' , '${e}' , '${pa}', '${te}' ,  '${r}')`, [])
        .then(() => {
          alert("Success");
          this.getAllEmp();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

    getAllEmp() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users}`, []).then((res) => {
        this.Emplo = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Emplo.push(res.rows.item(i));
          }
          return this.Emplo;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Get user
    getEmp(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users} WHERE user_id = ?`, [id])
      .then((res) => { 
        return {
          user_id: res.rows.item(0).user_id,
          nom: res.rows.item(0).nom,  
          prenom : res.rows.item(0).prenom,
          username : res.rows.item(0).username,
          email : res.rows.item(0).email,
          password : res.rows.item(0).password,
          telephone : res.rows.item(0).telephone,
          role : res.rows.item(0).role,
          

        }
      });
    }

    // Update
    updateEmp(id, nom, prenom , username , email, password , tele , role) {
      let data = [nom, prenom ,username, email, password, tele , role];
      return this.dbInstance.executeSql(`UPDATE ${this.db_users} SET nom = ?, prenom= ? , username = ? , email =? , password =? , telephone =? ,role =? WHERE user_id = ${id}`, data)
    }  

    // Delete
    deleteEmp(user) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_users} WHERE product_id = ${user}`, [])
        .then(() => {
          alert("User deleted!");
          this.getAllEmp();
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }




    checkLogin(username:string , password :string ) : Promise<any> {
     return this.dbInstance.executeSql(`SELECT * FROM  ${this.db_users} WHERE  username = ? , password = ? `   , [username , password])
      .then((res)=>{
        if(res){
          alert("login succesufully")
        }else{
          alert("sorry username invalid")
        }
      })
      .catch(e=>{
        alert(JSON.stringify(e))
      });
        


      }
    }


