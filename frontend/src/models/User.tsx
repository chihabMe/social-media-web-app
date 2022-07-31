

type User  = {
    username:string;
    id:string;
    avatar:string;
    email?:string|null;
    followers_count:number;
    following_count:number;
    posts_count:number;
}
export default User;
