import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  agForm:FormGroup
  id:any

  constructor(private fb:FormBuilder,private db:DataserviceService,private routes:Router,private activatedRoutes:ActivatedRoute){
    this.agForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(paramId=>{
      this.id = paramId.get('id');
      console.log(this.id)

      this.db.getsingleUser(this.id).subscribe(data=>{
        this.agForm.patchValue(data)
      })
    })
  }

  postdata(data:any){
    this.db.editUsers(this.id, this.agForm.value).subscribe(data=>{
      this.routes.navigate(['list-Users'])
    })
  }

}
