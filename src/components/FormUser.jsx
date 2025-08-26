import "../styles/Modal.css";

const FormUser = ({ setUser, user }) => {
  return (
    <div className="modal">
      <h2>Editer les informations</h2>
      <form>
        <input
          type="text"
          name="lastname"
          defaultValue={user.lastname}
          placeholder="Nom"
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        />
        <input
          type="text"
          name="firstname"
          defaultValue={user.firstname}
          placeholder="Prénom"
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
        />
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="tel"
          name="tel"
          defaultValue={user.tel}
          placeholder="Téléphone"
          onChange={(e) => setUser({ ...user, tel: e.target.value })}
        />
      </form>
    </div>
  );
};

export { FormUser };
