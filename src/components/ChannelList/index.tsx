import React from 'react'
import { List, ChannelContainer, LeftSide, Avatar, Column, Username, Info, RightSide, WhiteCircle } from './styles'


const StreamList : React.FC = () => {

  const ChannelItem = () => (
    <ChannelContainer>
        <LeftSide>
          <Avatar />
          <Column>
            <Username>Felipe André</Username>
          <Info>{Math.floor(Math.random() * 100 + 1)} news videos</Info>
          </Column>
        </LeftSide>
        <RightSide>
          <WhiteCircle />
        </RightSide>
    </ChannelContainer>
  
  )
 
  return (
    <List>
     <ChannelItem />
     <ChannelItem />
    </List>
  )
} 
export default StreamList