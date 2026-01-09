import styled from "styled-components";
import { AddButton, Card, Flex } from "../styled-components/styled-components";
import EntryForm from "./EntryForm";
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
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
          <h2>EductionalForm</h2>
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
        <EntryForm
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
        <div>{entry.id}</div>
      </Flex>
    </EntryCard>
  );
}
