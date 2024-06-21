import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoSavedVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NoSavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`
export const NoSavedVideoText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  margin-top: 0;
`
