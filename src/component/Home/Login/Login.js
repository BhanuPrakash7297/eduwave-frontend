import React, { useState, useContext } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import PasswordChecklist from "react-password-checklist";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, createUser, updateName, setUser } = useContext(AuthContext);
  const onSubmit = async (data, event) => {
    const form = event.target;
    const email = data.email;
    const password = data.password;
    const confirmPass = data.confirmPassword;
    const name = data.name;
    const from = "/"; // Define your redirect path
    
    if (newUser) {
      if (password.length < 6 || confirmPass.length < 6) {
        setError("*Password Must be 6 characters or more!");
        return;
      }
      if (password !== confirmPass) {
        setError("*Password did not match!");
        return;
      }

      try {
        const result = await createUser(email, password);
        const user = result.user;
        await updateName(name);
        setUser(user);
        toast("Register Successfully!");

        // Make an API call to save the user in your MongoDB
       const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/user`, {
          email,
          name,
          role: "user", // Use the unique identifier from your auth system
        });
        form.reset();
        navigate(from, { replace: true });
      } catch (err) {
        console.log(err);
      }
    } else {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          toast("Logged in successfully!");
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          setError("Invalid login credentials.");
        });
    }
  };

  return (
    <>
      <BreadCrumb title="Login & Register" currentPage="Login & Register" />
      <section className="login-register-area">
        <div className="row g-5">
          <div className="col-lg-6 mx-auto">
            <div className="login-form-box">
              <h3>{newUser ? "Register" : " Login"}</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                {newUser && (
                  <input {...register("name")} placeholder="Full Name" />
                )}

                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Username or Email"
                />
                {errors.email && <span>This field is required</span>}
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span>This field is required</span>}
                {newUser && (
                  <>
                    <input
                      {...register("confirmPassword", { required: true })}
                      placeholder="Confirm Password"
                      type="password"
                      onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    <p>{error}</p>
                  </>
                )}
                {newUser ? (
                  <div className="comment-form-checkbox">
                    <input
                      type="checkbox"
                      {...register("termCheckbox", { required: true })}
                    />
                    <label htmlFor="termCheckbox">
                      I read & agree the terms & conditions.
                    </label>
                  </div>
                ) : (
                  <div className="comment-form-checkbox">
                    <input type="checkbox" {...register("rememberme")} />
                    <label htmlFor="rememberme">Remember Me</label>
                  </div>
                )}
                <input
                  type="submit"
                  className="main-btn"
                  value={newUser ? "Register" : "LogIn"}
                />
                {newUser ? (
                  <p>
                    Already Have an Account?
                    <span onClick={() => setNewUser(!newUser)}>Log In</span>
                  </p>
                ) : (
                  <p>
                    New to EduVibe?
                    <span onClick={() => setNewUser(!newUser)}>SignUp</span>
                  </p>
                )}
                {newUser && (
                  <PasswordChecklist
                    rules={["minLength", "number", "match"]}
                    minLength={5}
                    value={password}
                    valueAgain={passwordAgain}
                    onChange={(isValid) => {}}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
