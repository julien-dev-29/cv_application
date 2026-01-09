import styled from "styled-components";
import { ContainerLeft, ContainerRight, StyledButton } from "./GeneralBlock";
import { GraduationCap, SquarePen } from "lucide-react";
import { Flex } from "../styled-components/styled-components";

const EducationalContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  color: #bbbbbb;
  border: 1px solid #d9d9d9;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding: 32px;
`;

export default function EductionalBlock({ setShowEducationalForm }) {
  return (
    <EducationalContainer>
      <ContainerLeft>
        <Flex>
          <GraduationCap />
          <h2>Eductional</h2>
        </Flex>
      </ContainerLeft>
      <ContainerRight>
        <StyledButton onClick={() => setShowEducationalForm((prev) => !prev)}>
          <SquarePen />
        </StyledButton>
      </ContainerRight>
    </EducationalContainer>
  );
}
