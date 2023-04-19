export const getAssetUrl = (originAddress: any) => {
  return new URL(`../assets/images/${originAddress}`, import.meta.url).href
}
