import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <SideBar />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosDescription isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosDescription>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
