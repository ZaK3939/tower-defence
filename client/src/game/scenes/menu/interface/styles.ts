import { InterfaceTextColor, InterfaceFont } from "@type/interface";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${InterfaceFont.PIXEL_TEXT};
  font-size: 2.5em; // 大きなフォントサイズ
  color: #e0e0e0;
  margin-left: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); // テキストに影を追加
  margin: 5px 0; // 上下のマージンを追加
  font-weight: bold; // 太字にする
  letter-spacing: 2px; // 文字間隔を広げる
`;

export const Wrapper = styled.div`
  height: 90vh;
  max-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const shouldForwardProp = (propName: any) => propName !== "centerContent";

export const Block = styled.div.withConfig({
  shouldForwardProp,
})<{ centerContent?: boolean }>`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.centerContent ? "center" : "space-between"};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 5px;
  margin: 5px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  ${Block} {
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0 26px 0;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  border-radius: 8px;
`;

export const Logotype = styled.img`
  height: 70px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8)); // ロゴの影をより濃く
`;

export const WawaContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`;

export const Icon = styled.img`
  width: 16px;
  margin-right: 8px;
  display: inline-block;
`;

// For the gif image
export const GifImage = styled.img`
  width: 200px;
  height: auto;
  margin: 10px;
  pointer-events: none;
`;

// For the text
export const Link = styled.a`
  color: #fff;
  pointer-events: all;
  &:hover {
    color: ${InterfaceTextColor.HOVER};
  }
`;

export const WawaBlock = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
