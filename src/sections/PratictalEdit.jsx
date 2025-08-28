import { useState } from "react";
import { FormPractical } from "../components/FormPractical";

/**
 *
 * @returns
 */
const PratictalEdit = ({ experiences, setExperiences }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);

  function handleEdit(index) {
    setIndex(index);
    setIsEdit(true);
  }

  /**
   *
   * @param {Number} index
   */
  function handleDelete(index) {
    setExperiences(experiences.filter((exp, i) => index !== i));
  }

  /**
   *
   * @param {PointerEvent} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setExperiences([
      ...experiences,
      {
        companyName: data.get("companyName"),
        companyLocation: data.get("companyLocation"),
        positionTitle: data.get("positionTitle"),
        dateFrom: data.get("dateFrom"),
        dateUntil: data.get("dateUntil"),
      },
    ]);
    e.target.reset();
  }
  return (
    <div className="practical">
      <h2>Liste des expériences professionnelles</h2>
      <table>
        <thead>
          <tr>
            <td>Entreprise</td>
            <td>Lieu</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {experiences.map((exp, index) => (
            <tr key={index}>
              <td>{exp.companyName}</td>
              <td>{exp.companyLocation}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button
                  className="btn-error"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <FormPractical
        index={index}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        handleSubmit={handleSubmit}
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
};

export { PratictalEdit };
