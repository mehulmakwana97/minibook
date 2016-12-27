import { NgModule }      from '@angular/core';
import { APP_BASE_HREF }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent } from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'page-1', component: CrisisListComponent },
  { path: 'page-2', component: HeroListComponent },

  { path: '', redirectTo: '/page-2', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
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
