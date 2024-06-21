import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoCard from '../GamingVideoCard'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingContainer,
  TitleIconContainer,
  IconContainer,
  GamingVideoHeading,
  GamingVideoList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideos()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <SideBar />
              <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
                <TitleIconContainer isDarkTheme={isDarkTheme}>
                  <IconContainer>
                    <SiYoutubegaming size={30} color="#ff0000" />
                  </IconContainer>
                  <GamingVideoHeading isDarkTheme={isDarkTheme}>
                    Gaming
                  </GamingVideoHeading>
                </TitleIconContainer>
                {this.renderGamingVideos()}
              </GamingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
