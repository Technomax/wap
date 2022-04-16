window.onload = function () {
  document.getElementById("getAll").addEventListener("click", gets);
  function gets() {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  document.getElementById("getById").onclick = function () {
    fetch("http://localhost:3000/books/1")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  document.getElementById("update").onclick = function () {
    fetch("http://localhost:3000/books/1", {
      method: "PUT",
      body: JSON.stringify({
        title: "Reactives.js",
        author: {
          authorId: 303,
          firstname: "Edward",
          lastname: "Jack",
        },
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
};
