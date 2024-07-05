import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
   
export class AppComponent {
  messages: Message[] = [];
  newMessage1 = '';
  newMessage2 = '';

  sendMessage(sender: 'Device 1' | 'Device 2') {
    const newMessage = sender === 'Device 1' ? this.newMessage1 : this.newMessage2;
    if (newMessage.trim()) {
      this.messages.push({
        text: newMessage,
        sender: sender,
        timestamp: new Date()
      });
      if (sender === 'Device 1') {
        this.newMessage1 = '';
      } else {
        this.newMessage2 = '';
      }
    }
  }
}

interface Message {
  text: string;
  sender: 'Device 1' | 'Device 2';
  timestamp: Date;
}
