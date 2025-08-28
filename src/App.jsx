import { useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Display } from "./Display/Display";

function App() {
  const [user, setUser] = useState({});
  const [educationals, setEducationals] = useState([]);
  const [practicals, setPratictals] = useState([]);
  return (
    <div className="container">
      <ControlPanel
        user={user}
        setUser={setUser}
        educationals={educationals}
        setEducationals={setEducationals}
        practicals={practicals}
        setPratictals={setPratictals}
      />
      <Display
        user={user}
        educationals={educationals}
        practicals={practicals}
      />
    </div>
  );
}

export { App };
