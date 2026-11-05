function downloadFile(
  filename: string,
  callback: (message: string) => void
): void {
  console.log(`Downloading ${filename}...`);

  setTimeout(() => {
    callback(`${filename} - Download Completed`);
  }, 3000);
}

downloadFile("report.pdf", (message) => console.log(message));