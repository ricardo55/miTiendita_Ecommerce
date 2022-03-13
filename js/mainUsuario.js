const buildCard = (title, description, photoUrl, usuario, userId) => {
  let cardContainer = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  let cardButton = document.createElement("a");

  // Add classes to elements
  cardContainer.classList.add("card", "custom-card", "m-2");
  cardImage.classList.add("card-img-top", "custom-card-image");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");
  cardButton.classList.add("btn", `btn-primary`); // template strings

  // Add values to the elements
  cardImage.src = photoUrl;
  cardTitle.innerText = title;
  cardText.innerText = `${description} usuario: $ ${usuario}`;
  cardButton.innerText = "Detalles";
  cardButton.href = `/detallesUsuario.html?userId=${userId}`;

  // Build structure
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardBody);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardButton);

  return cardContainer;
};

let mainContent = document.getElementById("main-content2");

// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.results.forEach((pokemon) => {
//       fetch(pokemon.url)
//         .then((res) => {
//           return res.json();
//         })
//         .then((pokemonDetails) => {
//           let card = buildCard(
//             pokemon.name,
//             `Su peso es de:${pokemonDetails.weight}`,
//             pokemonDetails.sprites.front_default,
//             "primary",
//             "Da click aquí"
//           );
//           mainContent.appendChild(card);
//         });
//     });
//   });

const createUser = (title,apelli,correo,telef, usuario, description,imageUrl) => {
  const url =
    "https://kodecampmitiendita-default-rtdb.firebaseio.com/users.json";

  const product = {
    title: title,
    apelli: apelli,
    correo: correo,
    telef: telef,
    usuario: usuario,
    description: description,
    imageUrl: imageUrl,
  };
console.log(product)
  let userId = "";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then((product) => {
      //console.log(userId)
      userId = product.name;
      window.location.href = `/detallesUsuario.html?userId=${userId}`;
    });
};

const getUser = (id) => {
  const url = `https://kodecampmitiendita-default-rtdb.firebaseio.com/users/${id}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      const card = buildCard(
        product.title,
        product.description,
        product.imageUrl,
        product.usuario
      );

      mainContent.appendChild(card);
    });
};

const getAllUsers = () => {
  const url = `https://kodecampmitiendita-default-rtdb.firebaseio.com/users.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      for (const key in products) {
        const product = products[key];

        const card = buildCard(
          product.title,
          product.description,
          product.imageUrl,
          product.usuario,
          key
        );

        mainContent.appendChild(card);
      }
    });
};

const updateUser = (title,apelli,correo,telef, usuario, description,imageUrl, userId) => {
  const url = `https://kodecampmitiendita-default-rtdb.firebaseio.com/users/${userId}.json`;

  const product = {
    title: title,
    apelli: apelli,
    correo: correo,
    telef: telef,
    usuario: usuario,
    description: description,
    imageUrl: imageUrl,
  };

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((res) => {
    if (res.ok) {
      window.location.href = `/detallesUsuario.html?userId=${userId}`;
    } else {
      console.error(res);
    }
  });
};
