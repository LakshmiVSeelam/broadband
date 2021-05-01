import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    {"name": "Home Broadband", "desc": "", "imgUrl": ""},
    {"name": "Enterprise Broadband", "desc": "", "imgUrl": ""}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
