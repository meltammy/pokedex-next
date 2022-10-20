import { colorsTypes } from '@/styles/colorsTypes'

function isKeyOfColors(key: string): key is keyof typeof colorsTypes {
  return key in colorsTypes
}

export function getColors(type: string) {
  if (isKeyOfColors(type)) return colorsTypes[type]
  return colorsTypes.default
}
