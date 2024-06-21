import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
export const LoginLogo = styled.img`
  width: 180px;
  margin-top: 15px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 15px;
  height: 40px;
  cursor: pointer;
  outline: none;
`
export const InputLabel = styled.label`
  color: #64748b;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const UsernameInput = styled.input`
  color: #475569;
  font-size: 16px;
  width: 100%;
  padding: 8px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  font-family: 'Roboto';
  margin-top: 5px;
  cursor: pointer;
  outline: none;
`
export const PasswordInput = styled.input`
  color: #475569;
  font-size: 16px;
  width: 100%;
  padding: 8px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  font-family: 'Roboto';
  margin-top: 5px;
  cursor: pointer;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 16px;
  font-family: 'Roboto';
`
export const SubmitError = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
`
