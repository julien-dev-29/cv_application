import { useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { GeneralEdit } from "./sections/GeneralEdit";
import { EductionalEdit } from "./sections/EductionalEdit";
import { PratictalEdit } from "./sections/PratictalEdit";

const ControlPanel = ({
  user,
  setUser,
  educationals,
  setEducationals,
  practicals,
  setPratictals,
}) => {
  const [navigation, setNavigation] = useState("professionel");
  var panel;
  switch (navigation) {
    case "general":
      panel = <GeneralEdit user={user} setUser={setUser} />;
      break;
    case "formation":
      panel = (
        <EductionalEdit
          educationals={educationals}
          setEducationals={setEducationals}
        />
      );
      break;
    case "professionel":
      panel = (
        <PratictalEdit
          experiences={practicals}
          setExperiences={setPratictals}
        />
      );
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
