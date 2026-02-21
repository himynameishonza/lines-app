import { trigrams } from "../data/trigrams"

export function buildBackground(bottomId: number, topId: number) {
  const bottom = trigrams.find(t => t.id === bottomId)!
  const top = trigrams.find(t => t.id === topId)!

  return {
    composition: top.visual.composition,
    // Bottom trigram colors
    baseHue: bottom.visual.hue,
    saturation: bottom.visual.saturation,
    lightness: bottom.visual.lightness,
    // Top trigram colors
    topHue: top.visual.hue,
    topSaturation: top.visual.saturation,
    topLightness: top.visual.lightness,
    darkStart: 0.7
  }
}
