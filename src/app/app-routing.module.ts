import { ContactComponent } from './Contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeComponent } from './Knowledge/knowledge.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {path: 'Knowledge', component: KnowledgeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
