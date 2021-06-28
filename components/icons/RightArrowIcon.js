const Icon = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 245 417"
    width={width}
    fill="#fff"
    opacity={0.9}
  >
    <polygon
      points="44 0 245 210 42 417 1 376 159 208 0 43 44 0"
      fill-rule="evenodd"
    />
  </svg>
);

export const RightArrowIcon = ({ width }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Icon width={width} />
  </div>
);
