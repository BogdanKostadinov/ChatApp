import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  @Input() newMessage: string = '';
  messages = [
    { sender: 'Alice', content: 'Hello!' },
    { sender: 'Bob', content: 'Hi there!' },
  ];

  constructor(public elRef: ElementRef) {}
  addMessage(message: string) {
    this.messages.push({ sender: 'You', content: message });
  }
}
