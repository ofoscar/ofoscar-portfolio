import { useEffect, useState } from 'react';
import {
  apiService,
  type Post,
  type PostsResponse,
} from '../services/apiService';

interface UsePostsParams {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  tags?: string;
  search?: string;
  author?: string;
  status?: string;
}

interface UsePostsReturn {
  posts: Post[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  refetch: () => void;
}

export const usePosts = (params: UsePostsParams = {}): UsePostsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response: PostsResponse = await apiService.getPosts(params);

      if (response.success) {
        setPosts(response.data.posts);
        setTotalPages(response.data.pagination.pages);
        setCurrentPage(response.data.pagination.page);
      } else {
        setError('Failed to fetch posts');
      }
    } catch (err) {
      setError('Error loading posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [JSON.stringify(params)]);

  return {
    posts,
    loading,
    error,
    totalPages,
    currentPage,
    refetch: fetchPosts,
  };
};
