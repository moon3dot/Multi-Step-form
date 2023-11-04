// ?? system
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ?? system
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field'; // form field
import { MatIconModule } from '@angular/material/icon'; // icon 
import { MatInputModule } from '@angular/material/input'; // input
import { MatButtonModule } from '@angular/material/button'; // button
import { MatToolbarModule } from '@angular/material/toolbar';  // menu toobar

// // Form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    // // ?? system
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // // form
    ReactiveFormsModule,
    FormsModule,

    // // angular materila
    MatFormFieldModule, // // form field
    MatIconModule, // // icon
    MatInputModule, // // input
    MatButtonModule, // // button
    MatToolbarModule, // // menu toolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
