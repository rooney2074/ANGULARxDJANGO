import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
{
  path:'',component:FrontpageComponent
},
{
  path:'list-Users',component:ListUsersComponent
},
{
  path:'edit/:id',component:EditUsersComponent
},{
  path:'add-users',component:AddUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
