const FormPractical = ({
  isEdit,
  setIsEdit,
  handleSubmit,
  index,
  experiences,
  setExperiences,
}) => {
  var title = isEdit ? <h2>Editer</h2> : <h2>Ajouter une expérience</h2>;
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
            />
          </label>

          <label htmlFor="positionTitle">
            Niveau
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              defaultValue={(isEdit && experiences[index]?.positionTitle) || ""}
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
            />
          </label>

          <label htmlFor="dateFrom">
            Date de début
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              defaultValue={(isEdit && experiences[index]?.dateFrom) || ""}
            />
          </label>

          <label htmlFor="dateUntil">
            Date de fin
            <input
              type="date"
              id="dateUntil"
              name="dateUntil"
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
