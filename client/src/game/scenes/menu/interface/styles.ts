import { InterfaceTextColor, InterfaceFont } from "@type/interface";
import styled from "styled-components";
import { INTERFACE_MOBILE_BREAKPOINT } from "@const/interface";

export const Title = styled.h1`
  font-family: ${InterfaceFont.PIXEL_TEXT};
  font-size: 2.5em;
  color: #e0e0e0;
  margin-left: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 5px 0;
  font-weight: bold;
  letter-spacing: 2px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    font-size: 2em;
    margin: 2px 0;
  }
`;

export const Wrapper = styled.div`
  height: 95vh;
  max-height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    margin-top: -100px;
    height: 90vh;
    max-height: 440px;
  }
`;

const shouldForwardProp = (propName: any) => propName !== "centerContent";

export const Block = styled.div.withConfig({
  shouldForwardProp,
})<{ centerContent?: boolean }>`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.centerContent ? "center" : "space-between"};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: ${(props) => (props.centerContent ? "2px" : "20px")};
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: ${(props) => (props.centerContent ? "1px" : "10px")};
    margin: 2px 0;
    flex-direction: row;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  ${Block} {
    align-items: center;
  }
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    margin-bottom: 2px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0 26px 0;
  margin-bottom: 0px;
  border-radius: 8px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: 5px 0 3px 0;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  border-radius: 8px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: 5px 0 3px 0;
  }
`;

export const Logotype = styled.img`
  height: 70px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    height: 40px;
  }
`;

export const WawaContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    grid-gap: 5px;
  }
`;

// For the gif image
export const GifImage = styled.img`
  width: 100px;
  height: auto;
  margin: 5px;
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
  margin-bottom: 2px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    display: none;
  }
`;

export const RankingContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    display: none;
  }
`;

export const RankingTitle = styled.h3`
  font-family: ${InterfaceFont.PIXEL_TEXT};
  color: #e0e0e0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 5px 0;
  font-weight: bold;
  margin-left: 20px;
`;

export const RankingList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RankingItem = styled.li`
  font-family: ${InterfaceFont.PIXEL_TEXT};
  color: #e0e0e0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 5px 0;
`;

export const SmallText = styled.span`
  font-size: 0.8em;
`;

export const FactionText = styled.span<{ faction: string }>`
  color: ${(props) => {
    switch (props.faction) {
      case "prima":
        return "blue";
      case "zook":
        return "green";
      case "mecha":
        return "red";
      case "flavo":
        return "yellow";
      default:
        return "white";
    }
  }};
`;
