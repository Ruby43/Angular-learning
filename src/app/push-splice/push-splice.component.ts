import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users=[];
  onCreateUser(uname)
  {
   this.users.push({
     name:uname.value
   })
  }
  onRemoveUser(){
    this.users.splice(this.users.length-1)
  }
  onRemoveItem(item){
   this.users.splice(item,1)
  }
}
