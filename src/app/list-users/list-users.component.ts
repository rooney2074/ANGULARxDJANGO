import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users:any;

  constructor(private db:DataserviceService){}

  ngOnInit(): void {
    this.fetchUsers();
  }

  deleteUser(id:any){
    this.db.delUsers(id).subscribe(()=>{
      this.fetchUsers();
    })
  }

  fetchUsers(){
    this.db.listUsers().subscribe((data)=>{
      this.users = data;
      console.log(this.users)
    })
  }

}
