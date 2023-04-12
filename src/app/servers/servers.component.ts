import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName = 'testerver';
  serverCreated = false;
  servers = ['Testerver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    // HTMLInputElement is used to inform TS that the type of element is a HTML input element.
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
