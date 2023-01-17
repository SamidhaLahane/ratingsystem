  // Select all elements with the "i" tag and store them in a NodeList called "winkfaces"
  const winkfaces = document.querySelectorAll(".winkfaces i");

  // Loop through the "winkfaces" NodeList
  winkfaces.forEach((face, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    face.addEventListener("click", () => {
      // Loop through the "winkfaces" NodeList Again
      winkfaces.forEach((face, index2) => {
        // Add the "active" class to the clicked star and any winkfaces with a lower index
        // and remove the "active" class from any winkfaces with a higher index
        index1 >= index2 ? face.classList.add("active") : face.classList.remove("active");
      });
    });
  });
   