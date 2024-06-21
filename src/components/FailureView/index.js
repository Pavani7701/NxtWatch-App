import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryBtn,
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

        return (
          <FailedView>
            <FailedImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailedHeading>Oops! Something Went Wrong</FailedHeading>
            <FailedDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailedDescription>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailedView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
