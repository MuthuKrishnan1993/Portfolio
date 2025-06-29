import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Notification from "../components/Alert/Notification";
//import { notificationActions } from "../store/Notificationslice";
import { useSelector } from "react-redux";
import MobileMenu from "../components/MobileMenu";

function Root() {
  const notification = useSelector((state) => state.notification.notification);
  console.log("Root notification", notification);
  return (
    <>
      <div
        id="scroll-wrapper"
        className="bg-primary-500 flex flex-col flex-grow min-h-full"
      >
        <header>
          <Navbar />
          <MobileMenu />
        </header>
        <main className="main flex-grow">
          {notification && (
            <Notification
              title={notification.title}
              message={notification.message}
              status={notification.status}
              open={notification.open}
            />
          )}
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default Root;
