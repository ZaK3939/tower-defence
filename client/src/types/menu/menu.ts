export type MenuItem = {
  label: string;
  page?: MenuPage;
  disabled?: boolean;
  onClick?: () => void;
};

export enum MenuPage {
  NEW_GAME = "NEW_GAME",
  PVP_GAME = "PVP_GAME",
  LOAD_GAME = "LOAD_GAME",
  SAVE_GAME = "SAVE_GAME",
  SETTINGS = "SETTINGS",
  ABOUT_GAME = "ABOUT_GAME",
  CONTROLS = "CONTROLS",
}
