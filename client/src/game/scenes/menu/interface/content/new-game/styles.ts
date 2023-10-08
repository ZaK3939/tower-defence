import styled from "styled-components";
import { INTERFACE_MOBILE_BREAKPOINT } from "@const/interface";

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
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    margin-bottom: 10px;
  }
`;
