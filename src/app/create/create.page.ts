import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  material: string = "";
  description: string = "";
  cagette: string = "";

  constructor(
   private crud: CrudService
  ) {
    this.crud.databaseConn(); 
  }

  ngOnInit() { }

  ionViewDidEnter() {  
    this.crud.getAllProducts()
  }
   
  createUser(){
    this.crud.addItem(this.material,this.description,this.cagette);
  }
   
  remove(product) {
    this.crud.deleteProduct(product);
  }
  
}
