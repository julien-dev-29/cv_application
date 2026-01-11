import { Trash } from "lucide-react";
import {
  AddButton,
  Flex,
  InputContainer,
  InputGroupContainer,
  StyledForm,
  StyledIconButton,
  StyledIconDeleteButton,
  StyledInput,
  StyledLabel,
} from "../../../styled-components/styled-components";

export default function EntryForm({ entry, setEntries, setShowEntryForm }) {
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
        <StyledLabel htmlFor="degree">Degree</StyledLabel>
        <StyledInput
          type="text"
          value={entry.degree}
          onChange={(event) =>
            setEntries((prev) => {
              return prev.map((e) =>
                e.id == entry.id ? { ...e, degree: event.target.value } : e
              );
            })
          }
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="school">School</StyledLabel>
        <StyledInput
          type="text"
          value={entry.school}
          onChange={(event) =>
            setEntries((prev) => {
              return prev.map((e) =>
                e.id == entry.id ? { ...e, school: event.target.value } : e
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
      <AddButton>Done</AddButton>
    </StyledForm>
  );
}
