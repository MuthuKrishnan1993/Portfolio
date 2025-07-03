import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Container, Button } from "@radix-ui/themes";
import { authActions } from "../store/authSlice";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase/connect"; // Adjust the path as needed
import { notificationActions } from "../store/Notificationslice";

//import { RouteEnums } from "../constants/RouteEnums"; // Adjust the path as needed
useState;
function Registration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(formData);
    console.log(setFormData);
    console.log(data);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        await sendEmailVerification(userCredential.user)
          .then(() => {
            const user = userCredential.user;
            dispatch(
              authActions.saveuser({
                user: user.email,
                userVerifiedCheck: user.emailVerified,
                userId: user.uid,
                userName: user.displayName,
              })
            );
            dispatch(authActions.saveToken(user.accessToken));
            dispatch(
              notificationActions.setNotification({
                title: "Registration",
                message: "Registration successful",
                status: "success",
                open: true,
              })
            );
            navigate("/login");
          })
          .catch((error) => {
            dispatch(
              notificationActions.setNotification({
                title: "Registration",
                message: error.message,
                status: "Failed",
                open: true,
              })
            );
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
      });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <Container className="login-container">
      {loading ? "Loading..." : ""}
      <div className="flex flex-wrap gap-2.5 pt-40 justify-center">
        <div className="w-2/4">
          <h1 className="font-bold text-center justify-center text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2 flex flex-row gap-2 align-middle align-center uppercase font-weight-900 font:oswald">
            Registration
          </h1>
        </div>
        <div className="w-2/4">
          <div className="contact-us">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-4"
            >
              <label htmlFor="email" className="text-secondary-500 mt-5">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded p-2 mb-4 text-secondary-500"
                {...register("email")}
              />

              <label htmlFor="message" className="text-secondary-500">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                required
                className="border border-gray-300 rounded p-2 mb-4 text-secondary-500"
                {...register("password")}
              />
              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Registration;
