function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Karthik",
        email: "karthik@example.com",
        role: "Test Engineer"
      });
    }, 2000);
  });
}

console.log("Fetching user details...");

getUser().then((user) => {
  console.log("User details:");
  console.log("ID:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Role:", user.role);
});