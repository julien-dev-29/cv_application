const FormPractical = ({ setIsOpen, experiences, setExperiences }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setExperiences([
      ...experiences,
      {
        companyName: data.get("companyName"),
        positionTitle: data.get("positionTitle"),
        responsabilities: data.get("responsabilities"),
        dateFrom: data.get("dateFrom"),
        dateUntil: data.get("dateUntil"),
      },
    ]);
    setIsOpen(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="companyName" />
        <input type="text" name="positionTitle" />
        <input type="text" name="responsabilities" />
        <input type="date" name="dateFrom" />
        <input type="date" name="dateUntil" />
        <button type="submit">Submit</button>
        <button className="btn-error" onClick={() => setIsOpen(false)}>Annuler</button>
      </form>
    </div>
  );
};

export { FormPractical };
