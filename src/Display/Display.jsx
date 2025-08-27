import { EducationalDisplay } from "./EducationalDisplay";
import { GeneralDisplay } from "./GeneralDisplay";
import { PracticalDisplay } from "./PracticalDisplay";
import "../styles/Display.css"

const Display = ({ user, educationals, practicals }) => {
  return (
    <div className="display">
      <GeneralDisplay user={user} />
      <EducationalDisplay educationals={educationals} />
      <PracticalDisplay practicals={practicals} />
    </div>
  );
};
export { Display };
