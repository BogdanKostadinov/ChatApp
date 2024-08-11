import { Component, ViewChild } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent {
  @ViewChild('messageList') messageList!: MessageListComponent;
  newMessage: string = '';

  onMessageSent(message: string) {
    this.newMessage = message;
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      const nativeElement = this.messageList.elRef.nativeElement;
      nativeElement.scrollTop = nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
    }
  }
}
