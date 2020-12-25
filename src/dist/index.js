function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/styles');

(function (Colors) {
  Colors["brandPrimary"] = "brandPrimary";
  Colors["gray400"] = "gray400";
  Colors["gray300"] = "gray300";
  Colors["gray200"] = "gray200";
  Colors["customBlack"] = "customBlack";
  Colors["medium"] = "medium";
  Colors["redLight"] = "redLight";
  Colors["customRed"] = "customRed";
})(exports.Colors || (exports.Colors = {}));

var colors = {
  brandPrimary: {
    main: '#F57C00',
    contrastText: 'white'
  },
  gray400: {
    main: '#EAECEF',
    contrastText: '#7F8285'
  },
  gray300: {
    main: '#F1F2F4',
    contrastText: '#7F8285'
  },
  gray200: {
    main: '#FBFBFD',
    contrastText: '#7F8285'
  },
  customBlack: {
    main: '#191919'
  },
  medium: {
    main: '#7F8285'
  },
  redLight: {
    main: '#FCE6E6',
    contrastText: '#F57C00'
  },
  customRed: {
    main: '#EB5757'
  }
};

var useStyles = styles.makeStyles(function () {
  return {
    root: function root(props) {
      var _colors$props$theme$m, _colors$props$theme$c, _colors$props$theme$c2, _colors$props$theme$c3, _colors$props$theme$m2, _colors$props$theme$m3;

      return {
        backgroundColor: (_colors$props$theme$m = colors[props.theme].main) != null ? _colors$props$theme$m : colors.buttonPrimary.main,
        background: 'white',
        height: '40px',
        fontSize: '14x',
        lineHeight: '14px',
        borderRadius: '66px',
        color: (_colors$props$theme$c = colors[props.theme].contrastText) != null ? _colors$props$theme$c : colors.buttonPrimary.contrastText,
        textTransform: 'none',
        boxShadow: 'none',
        '& svg': {
          '& path': {
            fill: (_colors$props$theme$c2 = colors[props.theme].contrastText) != null ? _colors$props$theme$c2 : colors.buttonPrimary.contrastText
          }
        },
        '&:hover': {
          backgroundColor: (_colors$props$theme$c3 = colors[props.theme].contrastText) != null ? _colors$props$theme$c3 : colors.buttonPrimary.contrastText,
          color: (_colors$props$theme$m2 = colors[props.theme].main) != null ? _colors$props$theme$m2 : colors.buttonPrimary.main,
          '& svg': {
            '& path': {
              fill: (_colors$props$theme$m3 = colors[props.theme].main) != null ? _colors$props$theme$m3 : colors.buttonPrimary.main
            }
          }
        },
        '&:active': {
          backgroundColor: colors.brandPrimary.main,
          boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.1)'
        }
      };
    },
    sizeSmall: {
      height: '32px !important',
      fontSize: '12px !important',
      lineHeight: '14px !important'
    },
    sizeLarge: {
      height: '48px !important',
      fontSize: '12px !important',
      lineHeight: '14px !important'
    },
    startIcon: {}
  };
});

(function (ButtonSizes) {
  ButtonSizes["sm"] = "small";
  ButtonSizes["lg"] = "large";
})(exports.ButtonSizes || (exports.ButtonSizes = {}));

(function (ButtonThemes) {
  ButtonThemes["brandPrimary"] = "brandPrimary";
  ButtonThemes["gray400"] = "gray400";
  ButtonThemes["redLight"] = "redLight";
})(exports.ButtonThemes || (exports.ButtonThemes = {}));

var Button = function Button(props) {
  var size = props.size,
      startIcon = props.startIcon,
      endIcon = props.endIcon,
      disabled = props.disabled,
      fullWidth = props.fullWidth,
      className = props.className;
  var classes = useStyles(props);
  return React.createElement(core.Button, Object.assign({}, props, {
    size: size,
    fullWidth: fullWidth,
    startIcon: startIcon,
    endIcon: endIcon,
    disabled: disabled,
    variant: 'contained',
    classes: {
      sizeSmall: classes.sizeSmall,
      sizeLarge: classes.sizeLarge,
      root: classes.root,
      startIcon: classes.startIcon
    },
    className: className
  }), props.children);
};

