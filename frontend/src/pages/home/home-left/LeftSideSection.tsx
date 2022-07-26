import React from 'react'
import { LeftSideSectionTitle ,LeftSideSectionContainer, LeftSideSectionImage} from './styles'

const LeftSideSection:React.FC<{title:string,Icon?:any,Image?:any}> = ({title,Image,Icon}) => {
  return (
    <LeftSideSectionContainer>
                {Icon && <Icon style={{color:"gray",width:"3rem",height:"3rem"}}   />}
                {Image && <LeftSideSectionImage src={Image}/>}

                <LeftSideSectionTitle>{title}</LeftSideSectionTitle>
    </LeftSideSectionContainer>
  )
}

export default LeftSideSection