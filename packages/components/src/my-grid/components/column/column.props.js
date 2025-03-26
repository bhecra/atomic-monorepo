const sizes = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
};

const Props = {
  reverse: {
    type: Boolean,
    reflect: true,
  },
  xs: {
    type: String,
    reflect: true,
  },
  sm: {
    type: String,
    reflect: true,
  },
  md: {
    type: String,
    reflect: true,
  },
  lg: {
    type: String,
    reflect: true,
  },
  xl: {
    type: String,
    reflect: true,
  },
  offset: {
    type: Object,
    reflect: true,
    value: () => (sizes),
  },
  align: {
    type: Object,
    reflect: true,
    value: () => (sizes),
  },
  start: {
    type: Boolean,
    reflect: true,
  },
  center: {
    type: Boolean,
    reflect: true,
  },
  end: {
    type: Boolean,
    reflect: true,
  },
  top: {
    type: Boolean,
    reflect: true,
  },
  middle: {
    type: Boolean,
    reflect: true,
  },
  around: {
    type: Boolean,
    reflect: true,
  },
  between: {
    type: Boolean,
    reflect: true,
  },
  first: {
    type: Boolean,
    reflect: true,
  },
  last: {
    type: Boolean,
    reflect: true,
  },
  debug: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  debugIndex: {
    type: String,
    reflect: true,
    value: '',
  },
  bottom: {
    type: Boolean,
    reflect: true,
  },
};

export default Props;
