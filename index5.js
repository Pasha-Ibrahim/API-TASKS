const endpoint = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.response);
    const users = document.getElementById("users");

    data.forEach((user) => {
      users.innerHTML += `<div class="user">
    <p>name : ${user.name}</p>
    <p>surname : ${user.username}</p>
    <p>emnail : ${user.email}</p>
    <p>street : ${user.address.street}</p>
    <p>suite : ${user.address.suite}</p>
    <p>city : ${user.address.city}</p>
    <p>zipzode : ${user.address.zipcode}</p>
    <p>lat : ${user.address.geo.lat}</p>
    <p>lng : ${user.address.geo.lng}</p>
    <p>phone : ${user.phone}</p>
    <p>website : ${user.website}</p>
    <p>name : ${user.company.name}</p>
    <p>catchPhrase : ${user.company.catchPhrase}</p>
    <p>bs : ${user.company.bs}</p>
    </div>`;
    });
  }
};
