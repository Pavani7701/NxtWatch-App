import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailViewContainer,
  VideoPlayer,
  VideoTitle,
  VideoDetailsContainer,
  ViewsAndDate,
  SocialButtonsContainer,
  BtnContainer,
  SocialButton,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  Subscribers,
  VideoDescription,
  Dot,
  HrLine,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoPlayerView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, addSavedVideos, savedVideos} = value
          let isSaved
          const index = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoDetails.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const onClickLike = () => {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisliked: false,
            }))
          }

          const onClickDisLike = () => {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
              isLiked: false,
            }))
          }

          const onClickSave = () => {
            addSavedVideos(videoDetails)
          }

          return (
            <VideoPlayer>
              <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
              <VideoTitle isDarkTheme={isDarkTheme}>
                {videoDetails.title}
              </VideoTitle>
              <VideoDetailsContainer>
                <ViewsAndDate isDarkTheme={isDarkTheme}>
                  {videoDetails.viewCount} views
                  <Dot>&#8226;</Dot>
                  {videoDetails.publishedAt}
                </ViewsAndDate>
                <SocialButtonsContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      onClick={onClickLike}
                      isActive={isLiked}
                      isDarkTheme={isDarkTheme}
                    >
                      <AiOutlineLike size={25} />
                      Like
                    </SocialButton>
                  </BtnContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      onClick={onClickDisLike}
                      isActive={isDisliked}
                      isDarkTheme={isDarkTheme}
                    >
                      <AiOutlineDislike size={25} />
                      Dislike
                    </SocialButton>
                  </BtnContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      onClick={onClickSave}
                      isActive={isSaved}
                      isDarkTheme={isDarkTheme}
                    >
                      <MdPlaylistAdd size={25} />
                      {isSaved ? 'Saved' : 'Save'}
                    </SocialButton>
                  </BtnContainer>
                </SocialButtonsContainer>
              </VideoDetailsContainer>
              <HrLine />
              <ChannelContainer>
                <ChannelImage
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelInfo>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {videoDetails.name}
                  </ChannelName>
                  <Subscribers isDarkTheme={isDarkTheme}>
                    {videoDetails.subscriberCount} subscribers
                  </Subscribers>
                  <VideoDescription isDarkTheme={isDarkTheme}>
                    {videoDetails.description}
                  </VideoDescription>
                </ChannelInfo>
              </ChannelContainer>
            </VideoPlayer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideo = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoPlayerView()
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
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                isDarkTheme={isDarkTheme}
              >
                {this.renderVideo()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetails
