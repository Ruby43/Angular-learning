import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg:string="";
  onAddCart(){
    this.msg="Product Added in Cart";
  }
  onInputClick(event)
  {
     console.log(event.target.value);
  }
  msg1:string="";
  onAddCart1(event){
    this.msg1=event.target.value+" Product Added in Cart";
    console.log(event.target.value);
  }
  onGetInputInfo(my)
  {
     console.log(my.name);
     console.log(my.value);
  }
}
