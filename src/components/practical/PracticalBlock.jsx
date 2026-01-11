import { Briefcase, SquarePen } from "lucide-react";
import {
  BlockContainer,
  Flex,
  StyledIconButton,
} from "../../styled-components/styled-components";
import { ContainerLeft, ContainerRight } from "../personal/PersonalBlock";

export default function PracticalBlock({ setShowPracticalForm }) {
  return (
    <BlockContainer>
      <ContainerLeft>
        <Flex>
          <Briefcase />
          <h2>Practical</h2>
        </Flex>
      </ContainerLeft>
      <ContainerRight>
        <StyledIconButton onClick={() => setShowPracticalForm((prev) => !prev)}>
          <SquarePen />
        </StyledIconButton>
      </ContainerRight>
    </BlockContainer>
  );
}
