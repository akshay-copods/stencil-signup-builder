enum Position {
  'TOP' = 'TOP',
  'BOTTOM' = 'BOTTOM',
}

enum SocialMediaButtonLayout {
  'EQUAL_SPLIT' = 'EQUAL_SPLIT',
  'ONE_PRIMARY' = 'ONE_PRIMARY',
}

enum FontFamily {
  Roboto = "'Roboto', sans-serif",
  OpenSans = 'Open Sans',
  Lato = 'Lato',
  Montserrat = 'Montserrat',
  Inter = "'Open Sans', sans-serif",
}

type InputLabelTheme = {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
};

type InputBoxTheme = {
  borderColor: string;
  borderSize: number;
  borderRadius: number;
  width: string;
};

type InputStateTheme = {
  backgroundColor: string;
  fontColor: string;
  fontSize: string;
  fontWeight: string;
  box: InputBoxTheme;
};

type ButtonStateTheme = {
  backgroundColor: string;
  borderRadius: number;
  fontColor: string;
  fontSize: string;
  fontWeight: string;
};

type Theme = {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  errorColor: string;
};

type SocialButtonTypes = { position: Position; layout: SocialMediaButtonLayout; styles: ButtonStates };

type SubmitButtonTypes = { styles: ButtonStates };

type ButtonStates = {
  defaultState: ButtonStateTheme;
  activeState: ButtonStateTheme;
  disabledState: ButtonStateTheme;
  hoverState: ButtonStateTheme;
};

type InputField = {
  label: InputLabelTheme;
  defaultState: InputStateTheme;
  activeState: InputStateTheme;
  disabledState: InputStateTheme;
  errorState: InputStateTheme;
  hoverState: InputStateTheme;
  focusState: InputStateTheme;
};

type TextTypography = {
  fontSize: string;
  Bold: boolean;
};

type LinkTypography = {
  fontSize: string;
  Bold: boolean;
  style: string;
};

type Typography = {
  fontFamily: FontFamily;
  title: TextTypography;
  subTitle: TextTypography;
  links: LinkTypography;
  normalText: TextTypography;
};
type SocialLoginButton = {
  icon: string;
  name: string;
};
type Approval = {
  name: string;
  link: string;
};
enum LoginMethods {
  MAGIC_LINK = 'magic_link',
  MAGIC_CODE = 'magic_code',
  PASSWORD = 'password',
}
type LoginType = {
  socialLoginTypes: SocialLoginButton[];
  loginMethods: LoginMethods;
  approvals: Approval[];
};
export type SignupBuilderProps = {
  theme: Theme;
  socialButton: SocialButtonTypes;
  submitButton: SubmitButtonTypes;
  inputField: InputField;
  typography: Typography;
  loginTypes: LoginType;
};
