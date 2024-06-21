import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoCard from '../HomeVideoCard'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeContainer,
  BannerContainer,
  BannerTextBtnContainer,
  BannerLogo,
  BannerText,
  GetNowBtn,
  BannerCloseBtn,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  LoaderContainer,
  VideoCardList,
  NoVideoView,
  NoVideosImage,
  NoVideoHeading,
  NoVideoDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homeVideos} = this.state
    const videosCount = homeVideos.length
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return videosCount > 0 ? (
            <VideoCardList>
              {homeVideos.map(eachVideo => (
                <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </VideoCardList>
          ) : (
            <NoVideoView>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideoHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </NoVideoHeading>
              <NoVideoDescription isDarkTheme={isDarkTheme}>
                Try different key words or remove search filter
              </NoVideoDescription>
              <RetryButton type="button" onClick={this.onRetry}>
                Retry
              </RetryButton>
            </NoVideoView>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
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
    const {searchInput, showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <SideBar />
              <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                {showBanner && (
                  <BannerContainer data-testid="banner">
                    <BannerCloseBtn
                      type="button"
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={20} />
                    </BannerCloseBtn>
                    <BannerTextBtnContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with
                        <br />
                        UPI
                      </BannerText>
                      <GetNowBtn type="button">GET IT NOW</GetNowBtn>
                    </BannerTextBtnContainer>
                  </BannerContainer>
                )}
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    isDarkTheme={isDarkTheme}
                  />
                  <SearchIconButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                    isDarkTheme={isDarkTheme}
                  >
                    <AiOutlineSearch size={25} />
                  </SearchIconButton>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
