import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Insert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessToken =
    "2926147fd36eeac60f66bc8adca0bdb73cc0bea6ecb32754a3868b84a8dc55fc";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
    } catch (error: any) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div>
      <button className="btn btn-primary text-lg" onClick={handleModal}>
        <i className="fas fa-plus fa-pen pe-4"></i>
        Add New
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
          <h3 className="font-bold text-lg">Insert New User Data</h3>

          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Name
              <input type="text" className="grow" />
            </label>

            <label className="input input-bordered my-4 flex items-center gap-2">
              Email
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Gender
              <select className="grow">
                <option selected hidden>
                  -- gender ---
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>

            <label className="input input-bordered my-4 flex items-center gap-2">
              Status
              <select className="grow">
                <option selected hidden>
                  -- status ---
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
                "Insert User"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Insert;
