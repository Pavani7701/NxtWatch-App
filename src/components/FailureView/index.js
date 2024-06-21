import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage src={failureImage} alt="failure view" />
            <FailedHeading>Oops! Something Went Wrong</FailedHeading>
            <FailedDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailedDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
