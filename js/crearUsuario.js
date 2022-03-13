const getDataUser = () => {
  const nombreElement = document.getElementById("title-input");
  const apellidosElement = document.getElementById("apelli-input");
  const fotoElement = document.getElementById("photo-input");
  const tipoUElement = document.getElementById("user-input");
  const emailElement = document.getElementById("correo-input");
  const telefElement = document.getElementById("cel-input");
  const descripcionElement = document.getElementById("description-input");
  //const photoUrlElement = document.getElementById("photo-input");
 

  const nombre = nombreElement.value;
  const apellidos = apellidosElement.value;
  const foto = fotoElement.value;
  const tipoUsua = tipoUElement.value;
  const email = emailElement.value;
  const telef = telefElement.value;
  const desc = descripcionElement.value;
  
  createUser(nombre, apellidos, foto,desc,tipoUsua,email,telef);
};

const submitBtnU = document.getElementById("submit-btnU");

submitBtnU.addEventListener("click", getDataUser);
