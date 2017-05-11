import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadSideComponent } from './components/headside/headside.component';
import { ContentSideComponent } from './components/contentside/contentside.component';

import { Section1Component } from './components/contentside/section1.component';
import { Section2Component } from './components/contentside/section2.component';
import { Section3Component } from './components/contentside/section3.component';
import { Section4Component } from './components/contentside/section4.component';

import { Demo1Component } from './components/contentside/demo1.component';
import { Demo2Component } from './components/contentside/demo2.component';
import { Demo3Component } from './components/contentside/demo3.component';
import { Demo4Component } from './components/contentside/demo4.component';
import { Demo5Component } from './components/contentside/demo5.component';
import { Demo6Component } from './components/contentside/demo6.component';
import { Demo7Component } from './components/contentside/demo7.component';
import { Demo8Component } from './components/contentside/demo8.component';

import { NgxAniModule } from '../../src/';

@NgModule({
    declarations: [
        AppComponent,
        HeadSideComponent,
        ContentSideComponent,

        Section1Component,
        Section2Component,
        Section3Component,
        Section4Component,

        Demo1Component,
        Demo2Component,
        Demo3Component,
        Demo4Component,
        Demo5Component,
        Demo6Component,
        Demo7Component,
        Demo8Component
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxAniModule
    ],
    
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
