

type User  = {
    username:string;
    id:string;
    avatar:string;
    email?:string|null;
    following_count:number;
    posts_count:number;
    followed:boolean;
}
export default User;
