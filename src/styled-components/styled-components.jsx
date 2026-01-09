import styled from "styled-components";

export const Card = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding: 24px;
`;

export const AddButton = styled.button`
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 8px 16px;
  background-color: #0090ff;
  border-radius: 5px;
  color: white;
  transition: outline 0.5s ease;
  &:hover {
    background-color: #0588f0;
    outline: 1px solid #0582e8;
  }
  &:checked {
    background-color: #0090ff;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1rem;
  border: none;
  padding: 8px 10px;
  background-color: #e5484d;
  border-radius: 5px;
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

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
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
  border-radius: 5px;
  color: white;
  transition: outline 0.5s ease;
  &:hover {
    background-color: #0588f0;
    outline: 1px solid #0582e8;
  }
  &:checked {
    background-color: #0090ff;
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
