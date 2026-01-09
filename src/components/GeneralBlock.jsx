import styled from "styled-components";
import { Mail, MapPinCheckInside, Phone, SquarePen } from "lucide-react";
const StyledGeneralBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  background-color: #fcfcfc;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 32px;
  color: #bbbbbb;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: #00a2c7;
  color: white;
  border: none;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ContainerRight = styled.div``;
export default function GeneralBlock({ setShowGeneralForm, name, email, tel }) {
  return (
    <StyledGeneralBlock>
      <ContainerLeft>
        <h2>Personal</h2>
        <InfoContainer>
          <Mail />
          {name}
        </InfoContainer>
        <InfoContainer>
          <Phone />
          {email}
        </InfoContainer>
        <InfoContainer>
          <MapPinCheckInside />
          {tel}
        </InfoContainer>
      </ContainerLeft>
      <ContainerRight>
        <StyledButton onClick={() => setShowGeneralForm((prev) => !prev)}>
          <SquarePen />
        </StyledButton>
      </ContainerRight>
    </StyledGeneralBlock>
  );
}
