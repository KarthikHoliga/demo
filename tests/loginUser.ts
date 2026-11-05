function loginUser(
  username: string,
  password: string,
  callback: (error: Error | null, message?: string) => void
): void {
  if (username === "admin" && password === "admin123") {
    callback(null, "Login Successful");
  } else {
    callback(new Error("Invalid Credentials"));
  }
}

loginUser("admin", "wrong", (error, message) => {
  if (error) {
    console.log("Error:", error.message);
    return;
  }
  console.log("Success:", message);
});