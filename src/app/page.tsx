"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

const Home = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const [loading, setLoading] = useState(true);
  const [vPosts, setVPosts] = useState(7);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://gorest.co.in/public/v2/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const showMorePosts = () => {
    setVPosts((prev) => prev + 7);
  };

  return (
    <>
      <Navbar />
      <Header />

      <div className="p-10">
        {loading ? (
          <div className="flex items-center justify-center ">
            <div className="text-center text-2xl">
              <span className="loading loading-ball loading-lg"></span>
              Loading...
            </div>
          </div>
        ) : (
          posts
            .slice(0, vPosts)
            .map((post, index) => <PostList key={post.id} post={post} />)
        )}

        {vPosts < posts.length && (
          <div className="mt-10 flex justify-center">
            <button
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
              onClick={showMorePosts}
            >
              View all Posts
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
