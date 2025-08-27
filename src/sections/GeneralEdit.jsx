import "../styles/Edit.css";

const GeneralEdit = ({ user, setUser }) => {
  return (
    <div className="general">
      <h2>Editer les informations</h2>
      <form>
        <label htmlFor="lastname">
          Nom
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={user.lastname}
            placeholder="Nom"
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
        </label>

        <label htmlFor="firstname">
          Prénom
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={user.firstname}
            placeholder="Prénom"
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <label htmlFor="tel">
          Téléphone
          <input
            type="tel"
            id="tel"
            name="tel"
            defaultValue={user.tel}
            placeholder="Téléphone"
            onChange={(e) => setUser({ ...user, tel: e.target.value })}
          />
        </label>
      </form>
    </div>
  );
};

export { GeneralEdit };
