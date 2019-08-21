import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FieldComponent } from './field/field.component';
import { Example2Component } from './example/example2/example2.component';
import { Example3Component } from './example/example3/example3.component';
import { Example1Component } from './example/example1/example1.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FieldComponent,
    Example2Component,
    Example3Component,
    Example1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
