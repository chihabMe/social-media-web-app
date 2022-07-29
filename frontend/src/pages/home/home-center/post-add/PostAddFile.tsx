import React, { useState } from "react";
import { FileUpload, PostFileAddContainer, PostFileAddTitle } from "./styles";

const PostAddFile: React.FC<{
  upload?: boolean;
  name?: string;
  types?: string[];
  Icon?: any;
  text?: string;
}> = ({ upload = false, name, types, text, Icon }) => {
  const [file, setFile] = useState<any>("");
  const fileChangeHandler = (e: any) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
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
