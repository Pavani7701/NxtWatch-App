import styled from 'styled-components'

export const TrendingContainer = styled.div`
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
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const TrendingVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
