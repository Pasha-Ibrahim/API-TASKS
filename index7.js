const setLoading = () => {
  if (isLoading) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
const users = document.getElementById("users");
const endpoint = "https://dummyjson.com/carts";
const loader = document.getElementById("loader");
let isLoading = true;
setLoading();

axios.get(endpoint).then((res) => {
  if (res.status === 200) {
    res.data.carts.forEach((user) => {
      users.innerHTML += `<div class="user">
    <h2>${user.userId}</h2>
     <h2>${user.total}</h2>
        <h2>${user.totalProducts}</h2>
    </div>`;
    });
    isLoading = false;
    setLoading();
  }
});
