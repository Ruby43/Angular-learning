import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
  }
   dynName:string="varsha";
    myMethod()
    {
      return "my name is "+this.dynName
    }
    enable:boolean=false;
    appStatus:boolean=true;
    Status1="online";
    Status2="offline";


}
