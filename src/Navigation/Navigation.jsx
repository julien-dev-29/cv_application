import "../styles/Navigation.css";

const Navigation = ({ navigation, setNavigation }) => {
  const generalClass = navigation === "general" ? "isSelected" : "";
  const formationClass = navigation === "formation" ? "isSelected" : "";
  const professionelClass = navigation === "professionel" ? "isSelected" : "";
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button
            className={generalClass}
            onClick={() => setNavigation("general")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-pen-icon lucide-user-pen"
            >
              <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
              <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              <circle cx="10" cy="7" r="4" />
            </svg>
          </button>
        </li>
        <li>
          <button
            className={formationClass}
            onClick={() => setNavigation("formation")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </button>
        </li>
        <li>
          <button
            className={professionelClass}
            onClick={() => setNavigation("professionel")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-icon lucide-briefcase"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
