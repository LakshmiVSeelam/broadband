import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomebroadbandComponent} from './homebroadband/homebroadband.component'
import { EnterprisebroadbandComponent} from './enterprisebroadband/enterprisebroadband.component'
import {PackagesComponent} from './packages/packages.component'
import { WhygbpsComponent } from './whygbps/whygbps.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'homebroadband', component: HomebroadbandComponent
  },
  {
    path: 'enterprisebroadband', component: EnterprisebroadbandComponent
  },
  {
    path: 'packages', component: PackagesComponent
  },
  {
    path: 'whygbps', component: WhygbpsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
