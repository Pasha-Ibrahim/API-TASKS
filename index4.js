const endpoint = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.response);
    const posts = document.getElementById("posts");

    data.forEach((user) => {
      posts.innerHTML += `<div class="user">
            <h2>${user.title}</h2>
            <p>${user.body}</p>
            </div>`;
    });
  }
};
