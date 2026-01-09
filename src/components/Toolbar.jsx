import styled from "styled-components";

const StyledToolbar = styled.nav`
  padding: 32px;
  background-color: #fcfcfc;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export default function Toolbar() {
  return <StyledToolbar>Toolbar</StyledToolbar>;
}
