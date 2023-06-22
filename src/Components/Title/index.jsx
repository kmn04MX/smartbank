/* import React from "react"; */ /* Se puede eliminar porque se esta usando styled components */
import styled from "styled-components" /* Se invica la librería de styled commponents */

const Title = styled.h1`
  padding: 25px 0;
  color: ${({theme}) => theme.text};
` 

/* const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
}; */
export default Title;
