import { css } from 'atomico';

const Styles = css`
  .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
  }

  /* 320 -> 479 */
  @media only screen and (width <= 479px) {
    .container {
      margin-right: 16px;
      margin-left: 16px;
    }
  }

  /* 480 -> 767 */
  @media only screen and (width >= 480px) and (width <= 767px) {
    .container {
      margin-right: 16px;
      margin-left: 16px;
    }
  }

  /* 768 -> 1023 */
  @media only screen and (width >= 768px) and (width <= 1023px) {
    .container {
      margin-right: 16px;
      margin-left: 16px;
    }
  }

  /* 1024 -> 1363 */
  @media only screen and (width >= 1024px) and (width <= 1363px) {
    .container {
      margin-right: 16px;
      margin-left: 16px;
    }
  }

  /* Desde 1364px hasta el infinito */
  @media only screen and (width >= 1364px) {
    .container {
      width: 100%;
      max-width: 1332px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export default Styles;
