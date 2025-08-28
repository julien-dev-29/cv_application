const FormPractical = ({
  isEdit,
  setIsEdit,
  handleSubmit,
  index,
  experiences,
  setExperiences,
}) => {
  var title = isEdit ? (
    <h2>Editer {experiences[index].companyName}</h2>
  ) : (
    <h2>Ajouter une expérience professionnelles</h2>
  );

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
      <form id="pratical-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="companyName">
            Entreprise
            <input
              required
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
              required
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
            Poste occupé
            <input
              required
              type="text"
              id="positionTitle"
              name="positionTitle"
              defaultValue={(isEdit && experiences[index]?.positionTitle) || ""}
              onChange={(e) => handleChange("positionTitle", e.target.value)}
            />
          </label>

          <label htmlFor="dateFrom">
            Date de début
            <input
              required
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
              required
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
      {isEdit && (
        <button
          onClick={() => {
            setIsEdit(false);
            /**
             * @type {HTMLFormElement}
             */
            const form = document.querySelector("#pratical-form");
            form.reset();
          }}
        >
          Done!
        </button>
      )}
    </div>
  );
};

export { FormPractical };
