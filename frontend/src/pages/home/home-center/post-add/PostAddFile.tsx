import React, { useEffect, useState } from "react";
import { readBuilderProgram } from "typescript";
import { FileUpload, PostFileAddContainer, PostFileAddTitle } from "./styles";

const PostAddFile: React.FC<{
  upload?: boolean;
  name?: string;
  types?: string[];
  Icon?: any;
  text?: string;
  file?:any,
  setFile?:(file:any)=>void,
}> = ({ setFile,file,upload = false, name, types, text, Icon }) => {
    const reader = new FileReader()
    const [currentFile,setCurrentFile]=useState(null)
  const fileChangeHandler = (e: any) => {
    console.log("setted -----------------------------")
      if(!setFile)return
      setFile(e.target.files[0])
    //setCurrentFile(e.target.files[0])
  };
 useEffect(()=>{
    console.log("reader -------------------------")
  if(setFile){
  //reader.readAsDataURL(currentFile)
  //reader.onload = ()=>{
   // console.log("reader -------------------------")
    //console.log(reader)
    //setFile(reader.result)
  //}
  }
 },[currentFile]) 

  return (
    <>
      <PostFileAddContainer htmlFor={name}>
        <Icon style={{ width: "3rem", height: "3rem", color: "gray" }} />
        <PostFileAddTitle>{text}</PostFileAddTitle>
        {upload && (
          <FileUpload
            type="file"
            id={name}
            name={name}
            accept={types?.map(type=>name+"/"+type).join(",")}
            onChange={fileChangeHandler}
          />
        )}
      </PostFileAddContainer>
    </>
  );
};

export default PostAddFile;
