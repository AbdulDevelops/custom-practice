import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @Output() serverAddition = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintAddtion= new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName= '';
  newServerContent= '';


  serverAdded(){
    this.serverAddition.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent

    })

  }

  blueprintAdded(){
    this.blueprintAddtion.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent

    })

  }
  ngOnInit(): void {

  }
}