Button.defaultProps = {
  disabled: false,
  fullWidth: true,
  theme: 'brandPrimary'
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var CloseInCircleIcon = function CloseInCircleIcon() {
  return React__default.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.99935 15.3334C12.0494 15.3334 15.3327 12.0502 15.3327 8.00008C15.3327 3.94999 12.0494 0.666748 7.99935 0.666748C3.94926 0.666748 0.666016 3.94999 0.666016 8.00008C0.666016 12.0502 3.94926 15.3334 7.99935 15.3334ZM7.99935 13.3334C10.9449 13.3334 13.3327 10.9456 13.3327 8.00008C13.3327 5.05456 10.9449 2.66675 7.99935 2.66675C5.05383 2.66675 2.66602 5.05456 2.66602 8.00008C2.66602 10.9456 5.05383 13.3334 7.99935 13.3334ZM9.52795 5.52868C9.78829 5.26833 10.2104 5.26833 10.4708 5.52868C10.7311 5.78903 10.7311 6.21114 10.4708 6.47149L8.94216 8.00008L10.4708 9.52868C10.7311 9.78903 10.7311 10.2111 10.4708 10.4715C10.2104 10.7318 9.78829 10.7318 9.52795 10.4715L7.99935 8.94289L6.47075 10.4715C6.2104 10.7318 5.78829 10.7318 5.52794 10.4715C5.2676 10.2111 5.2676 9.78903 5.52794 9.52868L7.05654 8.00008L5.52794 6.47149C5.2676 6.21114 5.2676 5.78903 5.52794 5.52868C5.78829 5.26833 6.2104 5.26833 6.47075 5.52868L7.99935 7.05727L9.52795 5.52868Z',
    fill: '#EB5757'
  }));
};

var useStyles$1 = styles.makeStyles(function () {
  return {
    root: function root(props) {
      return {
        height: '32px',
        display: props.open ? 'flex' : 'none',
        alignItems: 'center',
        background: colors.redLight.main,
        borderRadius: '0 0 12px 12px',
        boxShadow: '0px 0px 1px rgba(10, 31, 68, 0.08), 0px 3px 4px rgba(10, 31, 68, 0.1)',
        paddingLeft: '18px'
      };
    },
    content: {
      fontSize: '12px',
      lineHeight: '14px',
      color: colors.customRed.main,
      paddingLeft: '10px'
    }
  };
});

var ValidationError = function ValidationError(props) {
  var classes = useStyles$1(props);
  return React.createElement("div", {
    className: classes.root
  }, React.createElement("div", null, React.createElement(CloseInCircleIcon, null)), React.createElement("div", null, React.createElement(core.Typography, {
    className: classes.content
  }, props.children)));
};

ValidationError.defaultProps = {
  open: false
};

var useStyles$2 = styles.makeStyles(function () {
  return {
    root: function root(props) {
      return {
        backgroundColor: 'white',
        borderRadius: props.error ? '12px 12px 0 0' : '12px',
        background: 'white',
        '& .MuiFormLabel-root.Mui-focused': {
          border: 'none',
          color: colors.medium.main
        },
        '& .MuiFilledInput-underline': {
          background: 'white'
        },
        '& .Mui-focused': {
          border: "1px solid " + colors.brandPrimary.main,
          background: 'white'
        }
      };
    },
    inputRoot: function inputRoot(props) {
      return {
        background: 'white',
        border: (props.error ? 1.5 : 1) + "px solid " + (props.error ? colors.customRed.main : colors.gray400.main),
        borderRadius: props.error ? '12px 12px 0 0' : '12px'
      };
    },
    focusedInput: {
      background: 'white'
    },
    underline: {
      '&::before': {
        display: 'none'
      },
      '&::after': {
        display: 'none'
      }
    }
  };
});

