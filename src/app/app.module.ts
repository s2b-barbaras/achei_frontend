import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionComponent } from './shared/section/section.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SectionComponent,
    MapComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
