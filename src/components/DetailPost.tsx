"use client";
import { useState } from "react";

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

const DetailPost = ({ post }: { post: Post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn btn-primary text-white font-semibold px-10 rounded-md transition duration-300 mt-4"
        onClick={handleModal}
      >
        Read More
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="py-4 mt-5">{post.title}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
