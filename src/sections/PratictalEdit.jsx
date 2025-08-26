import { useState } from "react";
import { FormPractical } from "../components/FormPractical";
const PratictalEdit = () => {
  const [experiences, setExperiences] = useState([
    {
      companyName: "Nesquik",
      positionTitle: "Chef",
      responsabilities: "Chef",
      dateFrom: "29/02/2014",
      dateUntil: "30/02/2014",
    },
  ]);
  return (
    <div className="practical">
      <FormPractical
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
};

export { PratictalEdit };
