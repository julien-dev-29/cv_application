import styled from "styled-components";
import {
  AddButton,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "../../styled-components/styled-components";

export const StyleHeader = styled.h1`
  margin-bottom: 16px;
`;

export const StyledForm = styled.form``;

export default function PersonalForm({
  personal,
  setPersonal,
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
            value={personal?.name ?? ""}
            onChange={(e) =>
              setPersonal((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="email">Email: </StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={personal?.email ?? ""}
            onChange={(e) =>
              setPersonal((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="tel">Tel: </StyledLabel>
          <StyledInput
            type="tel"
            id="tel"
            value={personal?.tel ?? ""}
            onChange={(e) =>
              setPersonal((prev) => {
                return { ...prev, tel: e.target.value };
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="location">Location: </StyledLabel>
          <StyledInput
            type="text"
            id="location"
            value={personal?.location ?? ""}
            onChange={(e) =>
              setPersonal((prev) => {
                return { ...prev, location: e.target.value };
              })
            }
          />
        </InputContainer>
        <AddButton>Done</AddButton>
      </StyledForm>
    </div>
  );
}
