import styled from "styled-components";
import PersonalForm from "../components/personal/PersonalForm";
const StyledForm = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding: 32px;
`;
export default function FormSection({
  personal,
  setPersonal,
  setShowGeneralForm,
}) {
  return (
    <StyledForm>
      <PersonalForm
        personal={personal}
        setPersonal={setPersonal}
        setShowGeneralForm={setShowGeneralForm}
      />
    </StyledForm>
  );
}
