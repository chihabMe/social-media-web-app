import React, { createContext, useReducer, useState } from "react"
import {post} from '../models/post'
type newPostType={
    body:string,
    image:any,
    video:any
}
let newPostInitState:newPostType = {
    body:'',
    image:"",
    video:"",
}
const postReducer = (state:newPostType,action:{payload?:any,type:string})=>{
    if(action.type=="addBody"){
        return {...state,body:action.payload}
    }
    if(action.type=="addImage"){
        return {...state,image:action.payload}
    }
    if(action.type=="addVideo"){
        return {...state,video:action.payload}
    }
    if(action.type=='reset'){
        return newPostInitState 
    }
    return state

}
let initState :{
    posts:post[],
    postState:newPostType,
    dispatchPost:(action:any)=>any,
    addPost:(postData:post)=>void;
    addPosts:(postsList:post[])=>void,

}
initState = {
    posts:[],
    postState:newPostInitState,
    dispatchPost:()=>{},
    addPost:()=>{},
    addPosts:()=>{},
    
}
export const PostContext = createContext(initState)

export const PostContextProvider :React.FC<{children:any}> = (props)=>{
    const [posts,setPosts] = useState<post[]>([])
    const [postState,dispatchPost]=useReducer(postReducer,newPostInitState)
    const addPost = (postData:post)=>{
        if(posts?.length>0){
        setPosts(prev=>[postData,...prev])
        }
    }
    const addPosts = (postList:post[])=>{
        setPosts(postList)
    }
    let value = {
        posts,
        postState,
        dispatchPost,
        addPost,
        addPosts,

    }
    return <PostContext.Provider value={value}>
            {props.children}

            </PostContext.Provider>
}