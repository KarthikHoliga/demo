function greetUser(username: string, callback: () => void): void {
  console.log("Hello,", username);
  callback();
}

function welcomeMessage(): void {
  console.log("Welcome to QA Career Pro");
}

greetUser("Karthik", welcomeMessage);

export {};