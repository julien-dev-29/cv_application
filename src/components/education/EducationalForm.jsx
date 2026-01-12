import styled from "styled-components";
import {
  AddButton,
  Card,
  Flex,
  FlexStart,
  StyledCard,
} from "../../styled-components/styled-components";
import EducationalEntryForm from "./entries/EducationalEntryForm";
import { GraduationCap } from "lucide-react";

export default function EductionalForm({
  entries,
  setEntries,
  showEntryForm,
  setShowEntryForm,
  setCurrentEntry,
  currentEntry,
}) {
  return (
    <StyledCard>
      {!showEntryForm ? (
        <>
          <FlexStart>
            <GraduationCap />
            <h2>Education</h2>
          </FlexStart>
          {entries?.map((entry) => (
            <EntryItem
              key={entry.id}
              entry={entry}
              entries={entries}
              setEntries={setEntries}
              setCurrentEntry={setCurrentEntry}
              setShowEntryForm={setShowEntryForm}
            />
          ))}
          <AddButton
            onClick={() =>
              setEntries([
                ...entries,
                {
                  id: crypto.randomUUID(),
                  name: "new",
                },
              ])
            }
          >
            Add Entry
          </AddButton>
        </>
      ) : (
        <EducationalEntryForm
          key={currentEntry.id}
          entry={currentEntry}
          setEntries={setEntries}
          setShowEntryForm={setShowEntryForm}
        />
      )}
    </StyledCard>
  );
}

const EntryCard = styled(Card)`
  cursor: pointer;
`;
function EntryItem({ entry, setCurrentEntry, setShowEntryForm }) {
  return (
    <EntryCard
      onClick={(e) => {
        e.stopPropagation();
        setCurrentEntry(entry);
        setShowEntryForm(true);
      }}
    >
      <Flex>
        <div>{entry.degree ?? "new"}</div>
      </Flex>
    </EntryCard>
  );
}
