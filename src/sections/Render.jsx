import styled from "styled-components";
const StyledRender = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #fcfcfc;
  padding: 32px;
`;
export default function Render({ name, email, tel, entries }) {
  return (
    <StyledRender>
      <RenderPersonal name={name} email={email} tel={tel} />
      <RenderEducational entries={entries} />
    </StyledRender>
  );
}

function RenderPersonal({ name, email, tel }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{tel}</p>
    </div>
  );
}

function RenderEducational({ entries }) {
  return (
    <div>
      {entries?.map((e) => (
        <div key={e.id}>
          <p>{e.school}</p>
          <p>{e.degree}</p>
          <p>{e.startDate}</p>
          <p>{e.endDate}</p>
        </div>
      ))}
    </div>
  );
}
