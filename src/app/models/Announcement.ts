import { Post } from "./Post";
import { User } from "./User";

export class Announcement {
    id: string = "";
    title: string = "";
    desc: string = "";
    date: string = "";
    // idPost: string = "";
    // idEnterprise: string = "";
    post: Post = new Post();
    enterprise: User = new User();

    add(
        id: string, title: string, desc: string, dateAn: string, post: Post, enterprise: User
    ) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.date = dateAn;
        this.post = post;
        this.enterprise = enterprise;
        return this;
    }
}