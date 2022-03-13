const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");


// const titleElement = document.getElementById("title-input");
// const descriptionElement = document.getElementById("description-input");
// const photoUrlElement = document.getElementById("photo-input");
// const priceElement = document.getElementById("price-input");
// const submitBtn = document.getElementById("submit-btn");
const nombreElement = document.getElementById("title-input");
const apellidosElement = document.getElementById("apelli-input");
  const fotoElement = document.getElementById("photo-input");
  const tipoUElement = document.getElementById("user-input");
  const emailElement = document.getElementById("correo-input");
  const telefElement = document.getElementById("cel-input");
  const descripcionElement = document.getElementById("description-input");

const getData = () => {
  // const title = titleElement.value;
  // const description = descriptionElement.value;
  // const photoUrl = photoUrlElement.value;
  // const price = priceElement.value;
  const nombre = nombreElement.value;
  const apellidos = apellidosElement.value;
  const foto = fotoElement.value;
  const tipoUsua = tipoUElement.value;
  const email = emailElement.value;
  const telef = telefElement.value;
  const desc = descripcionElement.value;
  

  updateProduct(nombre, apellidos, foto,desc,tipoUsua,email,telef, userId);
};

submitBtnU.addEventListener("click", getData);

const placeProductData = () => {
  const url = `https://kodecampmitiendita-default-rtdb.firebaseio.com/users/${userId}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      nombreElement.value = product.title;
      descriptionElement.value = product.description;
      photoUrlElement.value = product.imageUrl;
      tipoUElement.value = product.tipoUsua;
    });
};

placeProductData();
