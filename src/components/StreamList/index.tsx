import React from 'react'
import streamThumbnail from '../../images/stream_thumbnail.jpg'

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar, 
  StreamUsername, 
  StreamDescription, 
  StreamCategory, 
  TagRow, 
  TagView,
  TagText
 } from './styles'


const StreamList :React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>devfandre</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Coding NOW
            </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Education & Programming
            </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Education</TagText>
          </TagView>
          <TagView>
            <TagText>Code</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
    )

  return (
    <List>
      <StreamItem />
      <StreamItem />
    </List>
  )
} 
export default StreamList