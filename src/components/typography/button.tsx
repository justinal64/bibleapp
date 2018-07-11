import * as React from "react";
import styled from "styled-components";
import {
  InvertedPrimaryButton,
  InvertedSecondaryButton,
  InvertedSuccessButton,
  InvertedWarningButton,
  InvertedDangerButton,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  WarningButton,
  DangerButton
} from "../utils/styling";

import { displayBlock, disabledButton } from "../utils/helpers";

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
  transition: all 0.3s ease-in-out;
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
  onClick?: Function;
}

class StyledButton extends React.Component<Props, object> {
  public render() {
    const {
      title,
      button,
      font,
      inverted,
      disabled,
      block,
      onClick
    } = this.props;

    return (
      <Button
        button={button}
        title={title}
        font={font}
        inverted={inverted}
        disabled={disabled}
        display={block ? 1 : 0} // better solution???
        onClick={onClick}
      >
        {title}
      </Button>
    );
  }
}

export default StyledButton;
