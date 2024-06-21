import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedContainer,
  TitleIconContainer,
  IconContainer,
  SavedVideoHeading,
  SavedVideosList,
  NoSavedVideoView,
  NoSavedVideosImage,
  NoSavedVideoHeading,
  NoSavedVideoText,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const hasSavedVideos = savedVideos.length > 0
      return (
        <>
          <Header />
          <SideBar />
          <SavedContainer data-testid="savedVideos" isDarkTheme={isDarkTheme}>
            <TitleIconContainer isDarkTheme={isDarkTheme}>
              <IconContainer>
                <MdPlaylistAdd size={30} color="#ff0000" />
              </IconContainer>
              <SavedVideoHeading isDarkTheme={isDarkTheme}>
                Saved Videos
              </SavedVideoHeading>
            </TitleIconContainer>
            {hasSavedVideos ? (
              <SavedVideosList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideosList>
            ) : (
              <NoSavedVideoView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoHeading isDarkTheme={isDarkTheme}>
                  No saved videos found
                </NoSavedVideoHeading>
                <NoSavedVideoText isDarkTheme={isDarkTheme}>
                  You can save your videos while watching them
                </NoSavedVideoText>
              </NoSavedVideoView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
