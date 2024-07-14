import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./EnrollForm.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");
const EnrollForm = ({ modalIsOpen, closeModal, course }) => {
  const { user } = useContext(AuthContext);
  course._id = null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = format(new Date(), "PP");
    data.email = user?.email;
    fetch("https://edu-vibe-server-eight.vercel.app/entrollCourse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...course, ...data }),
    })
      .then((res) => res.json())
      .then((succes) => {
        if (succes.acknowledged) {
          closeModal();
          toast("Appoinment Created SuccessFully");
        } else {
          toast.error(succes.message);
        }
      });
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            {errors.name && <span>Name is required</span>}
          </div>
          <div className="form-group">
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <span>Phone Number required</span>}
          </div>
          <div className="form-group">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              value={user?.email}
            />
            {errors.email && <span>Email is required</span>}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select {...register("gender")} name="gender">
                <option value="other">Other</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="col-4">
              <input
                type="number"
                {...register("age", { required: true })}
                placeholder="Age"
              />
              {errors.age && <span>age is required</span>}
            </div>
            <div className="col-4">
              <select {...register("eduStatus")} name="eduStatus">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>
          <div className="form-group text-end">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EnrollForm;
