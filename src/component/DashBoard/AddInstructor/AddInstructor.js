import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddInstructor.css";
import { toast } from "react-toastify";

const AddInstructor = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const [file, setFile] = useState(null);
  const [skill, setSkill] = useState({
    firstSkill: "",
    firstProgress: "",
    secondSkill: "",
    secondProgress: "",
    thirdSkill: "",
    thirdProgress: "",
    fourthSkill: "",
    fourthProgress: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleChange = (data) => {
    const key = data.target.name;
    const value = data.target.value;
    const newskill = { ...skill };

    newskill[key] = value;
    setSkill(newskill);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", file);
    data.skill = skill;
    data.totalrating = Math.floor(Math.random() * (20 - 5 + 0.5)) + 5;
    data.averageRaing = parseFloat(Math.random() * (5 - 0 + 1) + 0).toFixed(2);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData) {
          data.profilePic = imgData.data?.url;
          fetch("https://edu-vibe-server-eight.vercel.app/addInstructor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                toast("Instructor Added Successfully");
              } else {
                toast("Somthing went wrong Please try later");
              }
            });
        }
      });
  };
  return (
    <div className="edu-addins">
      <h3 className="header-text">Add Instructor</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="row add-form">
        <div className="col-md-4">
          <input {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="col-md-4">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="col-md-4">
          <input
            {...register("phone", { required: true })}
            placeholder="Phone Number"
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="col-md-6">
          <input
            {...register("degination", { required: true })}
            placeholder="Your Degination"
          />
          {errors.degination && <span>This field is required</span>}
        </div>
        <div className="col-md-6">
          <input
            onChange={handleFileChange}
            placeholder="ProfilePic"
            type="file"
          />
          {errors.profilePic && <span>This field is required</span>}
        </div>

        <div className="col-md-2">
          <select onChange={handleChange} name="firstSkill">
            <option value="WordPress Development">WordPress Development</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="Laravel Development">Laravel Development</option>
            <option value="Live Support">Live Support</option>
          </select>
        </div>
        <div className="col-md-1 progress-c">
          <input
            placeholder="Progress"
            name="firstProgress"
            onBlur={handleChange}
            type="number"
          />
          <label htmlFor="firstProgress">%</label>
        </div>
        <div className="col-md-2">
          <select onChange={handleChange} name="secondSkill">
            <option value="WordPress Development">WordPress Development</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="Laravel Development">Laravel Development</option>
            <option value="Live Support">Live Support</option>
          </select>
        </div>
        <div className="col-md-1 progress-c">
          <input
            placeholder="Progress"
            name="secondProgress"
            onBlur={handleChange}
          />
          <label>%</label>
        </div>
        <div className="col-md-2">
          <select onChange={handleChange} name="thirdSkill">
            <option value="WordPress Development">WordPress Development</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="Laravel Development">Laravel Development</option>
            <option value="Live Support">Live Support</option>
          </select>
        </div>
        <div className="col-md-1 progress-c">
          <input
            placeholder="Progress"
            name="thirdProgress"
            onBlur={handleChange}
          />
          <label>%</label>
        </div>
        <div className="col-md-2">
          <select onChange={handleChange} name="fourthSkill">
            <option value="WordPress Development">WordPress Development</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="Laravel Development">Laravel Development</option>
            <option value="Live Support">Live Support</option>
          </select>
        </div>
        <div className="col-md-1 progress-c">
          <input
            placeholder="Progress"
            name="fourthProgress"
            onBlur={handleChange}
          />
          <label>%</label>
        </div>

        <div className="col-md-12">
          <textarea
            {...register("about", { required: true })}
            placeholder="About You"
          />
          {errors.about && <span>This field is required</span>}
        </div>
        <div className="main-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddInstructor;
