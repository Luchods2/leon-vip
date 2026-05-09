console.log("León Vip online");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-5px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});