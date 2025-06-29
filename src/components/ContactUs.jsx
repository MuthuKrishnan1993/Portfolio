import { Container, Button } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactActions } from "../store/contact-slice";

// import { db } from "../Firebase/connect";
// import { collection, addDoc } from "firebase/firestore";
function ContactUs() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //const contactCollectionref = collection(db, "contact");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  console.log(formData);
  console.log(setFormData);
  const onSubmit = (data) => {
    dispatch(
      contactActions.addContact({
        name: data.name,
        email: data.email,
        message: data.message,
      })
    );
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <Container id="contact" className="h-dvh mx-wid">
        <div className="flex flex-row gap-2.5 contact">
          <div className="w-2/4 contact-content">
            <h1 className="font-bold text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2 flex flex-row gap-2 align-middle align-center uppercase font-weight-900 font:oswald">
              Contact Us
            </h1>
            <h2 className="font-bold text-secondary-500 lg:text-3xl mt-4 text-align-center pl-2">
              If you have any questions, feel free to reach out!
            </h2>
          </div>
          <div className="w-2/4 contact-content">
            <div className="contact-us">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-4"
              >
                <label htmlFor="name" className="text-secondary-500">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  {...register("name")}
                  className="border border-gray-300 rounded p-2 mb-4 text-secondary-500"
                />

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
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  {...register("message")}
                  className="border border-gray-300 rounded p-2 mb-4 text-secondary-500"
                ></textarea>

                <Button
                  type="submit"
                  className="text-tertiary-500 text-secondary-500 h-1.5 contact-btn"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContactUs;
