import * as React from "react";
import styled from "styled-components";

const displayBlock = `
  display: block;
  width: 100%;
`;

export const disabledButton = `
opacity: .65;
pointer-events: none;
`;

const PrimaryButton = `
color: #fff;
background-color: #20a8d8;
border-color: #20a8d8;
:hover {
  background-color: #1b8eb7;
  border-color: #1985ac;
}
`;

const InvertedPrimaryButton = `
color: #20a8d8;
border-color: #20a8d8;
:hover {
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
}
`;

const SecondaryButton = `
color: #111;
background-color: #c0cadd;
border-color: #c0cadd;
:hover {
  background-color: #a7b5d0;
  border-color: #9faecb;
}
`;

const InvertedSecondaryButton = `
color: #c0cadd;
border-color: #c0cadd;
:hover {
  color: #fff;
  background-color: #c0cadd;
  border-color: #c0cadd;
}
`;

const SuccessButton = `
color: #111;
background-color: #79c447;
border-color: #79c447;
:hover {
  background-color: #67ad38;
  border-color: #61a434;
}
`;

const InvertedSuccessButton = `
color: #79c447;
border-color: #79c447;
:hover {
  color: #fff;
  background-color: #79c447;
  border-color: #79c447;
}
`;

const WarningButton = `
color: #111;
background-color: #fabb3d;
border-color: #fabb3d;
:hover {
  background-color: #f9ae18;
  border-color: #f9aa0b;
}
`;

const InvertedWarningButton = `
color: #fabb3d;
border-color: #fabb3d;
:hover {
  color: #fff;
  background-color: #fabb3d;
  border-color: #fabb3d;
}
`;

const DangerButton = `
color: #fff;
background-color: #ff5454;
border-color: #ff5454;
:hover {
  background-color: #ff2e2e;
  border-color: #ff2121;
}
`;

const InvertedDangerButton = `
color: tomato;
border-color: tomato;
:hover {
  color: #fff;
  background-color: #ff2e2e;
  border-color: #ff2121;
}
`;

const invertedButtonPicker = (button: string) => {
  if (button === "Primary") {
    return InvertedPrimaryButton;
  } else if (button === "Secondary") {
    return InvertedSecondaryButton;
  } else if (button === "Success") {
    return InvertedSuccessButton;
  } else if (button === "Warning") {
    return InvertedWarningButton;
  } else if (button === "Danger") {
    return InvertedDangerButton;
  } else {
    return InvertedPrimaryButton;
  }
};

const buttonPicker = (button: string) => {
  if (button === "Primary") {
    return PrimaryButton;
  } else if (button === "Secondary") {
    return SecondaryButton;
  } else if (button === "Success") {
    return SuccessButton;
  } else if (button === "Warning") {
    return WarningButton;
  } else if (button === "Danger") {
    return DangerButton;
  } else {
    return PrimaryButton;
  }
};

const themePicker = (inverted: boolean, button: string) => {
  if (inverted) {
    return invertedButtonPicker(button);
  } else {
    return buttonPicker(button);
  }
};

const Button = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
  background-color: transparent;
  font-size: ${(props: any) => (props.font ? props.font : ".75")}rem;
  ${(props: any) => (props.display ? displayBlock : "display: inline-block")};
  ${(props: any) => themePicker(props.inverted, props.button)};
  ${(props: any) => (props.disabled ? disabledButton : "")};
`;

export interface Props {
  title: string;
  icon?: string;
  button?: string;
  font?: number;
  inverted?: boolean;
  disabled?: boolean;
  block?: boolean;
}

class StyledButton extends React.Component<Props, object> {
  public render() {
    const { title, button, font, inverted, disabled, block } = this.props;

    return (
      <Button
        button={button}
        title={title}
        font={font}
        inverted={inverted}
        disabled={disabled}
        display={block ? 1 : 0} // better solution???
      >
        {title}
      </Button>
    );
  }
}

export default StyledButton;
