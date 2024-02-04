import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {box-sizing: border-box;-webkit-box-sizing: border-box;line-height: normal; }
  *, html, body{font-family: 'Muli','Roboto', 'Microsoft YaHei', 'Microsoft JhengHei';outline: none; touch-action: manipulation;font-feature-settings:"liga" 0;-webkit-font-smoothing: antialiased;}
  html {-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-ms-overflow-style: scrollbar;}
  body {height: inherit;margin: 0;font-size: 1rem;font-weight: 400;text-align: left;}

  /* A */
  a{
    text-shadow: none!important;
    transition: color .1s linear 0s,background-color .1s linear 0s,opacity .2s linear 0s!important;
    font-weight: 500;
  }
  a, a:active {color: inherit;}
  a, a:active, a:focus, a:hover, a:active, a:not([href]), a:not([href]):hover {text-decoration: none;}
  a, a:focus, a:hover, a:active {outline: 0!important;}


  /* box */
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {display: block;}
  [tabindex="-1"]:focus:not(:focus-visible) {outline: 0 !important;}

  /* text */
  hr {box-sizing: content-box;height: 0;overflow: visible;margin-top: 1rem;margin-bottom: 1rem;border: 0;border-top: 1px solid rgba(105,105,105, .1);}
  h1, h2, h3, h4, h5, h6 {margin-top: 0;margin-bottom: 0.5rem;}
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {margin-bottom: 0;font-weight: 500;}
  h1, .h1 {font-size: 2.5rem;}
  h2, .h2 {font-size: 2rem;}
  h3, .h3 {font-size: 1.75rem;}
  h4, .h4 {font-size: 1.5rem;}
  h5, .h5 {font-size: 1.25rem;}
  h6, .h6 {font-size: 1rem;}

  p {margin-top: 0;margin-bottom: 0;}
  abbr[title], abbr[data-original-title] {text-decoration: underline;-webkit-text-decoration: underline dotted;text-decoration: underline dotted;cursor: help;border-bottom: 0;-webkit-text-decoration-skip-ink: none;text-decoration-skip-ink: none;}
  address {margin-bottom: 1rem;font-style: normal;line-height: inherit;}

  /* list */
  ul{list-style-type: none;margin: 0;padding: 0;}
  ol, ul, dl {margin-top: 0;margin-bottom: 0;}
  ol ol, ul ul, ol ul, ul ol {margin-bottom: 0;}
  dt {font-weight: 700;}
  dd {margin-bottom: .5rem;margin-left: 0;}

  /* code */
  blockquote {margin: 0 0 1rem;}
  b, strong {font-weight: bolder;}
  small {font-size: 80%;}
  small, .small {font-size: 80%;font-weight: 400;}
  sub, sup {position: relative;font-size: 75%;line-height: 0;vertical-align: baseline;}
  sub {bottom: -.25em;}
  sup {top: -.5em;}
  mark, .mark {padding: 0.2em;background-color: #fcf8e3;}
  code {font-size: 87.5%;color: #e83e8c;}
  kbd {padding: 0.2rem 0.4rem;font-size: 87.5%;color: #fff;background-color: #212529;border-radius: 0.2rem;}
  kbd kbd {padding: 0;font-size: 100%;font-weight: 700;}
  pre {margin-top: 0;margin-bottom: 1rem;overflow: auto;}
  pre {display: block;font-size: 87.5%;color: #212529;}
  pre, code, kbd, samp {font-size: 1em;}
  pre code {font-size: inherit;color: inherit;word-break: normal;}
  a > code {color: inherit;}

  /* image */
  figure {margin: 0 0 1rem;}
  img {vertical-align: middle;border-style: none;}
  svg {overflow: hidden;vertical-align: middle;}

  /*table*/
  table {border-collapse: collapse;}
  caption {padding-top: 0.75rem;padding-bottom: 0.75rem;color: #6c757d;text-align: left;caption-side: bottom;}
  th {text-align: inherit;}

  /* form */
  label {display: inline-block;margin-bottom: 0;}
  input, button, select, optgroup, textarea {margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;}
  button {border-radius: 0;background: none; border: none;}
  button:focus {outline: 1px dotted;outline: none;}
  button, input {overflow: visible;}
  button, select {text-transform: none;}
  select {word-wrap: normal;}
  button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;}
  button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {cursor: pointer;}
  button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {padding: 0;border-style: none;}
  input[type="radio"], input[type="checkbox"] {box-sizing: border-box;padding: 0;}
  input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"] {-webkit-appearance: listbox;}
  textarea {overflow: auto;resize: vertical;}
  fieldset {min-width: 0;padding: 0;margin: 0;border: 0;}
  legend {display: block;width: 100%;max-width: 100%;padding: 0;margin-bottom: .5rem;font-size: 1.5rem;line-height: inherit;color: inherit;white-space: normal;}
  progress {vertical-align: baseline;}
  [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {height: auto;}
  [type="search"] {outline-offset: -2px;-webkit-appearance: none;}
  [type="search"]::-webkit-search-decoration {-webkit-appearance: none;}
  ::-webkit-file-upload-button {font: inherit;-webkit-appearance: button;}
  output {display: inline-block;}
  summary {display: list-item;cursor: pointer;}
  template {display: none;}
  [hidden] {display: none !important;}
  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:active {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    transition: background-color 5000s ease-in-out 0s;
  }
  /* 修復 chrome auto輸入之後的樣式 */
  @-webkit-keyframes autofill { to {background: none;} }

  :root {
    /*noinspection CssUnresolvedCustomProperty*/
    --vh100: calc(var(--vh, 1vh) * 100);
  }
  *{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .navbar--fixed-top{
    position: static;
  }

`;


export default GlobalStyle;
