import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Feature = styled.article`
  padding: ${(props) => props.theme.indent};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const Header = styled.header`
  display: flex;
  gap: ${(props) => props.theme.indent};
  align-items: center;
`;

export const Image = styled(Img)`
  width: 52px;
  height: 52px;
  object-fit: contain;
`;

export const Owner = styled.span`
  padding: 2px 10px;
  margin-bottom: 4px;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;

export const Text = styled(P)`
  text-align: left;
`;
