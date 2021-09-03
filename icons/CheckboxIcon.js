const Icon = ({ width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.44 41.44" fill="#fff">
    <path
      d="M1026.65,320.38h41.44v41.45h-41.44V320.38Zm19,1.61H1049v3.33h-3.33V322Zm17.53,17.45h3.33v3.33h-3.33v-3.33ZM1045.7,357H1049v3.33h-3.33V357Zm-17.65-17.58h3.33v3.33h-3.33v-3.33Zm1.32-16.3h0a8,8,0,0,1,11.28,0l3.77,3.78h5.78l3.77-3.78a8,8,0,0,1,11.28,0h0a8,8,0,0,1,0,11.28l-3.7,3.71v5.93l3.71,3.71a8,8,0,0,1,0,11.28h0a8,8,0,0,1-11.29,0l-3.74-3.74h-5.83l-3.75,3.75a8,8,0,0,1-11.28,0h0a8,8,0,0,1,0-11.29l3.81-3.81v-5.72l-3.81-3.81a8,8,0,0,1,0-11.29Z"
      transform="translate(-1026.65 -320.38)"
      fill="#fff"
      fill-rule="evenodd"
    />
  </svg>
);

export const CheckboxIcon = ({ width }) => (
  <div style={{ width: "15%", textAlign: "center" }}>
    <Icon width={width} />
  </div>
);
