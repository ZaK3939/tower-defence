import styled from "styled-components";

import { InterfaceBackgroundColor } from "@type/interface";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${InterfaceBackgroundColor.BLACK_TRANSPARENT_50};
  border-radius: 5px 5px 0 0;
`;

export const Image = styled.img`
  height: 100%;
`;
