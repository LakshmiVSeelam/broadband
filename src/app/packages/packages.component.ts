import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = [
    {"price": 650, "speed": 50,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 1, "ott_cost": 129},
    {"price": 860, "speed": 100,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 3, "ott_cost": 247},
    {"price": 1060, "speed": 150,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 5, "ott_cost": 435},
    {"price": 1260, "speed": 300,"dwnlds": "Unlimited", "validity": 30, "voice": "Unlimited Local & STD", "ott_count": 5, "ott_cost": 435}
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
