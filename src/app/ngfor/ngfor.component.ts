import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 products=[
   {proimg:'./assets/laptop.jpeg',name:'Laptop',id:'pro01',price:'30000'},
   {proimg:'./assets/mobile.jpeg',name:'Mobile',id:'pro02',price:'15000'},
   {proimg:'./assets/tv.jpeg',name:'TV',id:'pro03',price:'10000'},
   {proimg:'./assets/wsm.jpeg',name:'Washing Machine',id:'pro04',price:'17000'}
 ]

}
