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
import { useState } from "react";

export default function PracticalEntryForm({
  entry,
  setEntries,
  setShowEntryForm,
}) {
  const [form, setForm] = useState(() => ({
    jobTitle: entry.jobTitle ?? "",
    employer: entry.employer ?? "",
    startDate: entry.startDate ?? "",
    endDate: entry.endDate ?? "",
    location: entry.location ?? "",
    description: entry.description ?? "",
  }));
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
          value={form.jobTitle}
          onChange={(event) => {
            setForm((prev) => ({ ...prev, jobTitle: event.target.value }));
            setEntries((prev) =>
              prev.map((e) =>
                e.id == entry.id ? { ...e, jobTitle: event.target.value } : e
              )
            );
          }}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="employer">Employer</StyledLabel>
        <StyledInput
          type="text"
          value={form.employer}
          onChange={(event) => {
            setForm((prev) => ({ ...prev, employer: event.target.value }));
            setEntries((prev) =>
              prev.map((e) =>
                e.id == entry.id ? { ...e, employer: event.target.value } : e
              )
            );
          }}
        />
      </InputContainer>
      <InputGroupContainer>
        <InputContainer>
          <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
          <StyledInput
            type="date"
            value={form.startDate}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, startDate: event.target.value }));
              setEntries((prev) =>
                prev.map((e) =>
                  e.id == entry.id ? { ...e, startDate: event.target.value } : e
                )
              );
            }}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="endDate">End Date</StyledLabel>
          <StyledInput
            type="date"
            value={form.endDate}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, endDate: event.target.value }));
              setEntries((prev) =>
                prev.map((e) =>
                  e.id == entry.id ? { ...e, endDate: event.target.value } : e
                )
              );
            }}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            type="text"
            value={form.location}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, location: event.target.value }));
              setEntries((prev) =>
                prev.map((e) =>
                  e.id == entry.id ? { ...e, location: event.target.value } : e
                )
              );
            }}
          />
        </InputContainer>
      </InputGroupContainer>
      <InputContainer>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledTextarea
          id="description"
          rows={10}
          value={form.description}
          onChange={(event) => {
            setForm((prev) => ({ ...prev, description: event.target.value }));
            setEntries((prev) =>
              prev.map((e) =>
                e.id == entry.id ? { ...e, description: event.target.value } : e
              )
            );
          }}
        ></StyledTextarea>
      </InputContainer>
      <AddButton>Done</AddButton>
    </StyledForm>
  );
}
