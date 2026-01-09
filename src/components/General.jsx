import styled from "styled-components";
import {
  AddButton,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "../styled-components/styled-components";

export const StyleHeader = styled.h1`
  margin-bottom: 16px;
`;

export const StyledForm = styled.form``;
export default function General({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  setShowGeneralForm,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setShowGeneralForm(false);
  }
  return (
    <div>
      <StyleHeader>General Informations</StyleHeader>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <StyledLabel htmlFor="name">Name: </StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="email">Email: </StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="email">Tel: </StyledLabel>
          <StyledInput
            type="tel"
            id="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </InputContainer>
        <AddButton>Done</AddButton>
      </StyledForm>
    </div>
  );
}
