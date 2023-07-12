import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  agForm:FormGroup

  constructor(private fb:FormBuilder,private db:DataserviceService,private routes:Router){
    this.agForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  postdata(data:any){
    this.db.addUsers(this.agForm.value).subscribe(data=>{
      this.routes.navigate(['list-Users'])
    })
  }

}
