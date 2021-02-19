import { User } from "./User";

export class Message {
    id: string = "";
    content: string = "";
    dateMsg: string = "";
    from: User = new User();
    to: User = new User();
    // idUser: string = "";
    // idEnterprise: string = "";
}