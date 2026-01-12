import styled from "styled-components";
import Render from "./sections/Render";
import { useState } from "react";
import Toolbar from "./components/Toolbar";
import PersonalBlock from "./components/personal/PersonalBlock";
import EducationalForm from "./components/education/EducationalForm";
import PracticalForm from "./components/practical/PracticalForm";
import { LeftContainer } from "./styled-components/styled-components";
import PersonalForm from "./components/personal/PersonalForm";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  background-color: #f0f0f0;
`;
const Container = styled.div`
  display: flex;
  gap: 16px;
`;

function App() {
  const [personal, setPersonal] = useState({});
  const [showGeneralForm, setShowGeneralForm] = useState(false);
  const [showEductionalEntryForm, setShowEductionalEntryForm] = useState(false);
  const [showPracticalEntryForm, setShowPraticalEntryForm] = useState(false);
  const [educationalEntries, setEducationalEntries] = useState([]);
  const [practicalEntries, setPracticalEntries] = useState([]);
  const [currentEducationalEntry, setCurrentEducationalEntry] = useState(null);
  const [currentPracticalEntry, setCurrentPracticalEntry] = useState(null);
  return (
    <AppContainer>
      <Toolbar />
      <Container>
        <LeftContainer>
          {showGeneralForm ? (
            <PersonalForm
              personal={personal}
              setPersonal={setPersonal}
              setShowGeneralForm={setShowGeneralForm}
            />
          ) : (
            <PersonalBlock
              setShowGeneralForm={setShowGeneralForm}
              personal={personal}
            />
          )}
          <EducationalForm
            entries={educationalEntries}
            setEntries={setEducationalEntries}
            showEntryForm={showEductionalEntryForm}
            currentEntry={currentEducationalEntry}
            setCurrentEntry={setCurrentEducationalEntry}
            setShowEntryForm={setShowEductionalEntryForm}
          />
          <PracticalForm
            entries={practicalEntries}
            setEntries={setPracticalEntries}
            showEntryForm={showPracticalEntryForm}
            setShowEntryForm={setShowPraticalEntryForm}
            currentEntry={currentPracticalEntry}
            setCurrentEntry={setCurrentPracticalEntry}
          />
        </LeftContainer>
        <Render
          personal={personal}
          educationalEntries={educationalEntries}
          practicalEntries={practicalEntries}
        />
      </Container>
    </AppContainer>
  );
}

export default App;
