// create a mocked file for testing purposes
const mockedFile = new File(["contenuto"], "nomeFile.txt", {
  type: "text/plain",
  lastModified: new Date().getTime(),
});

export default mockedFile;
