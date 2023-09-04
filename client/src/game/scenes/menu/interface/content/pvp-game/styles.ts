import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 10px;
  }
`;

export const Params = styled.div`
  margin-bottom: 40px;

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
