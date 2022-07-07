import { FromFacultyService } from './from-faculty.service';
import { PagesService } from './pages.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { KnowledgeComponent } from './Knowledge/knowledge.component';
import { HomeComponent } from './Home/home.component';
import { ContactComponent } from './Contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KnowledgeComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PagesService,
    FromFacultyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
