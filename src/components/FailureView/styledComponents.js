import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const RetryBtn = styled.button`
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

export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`
export const FailedDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  margin-top: 0;
`
