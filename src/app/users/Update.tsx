import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

interface user {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface UpdateProps {
  user: user;
  onInsertOrUpdate: () => void;
}
const Update: React.FC<UpdateProps> = ({ user, onInsertOrUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessToken =
    "2926147fd36eeac60f66bc8adca0bdb73cc0bea6ecb32754a3868b84a8dc55fc";

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [status, setStatus] = useState(user.status);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios
        .patch(
          "https://gorest.co.in/public/v2/users/" + user.id,
          {
            name,
            email,
            gender,
            status,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          setIsSubmitting(false);
          handleModal();
          Swal.fire(
            "Success!",
            `User ${user.id} updated successfully`,
            "success"
          ).then(() => {
            onInsertOrUpdate();
          });
        });
    } catch (error: any) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div>
      <button className="text-sm" onClick={handleModal}>
        <i className="fas fa-solid fa-pen pe-4"></i>
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{name} Update</h3>

          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="input input-bordered my-4 flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Gender
              <select
                className="grow"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={gender} selected hidden>
                  {gender}
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>

            <label className="input input-bordered my-4 flex items-center gap-2">
              Status
              <select
                className="grow"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={status} selected hidden>
                  {status}
                </option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>

            {/* Submit Button */}
            <button className="btn btn-primary me-3" type="submit">
              {isSubmitting ? (
                <i className="fas fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
