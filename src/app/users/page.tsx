"use client";

import Script from "next/script";

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Insert from "./Insert";
import Update from "./Update";

interface user {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const accToken =
    "2926147fd36eeac60f66bc8adca0bdb73cc0bea6ecb32754a3868b84a8dc55fc";

  useEffect(() => {
    // Fetch users data
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://gorest.co.in/public/v2/users/");
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const deleteHandler = async (id: number) => {
    try {
      // Delete Modal From Swal
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .delete(`https://gorest.co.in/public/v2/users/${id}`, {
              headers: {
                Authorization: `Bearer ${accToken}`,
              },
            })
            .then(() => {
              fetchUsers();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            });
        }
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const insertOrUpdateHandler = () => {
    fetchUsers();
  };

  return (
    <>
      {/* Load jQuery using next/script */}x
      <Script
        src="https://code.jquery.com/jquery-3.6.4.min.js"
        strategy="beforeInteractive"
      />
      <Navbar />
      <Header />
      <div className="my-5 p-5">
        <Insert onInsertOrUpdate={insertOrUpdateHandler} />

        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <div
                      className={
                        user.status == "active"
                          ? "badge badge-accent"
                          : "badge badge-secondary"
                      }
                    >
                      {user.status}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <Update
                        user={user}
                        onInsertOrUpdate={insertOrUpdateHandler}
                      />
                      <button
                        className="text-sm"
                        onClick={() => deleteHandler(user.id)}
                      >
                        <i className="fas fa-solid fa-trash pe-4"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
