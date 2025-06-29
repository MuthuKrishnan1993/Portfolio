import { db } from "../Firebase/connect";
import { collection, addDoc } from "firebase/firestore";
import { notificationActions } from "./Notificationslice";
// export const sendContactData = async ({ name, message, email }) => {
//   console.log("contactData" + name);
//   const contactCollectionRef = collection(db, "contact");
//   await addDoc(contactCollectionRef, {
//     name: name,
//     email: email,
//     message: message,
//   });
// };

export const sendContactData = (contact) => {
  console.log("contactData" + JSON.stringify(contact));

  return async (dispatch) => {
    dispatch(
      notificationActions.setNotification({
        title: "Sending...",
        message: "Sending contact data",
        status: "pending",
        open: true,
      })
    );
    const sendRequest = async () => {
      console.log("Inside contactData" + contact.contacts[0].name);
      const contactCollectionRef = collection(db, "contact");
      const response = await addDoc(contactCollectionRef, {
        name: contact.contacts[0].name,
        email: contact.contacts[0].email,
        message: contact.contacts[0].message,
      });
      console.log("Response" + JSON.stringify(response));
    };
    try {
      await sendRequest();
      dispatch(
        notificationActions.setNotification({
          title: "Success",
          message: "Contact data sent successfully",
          status: "success",
          open: true,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.setNotification({
          title: "Error",
          message: error.message || "Sending contact data failed",
          status: "error",
          open: true,
        })
      );
    }
  };
};
