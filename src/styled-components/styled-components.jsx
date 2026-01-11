import styled from "styled-components";
// Variables
const borderColor = "#d9d9d9";
const borderRadiusMd = "5px";
const borderRadiusLg = "10px";
const primaryBorderColor = "#5EB1EF";

// Components
export const Card = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  background-color: #fcfcfc;
  border-radius: ${borderRadiusLg};
  padding: 24px;
`;

export const AddButton = styled.button`
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 8px 16px;
  background-color: #0090ff;
  border-radius: ${borderRadiusMd};
  color: white;
  transition: outline 0.5s ease;
  &:hover {
    background-color: #0588f0;
    outline: 1px solid #0582e8;
  }
  &:checked {
    background-color: #0090ff;
  }
  &:focus {
    outline: 1px solid #0090ff;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1rem;
  border: none;
  padding: 8px 10px;
  background-color: #e5484d;
  border-radius: ${borderRadiusMd};
  color: white;
  transition: outline 0.5s ease;
  &:hover {
    background-color: #dc3e42;
    outline: 1px solid #e5484d;
  }
  &:checked {
    background-color: #e5484d;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const FlexStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: ${borderRadiusMd};
  border: 1px solid ${borderColor};
  color: #8d8d8d;
  &:focus {
    border: 1px solid transparent;
    outline: 2px solid #5eb1ef;
  }
`;

export const StyledLabel = styled.label`
  color: #646464;
`;

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  padding: 16px;
  background-color: #0090ff;
  border-radius: ${borderRadiusMd};
  color: white;
  transition: outline 0.5s ease;
  &:hover {
    background-color: #0588f0;
    outline: 1px solid #0582e8;
  }
  &:checked {
    background-color: #0090ff;
  }
  &:focus {
    outline: 1px solid #0090ff;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  input {
    width: 100%;
  }
`;

export const InputGroupContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const StyledIconButton = styled.button`
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

export const StyledIconDeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: #e5484d;
  color: white;
  border: none;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BlockContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  color: #bbbbbb;
  border: 1px solid ${borderColor};
  background-color: #fcfcfc;
  border-radius: ${borderRadiusLg};
  padding: 32px;
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid ${borderColor};
  border-radius: ${borderRadiusMd};
  padding: 8px;
  &:focus {
    border: 1px solid transparent;
    outline: 1px solid ${primaryBorderColor};
  }
`;
