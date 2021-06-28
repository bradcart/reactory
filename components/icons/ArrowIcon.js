const Icon = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 245 417"
    width={width}
    fill="#fff"
    opacity={0.9}
  >
    <polygon
      points="245 43 86 208 244 376 203 417 0 210 201 0 245 43"
      fill-rule="evenodd"
    />
  </svg>
);

export const ArrowIcon = ({ width, flipDirection }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transform: flipDirection ? "rotate(180deg)" : "none",
    }}
  >
    <Icon width={width} />
  </div>
);
