import styled from 'styled-components'

export const VideoDetailViewContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const VideoPlayer = styled.div`
  padding: 20px;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#231f20')};
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#231f20')};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props =>
    (props.isDarkTheme && props.isActive && '#2563eb') ||
    (props.isDarkTheme && '#64748b') ||
    (props.isActive && '#2563eb') ||
    '#64748b'};
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#231f20')};
  margin: 0px;
`
export const Subscribers = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#231f20')};
`
export const VideoDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#231f20')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
