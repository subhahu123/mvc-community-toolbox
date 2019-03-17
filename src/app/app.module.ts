import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { welcomeComponent } from './welcome/welcome.component'
import { indexComponent } from './index/index.component';
import { footerComponent } from './footer/footer.component';
import { videoComponent } from './video/video.component';
import { issuesComponent } from './issues/issues.component';
import { contributorsComponent } from './contributors/contributors.component';


const routes: Routes = [
]
@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, indexComponent,welcomeComponent, contributorsComponent, footerComponent, issuesComponent, videoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
