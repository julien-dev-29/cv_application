import { useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { GeneralEdit } from "./sections/GeneralEdit";
import { EductionalEdit } from "./EductionalEdit";
import { PratictalEdit } from "./sections/PratictalEdit";
import "./styles/ControlPanel.css"

const ControlPanel = ({ user, setUser }) => {
  const [navigation, setNavigation] = useState("general");
  var panel;
  switch (navigation) {
    case "general":
      panel = <GeneralEdit user={user} setUser={setUser} />;
      break;
    case "formation":
      panel = <EductionalEdit />;
      break;
    case "professionel":
      panel = <PratictalEdit />;
      break;

    default:
      break;
  }
  return (
    <section className="control-panel">
      <Navigation setNavigation={setNavigation} />
      {panel}
    </section>
  );
};

export { ControlPanel };
