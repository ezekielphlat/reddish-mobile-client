import styled, { css } from "styled-components/native";
type StyledTextTypes = {
  fontSize?: string;
  centered?: any;
  light?: any;
};

export const StyledText = styled.Text<StyledTextTypes>`
  font-family: NunitoSansRegular;
  font-size: ${(props) => props.fontSize};
  color: #3d3d3d;
  font-weight: 700;
  /* line-height: 23px; */
  /* padding: 5px 0; */

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.light &&
    css`
      color: #5b5b5b;
      font-weight: 200;
    `}
`;
