"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailPost from "./DetailPost";

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

const PostList = ({ post }: { post: Post }) => {
  const [user, setUser] = useState({} as any);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://gorest.co.in/public/v2/users/${post.user_id}`
        );
        setUser(res.data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, [post.user_id]);

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-4 md:w-2/3 mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        {post.title}
      </h2>
      <p className="text-gray-600 text-lg overflow-hidden overflow-ellipsis whitespace-nowrap">
        {post.body}
      </p>

      <div className="flex items-center mt-4">
        <span className="text-gray-600 font-semibold mr-2">Author:</span>
        <p className="text-blue-500 ">{user ? user.name : "Unknown"}</p>
      </div>

      <DetailPost post={post} />
    </div>
  );
};

export default PostList;
