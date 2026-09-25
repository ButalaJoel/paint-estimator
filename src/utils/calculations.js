export function calculateEstimate(product, area) {
  if (!product || !area || area <= 0) {
    return null
  }

  const kits = Math.ceil(
    area / product.coveragePerKit
  )

  const base = kits * product.kit.base
  const hardener = kits * product.kit.hardener

  const materialCost = kits * product.price

  return {
    area,
    kits,
    base,
    hardener,
    materialCost,
  }
}


export function calculateScratchCoat(product, area) {
  if (
    !product?.scratchCoat?.available ||
    !area ||
    area <= 0
  ) {
    return null
  }

  const scratchCoat = product.scratchCoat

  const kits = Math.ceil(
    area / scratchCoat.coveragePerKit
  )

  return {
    kits,

    base:
      kits * scratchCoat.kit.base,

    hardener:
      kits * scratchCoat.kit.hardener,

    sand:
      kits * scratchCoat.kit.sand,

    thickness:
      scratchCoat.thickness,
  }
}