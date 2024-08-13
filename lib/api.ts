import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Blog {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    imageUrl: string;
    category: string;
    description: { type: string; children: { type: string; text: string }[] }[];
    title: string;
  };
}

export const getBlogs = async (): Promise<{ data: Blog[] }> => {
  const response = await axios.get<{ data: Blog[] }>(`${API_URL}/blogs`);
  return response.data;
};

export const getBlogById = async (id: number): Promise<Blog | null> => {
  const response = await axios.get<{ data: Blog }>(`${API_URL}/blogs/${id}`);
  return response.data?.data || null;
};
