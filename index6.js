// const endpoint = "https://dummyjson.com/products";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", endpoint);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const data = JSON.parse(xhr.response);
//     const products = document.getElementById("products");

//     data.products.forEach((product) => {
//       products.innerHTML += `
//         <div class="product user">
//         <img src ="${product.thumbnail}"
//           <h2>${product.title}</h2>
//           <p>${product.description}</p>
//         </div>
//       `;
//     });
//   }
// };

const endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
  .then((response) => {
    if (response.status === 200 && response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  });
