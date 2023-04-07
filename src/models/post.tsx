export interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PostResponse {
  posts: Post[];
  current_page: number;
  total_page: number;
  page_size: number;
  total: number;
}

export interface Pagination {
  totalPage: number;
  limit: number;
  currentPage: number;
  total: number;
}

export interface PostParams {
  page?: number;
  title?: string;
  tags?: string;
}

export interface PostData {
  title: string;
  description: string;
  tags: string[];
}
