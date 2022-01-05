const handleBackToHome = () => {
  const ele = document.getElementById("home");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    window.location.reload();
  });
};

export const addCanvasHtmlListeners = () => {
  handleBackToHome();
};