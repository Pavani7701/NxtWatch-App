import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 350px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
  position: relative;
`
export const BannerTextBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
`
export const BannerLogo = styled.img`
  width: 150px;
  height: 35px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const GetNowBtn = styled.button`
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 14px;
  padding-left: 14px;
  cursor: pointer;
  outline: none;
`
export const BannerCloseBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  height: 40px;
  width: 60%;
  border: 1px solid #cccccc;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  border: none;
  padding-left: 20px;
  font-size: 16px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  color: ${props => (props.isDarkTheme ? '#F1F5F9' : '#000000')};
  outline: none;
`
export const SearchIconButton = styled.button`
  background-color: #f9f9f9;
  font-size: 15px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  background-color: ${props => (props.isDarkTheme ? '#cccccc' : ' #f9f9f9')};
  border-left: 1px solid #909090;
  border: none;
  cursor: pointer;
  outline: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  margin-top: 0;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  border: none;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  width: 100px;
  cursor: pointer;
  outline: none;
`
