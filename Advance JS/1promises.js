// const promiseOne = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve("success");
//     }, 2000);
//   } else {
//     reject("Internal Error");
//   }
// });

// promiseOne
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(`Error : ${e}`);
//   });

// new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve("success");
//     }, 2000);
//   } else {
//     reject("Internal Error");
//   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(`Error : ${e}`);
//   });

// const promiseThree = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve({ user: "Saumya", password: "12345" });
//     }, 2000);
//   } else {
//     reject("Internal Error");
//   }
// });

// async function userData() {
//   try {
//     const data = await promiseThree;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promiseThree.then((res) => {
//   console.log(res["user"]);
// });

// userData();

async function userDataRequest() {
  try {
    const userData = await fetch("https://api.github.com/users/saumyrex");
    // console.log(userData);
    if (userData["status"] === 200) {
      const data = await userData.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

userDataRequest();
