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
} from "../../../styled-components/styled-components";
import { useState } from "react";

export default function EducationalEntryForm({
  entry,
  setEntries,
  setShowEntryForm,
}) {
  const [form, setForm] = useState(() => ({
    degree: entry.degree ?? "",
    school: entry.school ?? "",
    startDate: entry.startDate ?? "",
    endDate: entry.endDate ?? "",
    location: entry.location ?? "",
  }));
  function handleDeleteEntry() {
    setEntries((prev) => {
      setShowEntryForm(false);
      return prev.filter((e) => e.id !== entry.id);
    });
  }
  return (
    <div>
      <Flex>
        <h2>Edit Entry</h2>
        <StyledIconDeleteButton onClick={handleDeleteEntry}>
          <Trash />
        </StyledIconDeleteButton>
      </Flex>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          setShowEntryForm(false);
        }}
      >
        <InputContainer>
          <StyledLabel htmlFor="degree">Degree</StyledLabel>
          <StyledInput
            id="degree"
            type="text"
            value={form.degree}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, degree: event.target.value }));
              setEntries((prev) =>
                prev.map((e) =>
                  e.id === entry.id ? { ...e, degree: event.target.value } : e
                )
              );
            }}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="school">School</StyledLabel>
          <StyledInput
            id="school"
            type="text"
            value={form.school}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, school: event.target.value }));
              setEntries((prev) =>
                prev.map((e) =>
                  e.id === entry.id ? { ...e, school: event.target.value } : e
                )
              );
            }}
          />
        </InputContainer>
        <InputGroupContainer>
          <InputContainer>
            <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            <StyledInput
              id="startDate"
              type="date"
              value={form.startDate}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, startDate: event.target.value }));
                setEntries((prev) =>
                  prev.map((e) =>
                    e.id === entry.id
                      ? { ...e, startDate: event.target.value }
                      : e
                  )
                );
              }}
            />
          </InputContainer>
          <InputContainer>
            <StyledLabel htmlFor="endDate">End Date</StyledLabel>
            <StyledInput
              id="endDate"
              type="date"
              value={form.endDate}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, endDate: event.target.value }));
                setEntries((prev) =>
                  prev.map((e) =>
                    e.id === entry.id
                      ? { ...e, endDate: event.target.value }
                      : e
                  )
                );
              }}
            />
          </InputContainer>
          <InputContainer>
            <StyledLabel htmlFor="location">Location</StyledLabel>
            <StyledInput
              id="location"
              type="text"
              value={form.location}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, location: event.target.value }));
                setEntries((prev) =>
                  prev.map((e) =>
                    e.id === entry.id
                      ? { ...e, location: event.target.value }
                      : e
                  )
                );
              }}
            />
          </InputContainer>
        </InputGroupContainer>
        <AddButton>Done</AddButton>
      </StyledForm>
    </div>
  );
}
