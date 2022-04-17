window.onload = function () {
  loadData();

  document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("http://localhost:3000/books", {
      method: "POST",
      body: JSON.stringify({
        bookId:document.getElementById("txt-bookId").value,
        title: document.getElementById("txt-title").value,
        author: {
          authorId: document.getElementById("txt-authorId").value,
          firstname: document.getElementById("txt-firstname").value,
          lastname: document.getElementById("txt-lastname").value,
        },
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("bookForm").reset();
        loadData();
      });
  });

  document.getElementById("getAll").addEventListener("click", loadData);

  document.getElementById("addNew").addEventListener("click", function () {
    document.getElementById("bookForm").reset();
    document.getElementById("txt-bookId").value = 0;
    document.getElementById("btnFormUpdate").style.display = "none";
    document.getElementById("btnFormAdd").style.display = "inline";
  });

  function loadData(event) {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((res) => {
        showDataInTable(res);
        refreshEvent();
      });
  }

  const showDataInTable = function (data) {
    let htmlString = "";
    data.forEach((x) => {
      htmlString += " <tr>";
      htmlString += `<td>${x.bookId}</td>`;
      htmlString += `<td>${x.title}</td>`;
      htmlString += `<td>${x.author.authorId}</td>`;
      htmlString += `<td>${x.author.firstname}</td>`;
      htmlString += `<td>${x.author.lastname}</td>`;
      htmlString += `<td><button class="updateButton" name="updateButton" tag=${x.bookId}>update</button> |
      <button class="deleteButton" name="deleteButton" tag=${x.bookId}>Delete</button></td>`;
      htmlString += "</tr>";
    });

    document.getElementById("tableBody").innerHTML = htmlString;
  };

  function refreshEvent() {
    let btns = document.getElementsByClassName("updateButton");
    Array.prototype.forEach.call(btns, function addClickListener(btn) {
      btn.addEventListener("click", function (event) {
        getById(this.getAttribute("tag"));
      });
    });

    let removeBtns = document.getElementsByClassName("deleteButton");
    Array.prototype.forEach.call(removeBtns, function addClickListener(btn) {
      btn.addEventListener("click", function (event) {
        deleteById(this.getAttribute("tag"));
      });
    });
  }

  const getById = function (bookId) {
    fetch("http://localhost:3000/books/" + bookId)
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("txt-bookId").value = res.bookId;
        document.getElementById("txt-title").value = res.title;
        document.getElementById("txt-authorId").value = res.author.authorId;
        document.getElementById("txt-firstname").value = res.author.firstname;
        document.getElementById("txt-lastname").value = res.author.lastname;
        document.getElementById("btnFormUpdate").style.display = "inline";
        document.getElementById("btnFormAdd").style.display = "none";
      });
  };

  const deleteById= function (bookId) {
    fetch("http://localhost:3000/books/"+bookId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Record has been successfully delete.");
        showDataInTable(res);
        refreshEvent();
      });
  };
};
