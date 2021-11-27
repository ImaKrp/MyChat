import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  *:focus {
    outline-style: none;
  }

  html {
    --red: #e50914;

    --white: #f1f1f2eb;
    --white80: #f1f1f2e0;
    --white60: #f1f1f2a1;
    --white50: #f1f1f273;

    -placeholder: #f1f1f26e;
    --whiter-border: #f1f1f21f;

    --dim-gray: #090E11;
    --dark-gray: #262D31;
    --header-gray: #2A2F32;
    --footer-gray: #1E2428;
    --gray: #818587;
    --light-gray: #a6a8ab;

   --chat-bg: #0D1418;

    --detail-gray: #f1f1f21c;
    --darker-detail-gray: #f1f1f20A;

    --input: #33383B;

    --tag: #364147;

    --header-icon: #A9AAAD;
    --icon: #828689;

    --highlight: #00a7af;

    --incoming-message: #262D31;
    --outgoing-message: #244156;

    --error: #CF6679;

    font-size: 62.5%;

    scroll-behavior: smooth;
  }

  

  body {
    font-family: 'Noto Sans', sans-serif;
    overflow-x: hidden;
    caret-color: #f1f1f2e0;  
  }

  ::placeholder {
  color: #f1f1f26e;
  opacity: 1;
  }

  input,
  a,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  textarea,
  select,
  p,
  span {
    font-family: 'Noto Sans', sans-serif;
  }

  .sr-only {
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    cursor: default;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #f1f1f24d;
    transition: background 0.3s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f1f1f26e;
  }
`;
