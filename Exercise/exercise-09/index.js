//Exercise 09
//1. Promise

const helloWorld = (() => {
    let condition = true;
    const newPromise = new Promise((resolve, reject) => {
        if (condition == true) {
            resolve(setTimeout(() => {console.log("Hello World!");}, 2000));
        } else {
            reject("Gagal");
        }
    });
})

const messages = async () => {
    try {
        let msg = await helloWorld();
        console.log(msg);
    } catch (error) {
        console.log(error);
    }
};

messages();

//2. Fetch

// const ambilDataUser = async () => {
//     fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((users) => users.data.forEach(item => console.log(item.email)))
// }

// ambilDataUser()


//3. Async - Await
// const ambilDataUser = async () => {
//       let response = await fetch("https://reqres.in/api/users");
//       let users = await response.json();
//       users.data.forEach((item) => console.log(item.email));
// }

// ambilDataUser()

//4. Axios

const ambilDataUser = (() => {
    (async () => {
    let users = await axios.get("https://reqres.in/api/users");
    users.data.data.forEach((item) => console.log(item.email));
    })();
})

ambilDataUser()