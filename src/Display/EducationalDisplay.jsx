import {formatDate} from '../utils'

const EducationalDisplay = ({ educationals }) => {
  return (
    <div className="educational-display">
      <h2>
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
        FORMATION
      </h2>
      <ul>
        {educationals.map((experience, index) => (
          <li key={index}>
            <div className="d-educational-title">
              <h3>{experience.school}</h3>
              <p>{formatDate(experience.date)}</p>
            </div>
            <p>{experience.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { EducationalDisplay };
