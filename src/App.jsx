import styled from "styled-components";
import Render from "./sections/Render";
import { useState } from "react";
import FormSection from "./sections/FormSection";
import Toolbar from "./components/Toolbar";
import GeneralBlock from "./components/GeneralBlock";
import EducationalBlock from "./components/EducationalBlock";
import EducationalForm from "./components/EductionalForm";
import { LeftContainer } from "./styled-components/styled-components";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: #f0f0f0;
`;
const Container = styled.div`
  display: flex;
  gap: 16px;
`;

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [showGeneralForm, setShowGeneralForm] = useState(false);
  const [showEductionalForm, setShowEductionalForm] = useState(false);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);
  return (
    <AppContainer>
      <Toolbar />
      <Container>
        <LeftContainer>
          {showGeneralForm ? (
            <FormSection
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              tel={tel}
              setTel={setTel}
              setShowGeneralForm={setShowGeneralForm}
            />
          ) : (
            <GeneralBlock
              setShowGeneralForm={setShowGeneralForm}
              name={name}
              email={email}
              tel={tel}
            />
          )}
          {showEductionalForm ? (
            <EducationalForm
              entries={entries}
              setEntries={setEntries}
              showEntryForm={showEntryForm}
              currentEntry={currentEntry}
              setCurrentEntry={setCurrentEntry}
              setShowEntryForm={setShowEntryForm}
            />
          ) : (
            <EducationalBlock setShowEducationalForm={setShowEductionalForm} />
          )}
        </LeftContainer>
        <Render name={name} email={email} tel={tel} entries={entries} />
      </Container>
    </AppContainer>
  );
}

export default App;
