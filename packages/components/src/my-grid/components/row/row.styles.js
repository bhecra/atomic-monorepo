import { css } from 'atomico';

const Styles = css`
  .row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: var(--gutter-compensation, -0.5rem);
    margin-left: var(--gutter-compensation, -0.5rem);
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  @media only screen and (width < 768px) {
    .row.reverse {
      flex-direction: column-reverse;
    }
  }
`;

export default Styles;
