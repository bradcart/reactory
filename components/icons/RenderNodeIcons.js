const Drag = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 507.98 507.9"
    width={width}
  >
    <path
      d="M509.55,251.55l-81.3-66.2a10.12,10.12,0,0,0-17.3,7.2v40.7H284v-127h40.7a10.17,10.17,0,0,0,7.2-17.3l-66-81.4a10,10,0,0,0-14.3,0l-66.2,81.3a10.12,10.12,0,0,0,7.2,17.3h40.7v127h-127v-40.7a10.17,10.17,0,0,0-17.3-7.2l-81.4,66a10,10,0,0,0,0,14.3l81.3,66.2a10.12,10.12,0,0,0,17.3-7.2v-40.7h127v127h-40.7a10.17,10.17,0,0,0-7.2,17.3l65.9,81.3a10,10,0,0,0,14.3,0l66.2-81.3a10.12,10.12,0,0,0-7.2-17.3h-40.7v-127h127v40.7a10.17,10.17,0,0,0,17.3,7.2l81.3-65.9A9.85,9.85,0,0,0,509.55,251.55Z"
      transform="translate(-4.55 -4.55)"
    />
  </svg>
);

export const DragIcon = ({ width }) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Drag width={width} />
  </div>
);

const ArrowUp = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42.43 42.21"
    width={width}
  >
    <rect x="19.21" y="2.21" width="4" height="40" />
    <rect
      x="29.31"
      y="-2.08"
      width="4"
      height="30"
      transform="translate(-0.87 25.02) rotate(-45)"
    />
    <rect
      x="-2.07"
      y="10.92"
      width="30"
      height="4"
      transform="translate(-6.26 12.02) rotate(-45)"
    />
  </svg>
);

export const ArrowUpIcon = ({ width }) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ArrowUp width={width} />
  </div>
);

const Delete = ({ width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378 496" width={width}>
    <path
      d="M259.85,2.55H122a16.37,16.37,0,0,0-16.09,16.34V57.55H18.31A16.64,16.64,0,0,0,1.94,73.93v69c0,8.83,7.53,15.57,16.37,15.57H29L51.5,483.27c.58,8.38,7.55,15.28,16,15.28h247c8.41,0,15.38-6.9,16-15.28l22.5-324.72h10.7c8.83,0,16.36-6.74,16.36-15.57v-69a16.64,16.64,0,0,0-16.37-16.38H275.94V18.89A16.37,16.37,0,0,0,259.85,2.55Zm-121.91,32h106v23h-106Zm161.55,432H82.39l-21.31-308H320.8Zm48.45-340h-314v-37h314Z"
      transform="translate(-1.94 -2.55)"
    />
    <rect x="215" y="210" width="32" height="195" />
    <rect x="131" y="210" width="32" height="195" />
  </svg>
);

export const DeleteIcon = ({ width }) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Delete width={width} />
  </div>
);
