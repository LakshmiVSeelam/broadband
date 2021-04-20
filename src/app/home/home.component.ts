import { Component, OnInit , AfterViewInit, OnDestroy} from '@angular/core';

declare var $: any;
declare function revSlider() : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    bannerData = [
        {"imgUrl": "assets/images/slides/v1-1.jpg", "btntitle": "Welcome to GBPS", "title": "Take Control with Pure Fibre Broadband", "bottom_content": "Choose GBPS best monthly plans starting from $10"},
        {"imgUrl": "assets/images/slides/v1-2.jpg", "btntitle": "Welcome to GBPS", "title": "Take Control with Pure Fibre Broadband", "bottom_content": "Choose GBPS best monthly plans starting from $10"},
        {"imgUrl": "assets/images/slides/v1-3.jpg", "btntitle": "Welcome to GBPS", "title": "Take Control with Pure Fibre Broadband", "bottom_content": "Choose GBPS best monthly plans starting from $10"}
    ]

    packages = [
    {"price": 650, "speed": 50,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 1, "ott_cost": 129},
      {"price": 860, "speed": 100,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 3, "ott_cost": 247},
      {"price": 1060, "speed": 150,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 5, "ott_cost": 435},
      {"price": 1260, "speed": 300,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 5, "ott_cost": 435}
    ]

    slider;
    
  constructor() { }
  ngOnInit(): void {
    // revSlider()
  }
  ngOnDestroy(): void {
    // RS's kill switch
    this.slider.revkill();
    
  }

  ngAfterViewInit() : void {
    this.slider = $("#rev_slider_one").show().revolution(this.getSliderOpts())
  }

  getSliderOpts(): any {
    return {
      sliderType:"standard",
      jsFileLocation:"plugins/revolution/js/",
      sliderLayout:"fullwidth",
      dottedOverlay:"none",
      delay:5000,
      navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
              touchenabled:"on",
              touchOnDesktop:"off",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
          },
          arrows: {
              style:"uranus",
              enable:true,
              hide_onmobile:true,
              hide_under:600,
              hide_onleave:false,
              tmp:'',
              left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:0,
                  v_offset:0
              },
              right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:0,
                  v_offset:0
              }
          }
          
      },
       responsiveLevels:[1200,1040,778,480],
       visibilityLevels:[1200,1040,778,480],
       gridwidth:[1200,1040,778,480],
       gridheight:[400,700,600,500],
       lazyType:"none",
       parallax: {
           origo:"enterpoint",
           speed:400,
           levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
           type:"scroll",
       },
       shadow:0,
       spinner:"off",
       stopLoop:"off",
       stopAfterLoops:-1,
       stopAtSlide:-1,
       shuffle:"off",
       autoHeight:"off",
       hideThumbsOnMobile:"off",
       hideSliderAtLimit:0,
       hideCaptionAtLimit:0,
       hideAllCaptionAtLilmit:0,
       debugMode:false,
       fallbacks: {
           simplifyAll:"off",
           nextSlideOnWindowFocus:"off",
           disableFocusListener:false,
       }
    }
  } 

}
