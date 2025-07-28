const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  slug: string;
  status: string;
  tags: string[];
  category?: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  readingTime: number;
}

export interface PostsResponse {
  success: boolean;
  data: {
    posts: Post[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL || 'http://localhost:3001';
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getPosts(params?: {
    page?: number;
    limit?: number;
    sort?: string;
    category?: string;
    tags?: string;
    search?: string;
    author?: string;
    status?: string;
  }): Promise<PostsResponse> {
    const queryParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const response = await this.makeRequest(
      `/api/posts?${queryParams.toString()}`,
    );
    return response.json();
  }
}

export const apiService = new ApiService();
