import { Trash } from "lucide-react";
import {
  AddButton,
  Flex,
  InputContainer,
  InputGroupContainer,
  StyledForm,
  StyledIconDeleteButton,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from "../../../styled-components/styled-components";

export default function PracticalEntryForm({
  entry,
  setEntries,
  setShowEntryForm,
}) {
  function handleDeleteEntry() {
    setEntries((prev) => {
      return prev.filter((e) => e.id !== entry.id);
    });
  }
  return (
    <StyledForm onSubmit={() => setShowEntryForm(false)}>
      <Flex>
        <h2>Edit Entry</h2>
        <StyledIconDeleteButton onClick={handleDeleteEntry}>
          <Trash />
        </StyledIconDeleteButton>
      </Flex>
      <InputContainer>
        <StyledLabel htmlFor="jobTitle">Job Title</StyledLabel>
        <StyledInput
          type="text"
          value={entry.jobTitle}
          onChange={(event) =>
            setEntries((prev) => {
              return prev.map((e) =>
                e.id == entry.id ? { ...e, jobTitle: event.target.value } : e
              );
            })
          }
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="employer">Employer</StyledLabel>
        <StyledInput
          type="text"
          value={entry.employer}
          onChange={(event) =>
            setEntries((prev) => {
              return prev.map((e) =>
                e.id == entry.id ? { ...e, employer: event.target.value } : e
              );
            })
          }
        />
      </InputContainer>
      <InputGroupContainer>
        <InputContainer>
          <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
          <StyledInput
            type="date"
            value={entry.startDate}
            onChange={(event) =>
              setEntries((prev) => {
                return prev.map((e) =>
                  e.id == entry.id ? { ...e, startDate: event.target.value } : e
                );
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="endDate">End Date</StyledLabel>
          <StyledInput
            type="date"
            value={entry.endDate}
            onChange={(event) =>
              setEntries((prev) => {
                return prev.map((e) =>
                  e.id == entry.id ? { ...e, endDate: event.target.value } : e
                );
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            type="text"
            value={entry.location}
            onChange={(event) =>
              setEntries((prev) => {
                return prev.map((e) =>
                  e.id == entry.id ? { ...e, location: event.target.value } : e
                );
              })
            }
          />
        </InputContainer>
      </InputGroupContainer>
      <InputContainer>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledTextarea
          id="description"
          rows={10}
          value={entry.description}
          onChange={(event) =>
            setEntries((prev) => {
              return prev.map((e) =>
                e.id == entry.id ? { ...e, description: event.target.value } : e
              );
            })
          }
        ></StyledTextarea>
      </InputContainer>
      <AddButton>Done</AddButton>
    </StyledForm>
  );
}
