const container = document.querySelector(".container");
const motos = [
  {
    name: "DUKE 200 NG",
    image: "images/moto1.jpg"
  },
  {
    name: "GIXXER 250",
    image: "images/moto2.jpg"
  },
  {
    name: "GSK-R 150",
    image: "images/moto3.jpg"
  },
  {
    name: "GSX-S 150",
    image: "images/moto4.jpg"
  },
  {
    name: "BOMOBER 250",
    image: "images/moto5.jpg"
  },
  {
    name: "VENON 250",
    image: "images/moto6.jpg"
  },
  {
    name: "GIXXER 150",
    image: "images/moto7.jpg"
  },
  {
    name: "APACHE 200",
    image: "images/moto8.jpg"
  }
];
const showMoto = () => {
  let output = "";
  motos.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Detail</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showMoto);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