(function (InputTypes) {
  InputTypes["password"] = "password";
  InputTypes["email"] = "email";
  InputTypes["text"] = "text";
})(exports.InputTypes || (exports.InputTypes = {}));

var Input = function Input(props) {
  var error = props.error,
      inputProps = props.inputProps;
  var classes = useStyles$2(props);
  return React.createElement("div", null, React.createElement(core.TextField, Object.assign({}, props, {
    classes: {
      root: classes.root
    },
    variant: 'filled',
    fullWidth: true,
    error: error,
    InputProps: _extends({}, inputProps, {
      classes: {
        root: classes.inputRoot,
        underline: classes.underline,
        focused: classes.focusedInput
      },
      autoComplete: 'off'
    })
  })), React.createElement(ValidationError, {
    open: error
  }, "Alert Message"));
};

Input.defaultProps = {
  error: false
};

(function (HeadingSizes) {
  HeadingSizes["h1"] = "h1";
  HeadingSizes["h2"] = "h2";
  HeadingSizes["h3"] = "h3";
  HeadingSizes["h4"] = "h4";
  HeadingSizes["h5"] = "h5";
})(exports.HeadingSizes || (exports.HeadingSizes = {}));

(function (HeadingWeights) {
  HeadingWeights[HeadingWeights["bold"] = 600] = "bold";
  HeadingWeights[HeadingWeights["normal"] = 500] = "normal";
  HeadingWeights[HeadingWeights["medium"] = 400] = "medium";
})(exports.HeadingWeights || (exports.HeadingWeights = {}));

var useStyles$3 = styles.makeStyles({
  root: function root(props) {
    return {
      fontWeight: props.weight,
      color: props.color ? colors[props.color].main : 'black'
    };
  }
});

var Heading = function Heading(props) {
  var size = props.size,
      children = props.children;
  var classes = useStyles$3(props);
  return React.createElement(core.Typography, {
    variant: size,
    className: classes.root
  }, children);
};

Heading.defaultProps = {
  size: exports.HeadingSizes.h2,
  color: 'customBlack'
};

var _TextSizesStyles;

(function (TextSizes) {
  TextSizes["textSm"] = "text_small";
  TextSizes["textMd"] = "text_md";
  TextSizes["textLg"] = "text_lg";
})(exports.TextSizes || (exports.TextSizes = {}));

(function (TextWeights) {
  TextWeights[TextWeights["bold"] = 600] = "bold";
  TextWeights[TextWeights["normal"] = 500] = "normal";
  TextWeights[TextWeights["medium"] = 400] = "medium";
})(exports.TextWeights || (exports.TextWeights = {}));

var TextSizesStyles = (_TextSizesStyles = {}, _TextSizesStyles[exports.TextSizes.textLg] = {
  fontSize: 18,
  lineHeight: 28
}, _TextSizesStyles[exports.TextSizes.textMd] = {
  fontSize: 14,
  lineHeight: 22
}, _TextSizesStyles[exports.TextSizes.textSm] = {
  fontSize: 13,
  lineHeight: 20
}, _TextSizesStyles);
var useStyles$4 = styles.makeStyles({
  root: function root(props) {
    return {
      fontSize: (props.size ? TextSizesStyles[props.size].fontSize : TextSizesStyles[exports.TextSizes.textMd]) + "px",
      color: props.color ? colors[props.color].main : 'black'
    };
  }
});

var Text = function Text(props) {
  var children = props.children;
  var classes = useStyles$4(props);
  return React.createElement(core.Typography, {
    className: classes.root
  }, children);
};

Text.defaultProps = {
  size: exports.TextSizes.textMd,
  color: 'customBlack'
};

exports.Button = Button;
exports.Heading = Heading;
exports.Input = Input;
exports.Text = Text;
//# sourceMappingURL=index.js.map
