import { ContainerLeft, ContainerRight } from "../personal/PersonalBlock";
import { GraduationCap, SquarePen } from "lucide-react";
import {
  Flex,
  BlockContainer,
  StyledIconButton,
} from "../../styled-components/styled-components";


export default function EductionalBlock({ setShowEducationalForm }) {
  return (
    <BlockContainer>
      <ContainerLeft>
        <Flex>
          <GraduationCap />
          <h2>Eductional</h2>
        </Flex>
      </ContainerLeft>
      <ContainerRight>
        <StyledIconButton
          onClick={() => setShowEducationalForm((prev) => !prev)}
        >
          <SquarePen />
        </StyledIconButton>
      </ContainerRight>
    </BlockContainer>
  );
}
