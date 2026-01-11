import styled from "styled-components";
import { Mail, MapPinCheckInside, Phone, SquarePen } from "lucide-react";
import { StyledIconButton } from "../../styled-components/styled-components";
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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ContainerRight = styled.div``;
export default function PersonalBlock({ setShowGeneralForm, personal }) {
  return (
    <StyledGeneralBlock>
      <ContainerLeft>
        <h2>Personal</h2>
        <InfoContainer>
          <Mail />
          {personal?.email ?? ""}
        </InfoContainer>
        <InfoContainer>
          <Phone />
          {personal?.tel ?? ""}
        </InfoContainer>
        <InfoContainer>
          <MapPinCheckInside />
          {personal?.location ?? ""}
        </InfoContainer>
      </ContainerLeft>
      <ContainerRight>
        <StyledIconButton onClick={() => setShowGeneralForm((prev) => !prev)}>
          <SquarePen />
        </StyledIconButton>
      </ContainerRight>
    </StyledGeneralBlock>
  );
}
