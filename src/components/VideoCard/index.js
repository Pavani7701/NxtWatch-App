import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavLink,
  ListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileImage,
  VideoDescription,
  Heading,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    publishedAt,
    viewCount,
    profileImageUrl,
    thumbnailUrl,
    name,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDescription>
                  <Heading isDarkTheme={isDarkTheme}>{title}</Heading>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndDate>
                    {viewCount} views <Dot>&#8226;</Dot>
                    {publishedAt}
                  </ViewsAndDate>
                </VideoDescription>
              </VideoDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
