
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("#addBtn");
  const closeButton = document.querySelector("#closeBtn");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
      dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
      dialog.close();
  });
