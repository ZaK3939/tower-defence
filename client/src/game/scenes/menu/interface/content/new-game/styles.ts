import styled from "styled-components";
import { InterfaceFont } from "@type/interface";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Params = styled.div`
  margin-bottom: 40px;

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
