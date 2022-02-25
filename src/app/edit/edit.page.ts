import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {
  id: any;
  material: string = "";
  description: string = "";
  cagette: string = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crud: CrudService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crud.getProduct(this.id).then((res) => {
      this.material = res['material'];
      this.description = res['description']; 
      this.cagette = res['cagette']; 
    })
  }

  ngOnInit() { }

  onUpdate() {
     this.crud.updateProduct(this.id, this.material, this.description , this.cagette).then(() => {
        this.router.navigate(['/create']);
     })
  }

}
