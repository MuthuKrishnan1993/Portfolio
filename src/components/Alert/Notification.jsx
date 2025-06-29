//import classes from "./Toast.module.css";
import * as Toast from "@radix-ui/react-toast";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../store/Notificationslice";
const Notification = (props) => {
  const dispatch = useDispatch();
  // let specialClasses = "";

  // if (props.status === "error") {
  //   specialClasses = classes.error;
  // }
  // if (props.status === "success") {
  //   specialClasses = classes.success;
  // }

  // const cssClasses = `${classes.notification} ${specialClasses}`;
  return (
    <>
      <section className="fixed top-0 right-0 z-50 p-4">
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            open={props.open}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col
            gap-2 fixed bottom-10 right-10 box-shadow-lg"
          >
            <Toast.Title className="text-black text-2xl font-semibold">
              {props.title}
            </Toast.Title>
            <Toast.Description className="text-black ">
              {props.message}
            </Toast.Description>
            <Toast.Action asChild altText="Close">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => {
                  dispatch(
                    notificationActions.setNotification({ open: false })
                  );
                }}
              >
                Close
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>
      </section>
    </>
  );
};

export default Notification;
