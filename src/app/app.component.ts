import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-practice';
  serverElement = [{ type: 'server', name: 'testServer', content: 'Just a test!'}]

  onServerAdded(serverData:{serverName: string, serverContent: string}){
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })

  }
  onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}){
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })

  }
  ChangeFirst(){
    this.serverElement[0].name = 'change triggered'
  }

  destroyFirst(){
    this.serverElement.splice(0,1);

  }
}
