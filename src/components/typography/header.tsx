import * as React from "react";
import styled from "styled-components";
import { getFontSize } from "../utils/helpers";

export interface Props {
  font?: number; // ? = optional
  title: string; // no ? means required
  subtitle?: string;
  codetext?: string;
}

const Title = styled.span`
 ${getFontSize};
  /* font-size: ${(props: any) => (props.font ? props.font : ".75")}rem; */
`;
// const SubTitle = styled.span`
//   ${getFontSize};
//   padding-left: 0.25rem;
// `;
// const Code = styled.span`
//   ${getFontSize};
//   padding-left: 0.25rem;
//   color: red;
// `;

const addTitle = (title: string, font: any) => {
  if (title) {
    return <Title>{title}</Title>;
  }
  return 0;
};

// const addSubTitle = (subtitle: any, font: any) => {
//   if (subtitle) {
//     return <SubTitle>{subtitle}</SubTitle>;
//   }
//   return 0;
// };

// const addCode = (codetext: any, font: any) => {
//   if (codetext) {
//     return <Code>{codetext}</Code>;
//   }
//   return 0;
// };

class Header extends React.Component<Props, object> {
  public render() {
    const { font, title } = this.props;
    {
      /* subtitle, codetext */
    }
    return (
      <div className="header">
        {addTitle(title, font)}
        {/* {addSubTitle(subtitle, font)} */}
        {/* {addCode(codetext, font)} */}
      </div>
    );
  }
}

export default Header;
