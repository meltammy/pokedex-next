import { colorsByTypes } from "./colorsByTypes";

function isKeyOfColors(key: string): key is keyof typeof colorsByTypes {
  return key in colorsByTypes;
}

export function getColorsByPokemonType(type: string) {
  if (isKeyOfColors(type)) return colorsByTypes[type];
  return colorsByTypes.default;
}
