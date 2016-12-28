import { NgModule }      from '@angular/core';
import { APP_BASE_HREF }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { AddPeople } from './views/people/AddPeople';
import { HeroListComponent } from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'add-people', component: AddPeople },
  { path: 'add-company', component: HeroListComponent },

  { path: '', redirectTo: '/add-people', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    AddPeople,
    PageNotFoundComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue : '/'
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
