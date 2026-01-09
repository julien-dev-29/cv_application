import styled from "styled-components";
import General from "../components/General";
const StyledForm = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding: 32px;
`;
export default function FormSection({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  setShowGeneralForm,
}) {
  return (
    <StyledForm>
      <General
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        tel={tel}
        setTel={setTel}
        setShowGeneralForm={setShowGeneralForm}
      />
    </StyledForm>
  );
}
