import { Briefcase } from "lucide-react";
import {
  AddButton,
  Card,
  Flex,
  FlexStart,
  StyledCard,
} from "../../styled-components/styled-components";
import styled from "styled-components";
import PracticalEntryForm from "./entries/PracticalEntryForm";
export default function PracticalForm({
  entries,
  setEntries,
  showEntryForm,
  setShowEntryForm,
  currentEntry,
  setCurrentEntry,
}) {
  return (
    <StyledCard>
      {!showEntryForm ? (
        <>
          <FlexStart>
            <Briefcase />
            <h2>Practical</h2>
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
        <PracticalEntryForm
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
        <div>{entry.jobTitle ?? "new"}</div>
      </Flex>
    </EntryCard>
  );
}
