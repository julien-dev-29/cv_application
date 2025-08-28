const FormPractical = ({
  isEdit,
  setIsEdit,
  handleSubmit,
  index,
  experiences,
  setExperiences,
}) => {
  var title = isEdit ? <h2>Editer</h2> : <h2>Ajouter une expérience</h2>;

  /**
   *
   * @param {String} field
   * @param {*} value
   */
  const handleChange = (field, value) => {
    if (isEdit) {
      setExperiences((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    }
  };
  return (
    <div>
      {title}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="companyName">
            Entreprise
            <input
              type="text"
              id="companyName"
              name="companyName"
              defaultValue={(isEdit && experiences[index]?.companyName) || ""}
              onChange={(e) => handleChange("companyName", e.target.value)}
            />
          </label>

          <label htmlFor="companyLocation">
            Adresse
            <input
              type="text"
              id="companyLocation"
              name="companyLocation"
              defaultValue={
                (isEdit && experiences[index]?.companyLocation) || ""
              }
              onChange={(e) => handleChange("companyLocation", e.target.value)}
            />
          </label>

          <label htmlFor="positionTitle">
            Niveau
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              defaultValue={(isEdit && experiences[index]?.positionTitle) || ""}
              onChange={(e) => handleChange("positionTitle", e.target.value)}
            />
          </label>

          <label htmlFor="responsabilities">
            Responsabilité
            <input
              type="text"
              id="responsabilities"
              name="responsabilities"
              defaultValue={
                (isEdit && experiences[index]?.responsabilities) || ""
              }
              onChange={(e) => handleChange("positionTitle", e.target.value)}
            />
          </label>

          <label htmlFor="dateFrom">
            Date de début
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              defaultValue={(isEdit && experiences[index]?.dateFrom) || ""}
              onChange={(e) => handleChange("dateFrom", e.target.value)}
            />
          </label>

          <label htmlFor="dateUntil">
            Date de fin
            <input
              type="date"
              id="dateUntil"
              name="dateUntil"
              onChange={(e) => handleChange("dateUntil", e.target.value)}
              defaultValue={(isEdit && experiences[index]?.dateUntil) || ""}
            />
          </label>
        </div>

        {!isEdit && <button type="submit">Submit</button>}
      </form>
      {isEdit && <button onClick={() => setIsEdit(false)}>Done!</button>}
    </div>
  );
};

export { FormPractical };
