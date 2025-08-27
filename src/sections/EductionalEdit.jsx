import { useState } from "react";
import { EducForm } from "../components/EducForm";

const EductionalEdit = ({ educationals, setEducationals }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  
  /**
   *
   * @param {Number} index
   */
  function handleDelete(index) {
    setEducationals(educationals.filter((exp, i) => i !== index));
  }

  /**
   *
   * @param {Number} index
   */
  function handleEdit(index) {
    setIsEdit(true);
    setIndex(index);
  }

  /**
   *
   * @param {PointerEvent} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setEducationals([
      ...educationals,
      {
        title: data.get("title"),
        school: data.get("school"),
        date: data.get("date"),
        content: data.get("content"),
      },
    ]);
    e.target.reset();
  }
  return (
    <div className="educational">
      <h2>Liste des formations</h2>
      <table>
        <thead>
          <tr>
            <td>Titre</td>
            <td>Lieu</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {educationals.map((exp, index) => (
            <tr key={index}>
              <td>{exp.title}</td>
              <td>{exp.school}</td>
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
      <EducForm
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        educationals={educationals}
        setEducationals={setEducationals}
        index={index}
      />
    </div>
  );
};

export { EductionalEdit };
