import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LogoComponent, CourseItemComponent, CourseListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
