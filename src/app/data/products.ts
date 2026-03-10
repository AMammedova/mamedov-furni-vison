export type ProductSize = 'small' | 'medium' | 'large' | 'wide';

export interface ProductData {
  id: number;
  slug: string;
  nameKey: string;
  categoryKey: string;
  price: string;
  image: string;
  size: ProductSize;
  descriptionKey: string;
  dimensionsKey: string;
  materialKey: string;
}

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    slug: 'milano-lounge-chair',
    nameKey: 'Milano Lounge Chair',
    categoryKey: 'Seating',
    price: '$4,299',
    image: 'https://images.unsplash.com/photo-1767507006149-befd852965d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'large',
    descriptionKey: 'milano_desc',
    dimensionsKey: 'milano_dimensions',
    materialKey: 'milano_material'
  },
  {
    id: 2,
    slug: 'heritage-dining-table',
    nameKey: 'Heritage Dining Table',
    categoryKey: 'Tables',
    price: '$8,499',
    image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'medium',
    descriptionKey: 'heritage_desc',
    dimensionsKey: 'heritage_dimensions',
    materialKey: 'heritage_material'
  },
  {
    id: 3,
    slug: 'artisan-sofa',
    nameKey: 'Artisan Sofa',
    categoryKey: 'Seating',
    price: '$12,999',
    image: 'https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'wide',
    descriptionKey: 'artisan_sofa_desc',
    dimensionsKey: 'artisan_sofa_dimensions',
    materialKey: 'artisan_sofa_material'
  },
  {
    id: 4,
    slug: 'signature-collection',
    nameKey: 'Signature Collection',
    categoryKey: 'Workspace',
    price: '$6,799',
    image: 'https://images.unsplash.com/photo-1682592318170-d6618b240285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'medium',
    descriptionKey: 'signature_desc',
    dimensionsKey: 'signature_dimensions',
    materialKey: 'signature_material'
  },
  {
    id: 5,
    slug: 'zen-minimalist-chair',
    nameKey: 'Zen Minimalist Chair',
    categoryKey: 'Seating',
    price: '$3,499',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'small',
    descriptionKey: 'zen_desc',
    dimensionsKey: 'zen_dimensions',
    materialKey: 'zen_material'
  },
  {
    id: 6,
    slug: 'executive-desk',
    nameKey: 'Executive Desk',
    categoryKey: 'Workspace',
    price: '$9,299',
    image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    size: 'small',
    descriptionKey: 'executive_desc',
    dimensionsKey: 'executive_dimensions',
    materialKey: 'executive_material'
  }
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
