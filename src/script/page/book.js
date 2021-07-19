const bookPage = `
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Judul</label>
                    <input type="text" class="form-control" name="judul" id="judul">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Pengarang</label>
                    <input type="text" class="form-control" name="penulis" id="penulis">
                </div>
            </div>
        </div>
        <div id="data" class="row">
            <br><br><br><br><br><br>
        </div>
        </div>
    </div>
</div>;`;

const url = "http://localhost:8000/api/book/search";
let i = 0;

const bookFunct = () => {
  let judulField = document.getElementById("judul");
  let penulisField = document.getElementById("penulis");
  let judul = "";
  let penulis = "";
  judulField.onchange = function () {
    judul = judulField.value;
    getBook(judul, penulis);
  };
  penulisField.onchange = function () {
    penulis = penulisField.value;
    getBook(judul, penulis);
  };
};

const getBook = async (judul, penulis) => {
  const requestData = {
    judul: `${judul}`,
    penulis: `${penulis}`,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  var data = await response.json();
  document.getElementById("data").innerHTML = "";
  i = 0;
  if (data.length == 0) {
    document.getElementById("data").innerHTML +=
      "<h2>Data tidak Ditemukan</h2>";
  }
  data.forEach((book) => {
    let stats;
    if (i < 20) {
      if (book.status) {
        stats = "Tersedia";
      } else {
        stats = "Tidak Tersedia";
      }
      const element = `<div class="col-md-3 pb-2">
                            <div class="card" style="width: 15rem;">
                                <img class="card-img-top" src="http://localhost:8000/images/book/${book["cover"]}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title text-dark">${book["judul"]}</h5>
                                    <p class="card-text text-dark">${book["book_id"]}/${book["no_induk"]}</p>
                                    <p class="card-text text-dark">${book["ddc"]}.${book["no"]}</p>
                                    <h6 class="text-dark">${book["penulis"]}</h6>
                                    <p class="card-text text-dark">${stats}</p>
                                </div>
                            </div>
                        </div>`;
      document.getElementById("data").innerHTML += element;
      i++;
    }
  });
};

export { bookPage, bookFunct };
