import {Component} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  socket: SocketIOClient.Socket;
  messsageAll = [];
  messsageRoom = [];

  constructor() {
    this.socket = io.connect('http://localhost:3000/mynamespace');

    this.socket.on('connect', () => {
      console.log('connected')
    });

    this.socket.emit('message-all', 'Connection ho gyaa');

    this.socket.emit('join', 'abc')
    // this.socket.emit('join', '123');

    this.socket.emit('message-room', {
      room: '123',
      message: 'Connection ho gyaa'
    });

    this.socket.on('message-all', (data) => {
      console.log("message for all user - " + data);
      this.messsageAll.push(data);
    });

    this.socket.on('message-room', (data) => {
      console.log("message for personal room - " + data.message);
      this.messsageRoom.push(data.message);
    });
  }
}
