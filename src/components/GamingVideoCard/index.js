import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavLink,
  ListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  Heading,
  ViewsAndDate,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <Heading isDarkTheme={isDarkTheme}>{title}</Heading>
                <ViewsAndDate>{viewCount} Watching Worldwide</ViewsAndDate>
              </VideoDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoCard
