import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @Output() serverAddition = new EventEmitter<{serverName: string, serverContent: string}|any>();
  @Output() blueprintAddtion= new EventEmitter<{serverName: string, serverContent: string}|any>();

  //newServerName= '';
  //newServerContent= '';
  //ViewChid decorator to access the template and DOM
  @ViewChild('serverContentInput') serverContentInput: ElementRef|any;

  serverAdded(inputRef:HTMLInputElement){
    this.serverAddition.emit({
     serverName: inputRef.value,
     serverContent: this.serverContentInput.nativeElement.value,

  })
}

  blueprintAdded(inputRef:HTMLInputElement){
    this.blueprintAddtion.emit({
      /* serverName: this.newServerName,*/
      serverContent: this.serverContentInput.nativeElement.value,

  // using local refrences instead of two-way binding
    serverName: inputRef.value



  })
}
  ngOnInit(): void {

  }
}
