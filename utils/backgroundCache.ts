import { makeImageFromView } from "@shopify/react-native-skia"
import { buildBackground } from "./visualEngine"

// Cache to store pre-rendered backgrounds
const backgroundCache = new Map<string, string>()

export function getCacheKey(elements: [number, number]): string {
  return `${elements[0]}-${elements[1]}`
}

export function getCachedBackground(elements: [number, number]): string | undefined {
  return backgroundCache.get(getCacheKey(elements))
}

export function setCachedBackground(elements: [number, number], uri: string): void {
  backgroundCache.set(getCacheKey(elements), uri)
}

export function clearBackgroundCache(): void {
  backgroundCache.clear()
}

// Get all unique element combinations from hexagrams
export function getAllElementCombinations(hexagrams: any[]): [number, number][] {
  const combinations = new Set<string>()
  const result: [number, number][] = []
  
  hexagrams.forEach(hexagram => {
    if (hexagram.elements) {
      const key = getCacheKey(hexagram.elements)
      if (!combinations.has(key)) {
        combinations.add(key)
        result.push(hexagram.elements)
      }
    }
  })
  
  return result
}
