import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/Message';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public user = new User();
  public myMessages = new Array<Message>();
  public myConversations = new Array();
  public myConvNames = new Array<Message>();
  public myConvMessages = new Array<Message>();

  groupBy(list, keyGetter) {
    const map = new Map();

    // const arr = {};
    // const msgs = new Array<Message>();

    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);

            //  msgs.push(item);
            //  arr[key] = msgs;

         } else {
             collection.push(item);
         }
    });
    return map;
  }

  constructor(
    private messageService: MessageService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.getUser();
    this.user = this.authenticationService.user;
    // const grouped = this.groupBy(this.myMessages, msg => msg.to.id);

    // console.log(grouped.get("1")[0]['content']);

    // for(let conv of grouped.keys()) {
    //   this.myConversations.push(conv);
    // }

    // for(let conv of grouped.keys()) {
    //   console.log("key: "+conv);
    //   let msg = [];
    //   msg.push(this.myMessages.find(msg => msg.idEnterprise = conv));
    //   for(let i = 0; i < msg.length; i++){
    //     console.log("msg: " + msg[i]);
    //   }
    // }
  }

  loadMessages() {
    this.messageService.getMessages(this.user.id)
    .subscribe(
      result => {
        for(let i = 0; i < result.length; i++) {
          this.myMessages[i] = new Message();
          this.myMessages[i].id = result[i]['id'];
          this.myMessages[i].content = result[i]['content'];
          this.myMessages[i].dateMsg = result[i]['dateMsg'];
          this.myMessages[i].from = result[i]['from'];
          this.myMessages[i].to = result[i]['to'];
          // this.myMessages.push(msg);
        }
        const grouped = this.groupBy(this.myMessages, msg => msg.to.id);
        for(let conv of grouped.keys()) {
          this.myConvNames.push(this.myMessages.filter(c => c.to.id == conv)[0])
          this.myConversations.push(conv);
          console.log()
        }
        // console.log("myMsgss:"+this.myMessages[0].to.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  // --- Show messages of each conversation --- //
  openConversation(conv: Message) {
    const grouped = this.groupBy(this.myMessages, msg => msg.to.id);
    this.myConvMessages = new Array<Message>();
    for(let i = 0; i < grouped.size; i++){
      this.myConvMessages.push(grouped.get(conv.to.id)[i]);
    }
  }

  send(chat) {
    console.log(chat)
  }

  ngOnInit(): void {
    this.loadMessages();
    // console.log("msgTo:"+this.myMessages);
    // const grouped = this.groupBy(this.myMessages, msg => msg.to.id);
    // for(let conv of grouped.keys()) {
    //   this.myConversations.push(conv);
    //   console.log()
    // }
  }

}
