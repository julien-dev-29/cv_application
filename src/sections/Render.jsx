import styled from "styled-components";
import { Mail, MapPinCheckInside, Phone } from "lucide-react";
const StyledRender = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #fcfcfc;
  padding: 32px;
`;
export default function Render({
  personal,
  educationalEntries,
  practicalEntries,
}) {
  return (
    <StyledRender>
      <RenderPersonal personal={personal} />
      <RenderEducational entries={educationalEntries} />
      <RenderPractical entries={practicalEntries} />
    </StyledRender>
  );
}

function RenderPersonal({ personal }) {
  if (!personal) return;
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
        }}
      >
        {personal.name}
      </div>
      <Flex2B justifyContent="start" marginTop="16px" gap="12px">
        {personal.email && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Mail size={16} />
            {personal.email}
          </div>
        )}

        {personal.tel && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Phone size={16} />
            {personal.tel}
          </div>
        )}

        {personal.location && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MapPinCheckInside size={16} />
            {personal.location}
          </div>
        )}
      </Flex2B>
    </div>
  );
}

function RenderEducational({ entries }) {
  if (entries.length === 0) return;

  return (
    <div
      style={{
        marginTop: "16px",
      }}
    >
      <h3>Education</h3>
      <hr />
      {entries?.map((e) => (
        <EducationalEntryItem key={e.id} entry={e} />
      ))}
    </div>
  );
}

function EducationalEntryItem({ entry }) {
  if (!entry) return;
  return (
    <>
      <Flex2B justifyContent="space-between" marginTop="12px">
        <Flex2B>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            {entry.degree},
          </div>
          <i>{entry.school}</i>
        </Flex2B>
        <Flex2B>
          <p>{entry.startDate}</p>
          <p>{entry.endDate}</p>
        </Flex2B>
      </Flex2B>
      <Flex2B justifyContent="end" marginTop="8px">
        {entry.location}
      </Flex2B>
    </>
  );
}

function RenderPractical({ entries }) {
  if (entries.length === 0) return;
  return (
    <>
      <h3>Professional Experience</h3>
      <hr />
      {entries?.map((e) => (
        <PracticalEntryItem key={e.id} entry={e} />
      ))}
    </>
  );
}

function PracticalEntryItem({ entry }) {
  return (
    <>
      <Flex2B justifyContent="space-between" marginTop="12px">
        <Flex2B>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            {entry.jobTitle},
          </div>
          <i>{entry.employer}</i>
        </Flex2B>
        <Flex2B>
          <p>{entry.startDate}</p>
          <p>{entry.endDate}</p>
        </Flex2B>
      </Flex2B>
      <Flex2B justifyContent="end" marginTop="8px">
        {entry.location}
      </Flex2B>
    </>
  );
}

function Flex2B({
  children,
  direction,
  justifyContent,
  marginTop,
  gap,
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction ?? "row",
        justifyContent: justifyContent ?? "center",
        alignItems: "center",
        marginTop: marginTop ?? "0px",
        gap: gap ?? "8px",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
