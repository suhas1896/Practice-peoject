import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import {Ng2OrderPipe} from 'ng2-order-pipe'
import { NgxPaginationModule } from 'ngx-pagination' */
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule
   /*  Ng2OrderPipe,
    NgxPaginationModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
