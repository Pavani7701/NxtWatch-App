import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`

export const NotFoundVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  text-align: center;
`
