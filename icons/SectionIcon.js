const Icon = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88.71 68.14"
    width={width}
  >
    <path d="M0,42.31,24.93,68.14H88.71V24.93L62.9,0H0ZM84.3,24.93H27.05L5.12,3H61.68Zm-56.37,3H85.71V65.14H27.93ZM3,41.1v-36L24.93,27.05V63.78Z" />
  </svg>
);

export const SectionIcon = ({ width }) => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <Icon width={width} />
  </div>
);
