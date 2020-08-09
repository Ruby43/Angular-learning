import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mypro:boolean=true;
myStyle:String="15px";
isActive:boolean=false;
myClasses=
{
  class1:true,class2:false,class3:true
 
}
myStyle1=
{
  'background':'red','border':'10px solid green'
}
}
