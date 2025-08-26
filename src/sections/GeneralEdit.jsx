import { FormUser } from "../components/FormUser";
import "../styles/General.css";
const GeneralEdit = ({ user, setUser }) => {
  return (
    <div className="general">
      <FormUser user={user} setUser={setUser} />
    </div>
  );
};

export { GeneralEdit };
