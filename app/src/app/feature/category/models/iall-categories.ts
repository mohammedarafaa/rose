
export interface IallCategories {
  message: string;
  metadata: categoryMetadata;
  categories: Category[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  isSuperAdmin: boolean;
  productsCount: number;
}

export interface categoryMetadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}
