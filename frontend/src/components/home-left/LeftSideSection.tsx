import React from "react";
import {
  LeftSideSectionTitle,
  LeftSideSectionContainer,
  LeftSideSectionImage,
} from "./styles";

const LeftSideSection: React.FC<{ tag?:boolean,title: string; Icon?: any; Image?: any }> = ({
  title,
  Image,
  Icon,
  tag,
}) => {
  return (
    <LeftSideSectionContainer>
      {!tag && Icon && (
        <Icon style={{ color: "gray", width: "2.5rem", height: "2.5rem" }} />
      )}
      {!tag && Image && <LeftSideSectionImage src={Image} />}

      <LeftSideSectionTitle className={tag ?"tag":""}> {tag && "# "}{title}</LeftSideSectionTitle>
    </LeftSideSectionContainer>
  );
};

export default LeftSideSection;
