export interface FloatingLabelDetails {
  num: string;
  text: string;
}

// Keeping it dynamic if you ever want to pass structured data down
export const defaultFloatingMeta: FloatingLabelDetails = {
  num: "00",
  text: "Default Label",
};
