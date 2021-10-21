export const colors = {
  primary: "#fb09bb",
  secondary: "#03ce54",
  tertiary: "#a314fc",
  variantBlue: "#3d26eb",
  placeholder: "#666666", // for placeholder
  bgPrimary: "#282327",
  bgSecondary: "#2F2F2F",
  bgTertiary: "#454545",
  black: "#000000",
  low: "#6ab04c",
  mid: "#f9ca24",
  error: "#eb4d4b",
  blue: "#c7ecee",
  textColorPrimary: "#F7F7F7",
  textColorSecondary: "#b3b3b3",
  border: "#2c2c2c",
};

export const margin = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
};

export const padding = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
};

export const flexCenterBasis = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const borderRadius = {
  primary: 8,
};

export const smallVerticalMargin = {
  marginVertical: margin?.small,
};

export const mediumVerticalMargin = {
  marginVertical: margin?.medium,
};

export const largeVerticalMargin = {
  marginVertical: margin?.large,
};

export const smallVerticalPadding = {
  paddingVertical: padding?.small,
};

export const mediumVerticalPadding = {
  paddingVertical: padding?.medium,
};

export const largeVerticalPadding = {
  paddingVertical: padding?.large,
};

export const smallHorizontalMargin = {
  marginHorizontal: margin?.small,
};

export const mediumHorizontalMargin = {
  marginHorizontal: margin?.medium,
};

export const largeHorizontalMargin = {
  marginHorizontal: margin?.large,
};

export const smallHorizontalPadding = {
  paddingHorizontal: padding?.small,
};

export const mediumHorizontalPadding = {
  paddingHorizontal: padding?.medium,
};

export const largeHorizontalPadding = {
  paddingHorizontal: padding?.large,
};

export const smallPadding = {
  padding: padding?.small,
};

export const mediumPadding = {
  padding: padding?.medium,
};

export const largePadding = {
  padding: padding?.large,
};

export const smallMargin = {
  margin: margin?.small,
};

export const mediumMargin = {
  margin: margin?.medium,
};

export const largeMargin = {
  margin: margin?.large,
};

export const smallMarginBottom = {
  marginBottom: margin?.small,
};

export const largeMarginBottom = {
  marginBottom: margin?.large,
};

export const xlMarginBottom = {
  marginBottom: margin?.xl,
};

export const smallMarginTop = {
  marginTop: margin?.small,
};

export const largeMarginTop = {
  marginTop: margin?.large,
};

export const xlMarginTop = {
  marginTop: margin?.xl,
};

export const primaryBackground = {
  backgroundColor: colors?.primary,
};

export const secondaryBackground = {
  backgroundColor: colors?.secondary,
};

export const appBackgroundColorPrimary = {
  backgroundColor: colors?.bgPrimary,
};

export const appBackgroundColorSecondary = {
  backgroundColor: colors?.bgSecondary,
};

export const textColorPrimary = {
  color: colors?.textColorPrimary,
};

export const textColorSecondary = {
  color: colors?.textColorSecondary,
};

export const textColorError = {
  color: colors?.error,
};

export const smallBorderRadius = {
  borderRadius: 8,
};

export const smallText = {
  fontSize: 10,
};

export const basicText = {
  ...textColorPrimary,
  fontSize: 12,
};

export const basicTextBold = {
  ...basicText,
  fontWeight: "bold",
};

export const secondaryText = {
  ...textColorSecondary,
  fontSize: 12,
};

export const mediumText = {
  ...textColorPrimary,
  fontSize: 16,
};

export const basicHeadline = {
  ...textColorPrimary,
  ...largeVerticalMargin,
  fontSize: 24,
  fontWeight: "bold",
};

export const errorText = {
  ...smallText,
  ...textColorError,
  alignSelf: "flex-start",
};

export const labelText = {
  ...smallText,
  color: "#fff",
  alignSelf: "flex-start",
  textTransform: "uppercase",
  fontWeight: "bold",
  marginBottom: 2,
  marginTop: 4,
};

export const fullWidth = {
  width: "100%",
};

export const selfFlexEnd = {
  alignSelf: "flex-end",
};

export const alignments = {
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
  selfAlignCenter: {
    alignSelf: "center",
  },
  selfAlignEnd: {
    alignSelf: "flex-end",
  },
  selfAlignStart: {
    alignSelf: "flex-start",
  },
};

export const textInputContainer = {
  ...smallMarginBottom,
  ...fullWidth,
};
