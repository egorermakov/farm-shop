import styled, { css } from "styled-components";

const gridList = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) =>
    props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};

  li {
    display: flex;
    align-items: stretch;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
