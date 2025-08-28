const EducForm = ({
  handleSubmit,
  isEdit,
  setIsEdit,
  educationals,
  setEducationals,
  index,
}) => {
  var title = isEdit ? <h2>Editer</h2> : <h2>Ajouter une formation</h2>;

  /**
   * Quit the edit mode
   */
  function handleIsEdit() {
    setIsEdit(false);
    /**
     * @type {HTMLFormElement}
     */
    const form = document.querySelector("#educ-form");
    form.reset();
  }

  const handleChange = (field, value) => {
    if (isEdit) {
      setEducationals((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    }
  };

  return (
    <div>
      {title}
      <form id="educ-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">
            Titre
            <input
              required
              type="text"
              id="title"
              defaultValue={isEdit ? educationals[index]?.title || "" : ""}
              onChange={(e) => handleChange("title", e.target.value)}
              name="title"
            />
          </label>
          <label htmlFor="date">
            Date
            <input
              required
              type="date"
              id="date"
              defaultValue={isEdit ? educationals[index]?.date || "" : ""}
              onChange={(e) => handleChange("date", e.target.value)}
              name="date"
            />
          </label>
          <label htmlFor="school">
            Lieu
            <input
              required
              type="text"
              id="school"
              defaultValue={isEdit ? educationals[index]?.school || "" : ""}
              onChange={(e) => handleChange("school", e.target.value)}
              name="school"
            />
          </label>
        </div>
        {!isEdit && <button type="submit">Ajouter</button>}
      </form>
      {isEdit && <button onClick={handleIsEdit}>Done!</button>}
    </div>
  );
};

export { EducForm };
