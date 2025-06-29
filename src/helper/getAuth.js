import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  console.log("calling tokenloader" + token);
  return token;
}

export function tokenloader() {
  console.log("calling tokenloader");
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }
  return null;
}
