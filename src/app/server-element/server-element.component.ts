import { AfterContentChecked, AfterContentInit,
   Component, DoCheck, Input, OnChanges, OnInit,
   SimpleChanges, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit,
 AfterViewChecked, OnDestroy{

@Input('srvElement') elementServ : {type: string, name: string, content:string}|any;
@Input() name: string|any;

constructor(){
  console.log('constructor called')
}

ngOnInit(): void {
  console.log('ng OninIt Called')

}

ngOnChanges(changes: SimpleChanges): void {
  console.log('ngChanges called');
  console.log(changes);

}
ngDoCheck(): void {
  console.log('ng doCheck called');
}

ngAfterContentInit(): void {
  console.log("ngContentinIt called")
}
 ngAfterContentChecked(): void {
  console.log("ngContentChecked called")

 }
 ngAfterViewInit(){
  console.log("ngAfterViewInit called")

 }

 ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called")

 }
 ngOnDestroy(): void {
   console.log("onDestroy Called")
 }


}
