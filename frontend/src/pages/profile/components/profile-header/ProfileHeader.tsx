import React from "react";
import { Button, NormalButton, PrimaryButton } from "../../../../styles/Button";
import FollowButton from "../../../../components/Layout/FollowButton";
import {
  ProfileHeaderContainer,
  ProfileHeaderLeft,
  ProfileUserAvatar,
  ProfileHeaderRight,
  ProfileHeaderRightTop,
  ProfileUserUsername,
  ProfileHeaderRightButtons,
  ProfileHeaderRightBottom,
  ProfileHeaderBottomDesc,
} from "./styles";

const ProfileHeader: React.FC<{
  username: string;
  desc: string;
  avatar: string;
  me:boolean;
}> = ({ username,me, desc, avatar }) => {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderLeft>
        <ProfileUserAvatar src={avatar} />
      </ProfileHeaderLeft>
      <ProfileHeaderRight>
        <ProfileHeaderRightTop>

          <ProfileUserUsername>{username}</ProfileUserUsername>
          <ProfileHeaderRightButtons>
            {!me  && <FollowButton  user={username} followed={false} />}
            {me && 
            <NormalButton valid >
              edit
            </NormalButton>
              }
          </ProfileHeaderRightButtons>
        </ProfileHeaderRightTop>
        <ProfileHeaderRightBottom>
          <ProfileHeaderBottomDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eveniet esse fuga ipsum qui nulla porro, error sit vel, quaerat modi
            obcaecati corporis! Eligendi dignissimos, quaerat nisi asperiores
            totam vitae!
          </ProfileHeaderBottomDesc>
        </ProfileHeaderRightBottom>
      </ProfileHeaderRight>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
