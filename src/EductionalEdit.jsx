const EductionalEdit = ({ educationals, setEducationals }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setEducationals([
      ...educationals,
      {
        title: data.get("title"),
        school: data.get("school"),
        date: data.get("date"),
      },
    ]);
  }
  return (
    <div>
      <h1>Ajouter une formation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="date" name="date" />
        <input type="text" name="school" />
        <button type="submit">Submit</button>
        <button className="btn-error">Annuler</button>
      </form>
    </div>
  );
};

export { EductionalEdit };
