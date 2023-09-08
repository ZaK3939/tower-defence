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
  hr {
    border: 1px solid #fff;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Params = styled.div`
  margin-bottom: 40px;

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
