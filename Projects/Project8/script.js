const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const userName = document.querySelector("#username").value;
  console.log(userName);
  const apiURL = `https://api.github.com/users/${userName}`;
  fetchUserData(apiURL);
});

// function fetchUserData(apiURL) {
//   const dataRequest = new XMLHttpRequest();

//   //userdata request sending to server
//   dataRequest.open("GET", apiURL);
//   dataRequest.responseType = "json";
//   dataRequest.send();
//   dataRequest.onreadystatechange = () => {
//     if (dataRequest.readyState === 4) {
//       const res = dataRequest.response;
//       console.log(res);
//       document.querySelector("#userImg").innerHTML = `<img src=${res["avatar_url"]} alt="description of image" >`;
//       document.querySelector("#userlogin").innerText = `${res["login"]}`;
//       document.querySelector("#name").innerText = `${res["name"]}`;
//       document.querySelector("#email").innerText = `${res["email"]}`;
//       document.querySelector(
//         "#followers"
//       ).innerText = `${res["followers"]}`;
//       document.querySelector(
//         "#followings"
//       ).innerText = `${res["following"]}`;
//     }
//   };
// }

//using Fetch()

function fetchUserData(apiURL) {
  fetch(apiURL)
    .then((res) => {
      console.log(typeof res);
      console.log(res);

      return res.json();
    })
    .then((res) => {
      console.log(res);

      if (res["message"] === "Not Found") {
        const error = "You are not a register memeber please register";
        document.querySelector("#usercard").innerHTML = `<h2>${error}</h2>`;
      } else {
        document.querySelector(
          "#userImg"
        ).innerHTML = `<img src=${res["avatar_url"]} alt="description of image" >`;
        document.querySelector("#userlogin").innerText = `${res["login"]}`;
        document.querySelector("#name").innerText = `${res["name"]}`;
        document.querySelector("#email").innerText = `${res["email"]}`;
        document.querySelector("#followers").innerText = `${res["followers"]}`;
        document.querySelector("#followings").innerText = `${res["following"]}`;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
