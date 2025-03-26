import { css } from 'atomico';

const Styles = css`
  :host {
    --gutter-width: 24px;
    --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
    --half-gutter-width: calc((var(--gutter-width) * 0.5));
  }
`;

export default Styles;
