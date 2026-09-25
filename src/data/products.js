export const products = [
  {
    id: 'epoxy-self-levelling',

    name: 'Epoxy Self-Levelling',

    category: 'Industrial Coatings',

    image: null,

    coverage: '4 m² / kit',

    packaging: {
      type: 'kit',
      label: 'Kit',
      description: '2L Base + 1L Hardener',
    },

    kit: {
      base: 2,
      hardener: 1,
      unit: 'L',
    },

    coveragePerKit: 4,

    price: 225000,

    calculator: true,

    scratchCoat: {
      available: true,
      coveragePerKit: 1,

      kit: {
        base: 2,
        hardener: 1,
        sand: 3,
      },

      thickness: '1.5 mm',
    },
  },
]