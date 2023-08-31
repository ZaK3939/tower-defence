import styled, { css, keyframes } from "styled-components";

import {
  InterfaceBackgroundColor,
  InterfaceTextColor,
  InterfaceFont,
} from "@type/interface";

const animationTimeout = keyframes`
  0% { right: 0 }
  100% { right: 100% }
`;

const animationOpacity = keyframes`
  0% { opacity: 0; margin-bottom: 0 }
  100% { opacity: 1; margin-bottom: 12px }
`;

export const Icon = styled.img`
  display: block;
  width: 26px;
  height: 26px;
`;

export const Info = styled.div`
  position: absolute;
  display: none;
  transform: translateX(-50%);
  bottom: 100%;
  left: 50%;
  margin-bottom: 12px;
  width: 200px;
  animation: ${animationOpacity} 0.1s ease-in;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid ${InterfaceBackgroundColor.BLUE_TRANSPARENT};
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${InterfaceBackgroundColor.BLUE_DARK_TRANSPARENT};
  border-radius: 10px 10px 0 0;
`;

export const Name = styled.div`
  color: ${InterfaceTextColor.SUCCESS};
  font-family: ${InterfaceFont.PIXEL_LABEL};
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 2px;
`;

export const Body = styled.div`
  background: ${InterfaceBackgroundColor.BLUE_TRANSPARENT};
  padding: 10px 14px 12px 14px;
  border-radius: 0 0 10px 10px;
`;

export const Container = styled.div<{
  $active?: boolean;
  $coolingDown?: boolean;
}>`
  background: ${InterfaceBackgroundColor.BLACK_TRANSPARENT_50};
  padding: 14px;
  pointer-events: all;
  position: relative;
  border-bottom: 6px solid #000;
  border-radius: 5px;
  ${(props) =>
    props.$coolingDown &&
    css`
      background: ${InterfaceBackgroundColor.RED_TRANSPARENT_50}; // 背景色を赤に変更
      pointer-events: none; // クールタイム中はクリックを無効にする
    `}

  // アクティブ時のスタイル
  ${(props) =>
    props.$active &&
    css`
      ${Icon} {
        opacity: 0.5;
      }
    `}

  // アクティブでない時のホバースタイル
  &:hover {
    background: ${InterfaceBackgroundColor.BLACK_TRANSPARENT_75};
    cursor: pointer;

    ${Info} {
      display: block;
    }
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Timeout = styled.div`
  position: absolute;
  background: ${InterfaceBackgroundColor.INFO};
  right: 0;
  left: 0;
  bottom: -6px;
  height: 6px;
  animation: ${animationTimeout} 1s linear;
`;

export const KeyNumber = styled.span`
  position: absolute;
  top: 5px; // Containerの上端から少し離す
  right: 5px; // Containerの右端から少し離す
  background-color: rgba(0, 0, 0, 0.7); // 背景色を少し濃くする
  color: white;
  font-size: 10px;
  padding: 1px 4px; // パディングを少し調整
  border-radius: 50%; // 丸みを持たせる
  z-index: 1;
`;
