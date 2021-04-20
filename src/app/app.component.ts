import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
// import {  } from "../../node_modules/isotope-layout/js";

declare function mainmenu (): any;
declare function languageSwitcher (): any;
declare function searchbox (): any;
declare function scrollToTop (): any;
declare function CounterNumberChanger (): any;
declare function singleProductTab (): any;
declare function priceFilter (): any;
declare function accordion (): any;
declare function cartTouchSpin (): any;
declare function selectDropdown (): any;
declare function datepicker (): any;
declare function timepicker (): any;
declare function tooltip (): any;
declare function countDownTimer (): any;
declare function countryInfo (): any;
declare function serviceCarousel(): any;
declare function testimonialCarousel(): any;
declare function prealoader(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadBand';


  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          mainmenu ();
          languageSwitcher ();
          searchbox ();
          scrollToTop ();
          CounterNumberChanger ();
          singleProductTab ();
          priceFilter ();
          accordion ();
          cartTouchSpin ();
          selectDropdown ();
          datepicker ();
          timepicker ();
          tooltip ();
          countDownTimer ();
          countryInfo ();
          serviceCarousel();
          testimonialCarousel();
          prealoader()
        }
    });

  }

  
}

