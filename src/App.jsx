import styled from "styled-components";
import Render from "./sections/Render";
import { useState } from "react";
import FormSection from "./sections/FormSection";
import Toolbar from "./components/Toolbar";
import PersonalBlock from "./components/personal/PersonalBlock";
import EducationalBlock from "./components/education/EducationalBlock";
import EducationalForm from "./components/education/EductionalForm";
import { LeftContainer } from "./styled-components/styled-components";
import PracticalForm from "./components/practical/PracticalForm";
import PracticalBlock from "./components/practical/PracticalBlock";
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
  const [showEductionalForm, setShowEductionalForm] = useState(false);
  const [showEductionalEntryForm, setShowEductionalEntryForm] = useState(false);
  const [showPracticalEntryForm, setShowPraticalEntryForm] = useState(false);
  const [showPracticalForm, setShowPracticalForm] = useState(false);
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
            <FormSection
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
          {showEductionalForm ? (
            <EducationalForm
              entries={educationalEntries}
              setEntries={setEducationalEntries}
              showEntryForm={showEductionalEntryForm}
              currentEntry={currentEducationalEntry}
              setCurrentEntry={setCurrentEducationalEntry}
              setShowEntryForm={setShowEductionalEntryForm}
            />
          ) : (
            <EducationalBlock setShowEducationalForm={setShowEductionalForm} />
          )}
          {showPracticalForm ? (
            <PracticalForm
              entries={practicalEntries}
              setEntries={setPracticalEntries}
              showEntryForm={showPracticalEntryForm}
              setShowEntryForm={setShowPraticalEntryForm}
              currentEntry={currentPracticalEntry}
              setCurrentEntry={setCurrentPracticalEntry}
            />
          ) : (
            <PracticalBlock setShowPracticalForm={setShowPracticalForm} />
          )}
        </LeftContainer>
        <Render personal={personal} entries={educationalEntries} />
      </Container>
    </AppContainer>
  );
}

export default App;
