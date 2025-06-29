import { redirect } from "react-router-dom";

export function action() {
  console.log("Logout action");
  localStorage.removeItem("token");
  redirect("/");
}
