import styled from "styled-components";
import { INTERFACE_MOBILE_BREAKPOINT } from "@const/interface";
import { InterfaceBackgroundColor, InterfaceFont } from "@type/interface";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Label = styled.div`
  background: ${InterfaceBackgroundColor.ERROR};
  color: #fff;
  padding: 15px 30px 24px 30px;
  font-family: ${InterfaceFont.PIXEL_LABEL};
  font-size: 66px;
  line-height: 66px;
  margin-bottom: 40px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 30px;
  }
`;

export const Label2 = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  font-family: ${InterfaceFont.PIXEL_LABEL};
`;

export const Spacer = styled.div`
  height: 20px; // You can adjust this height based on your requirements
`;

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${InterfaceBackgroundColor.BLACK_TRANSPARENT_75};
  border-radius: 5px 5px 0 0;
`;

export const Image = styled.img`
  height: 100%;
`;
