import { home } from "../page/home";
import { bookPage } from "../page/book";
import { regisPage } from "../page/regis";

const main = () => {
  let page = document.getElementById("content");
  page.innerHTML = home;
};

const regis = () => {
  let page = document.getElementById("content");
  page.innerHTML = regisPage;
};

const book = () => {
  let page = document.getElementById("content");
  page.innerHTML = bookPage;
};

function capital(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

const pageForm = async (data) => {
  let page = document.querySelector("html");
  page.innerHTML = `
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Dinas Perpustakaan Dan Kearsipan kota padang</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    <style>
      body {
        color: #3d3e44;
        font-family: "Hind", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        -webkit-font-feature-settings: "kern", "liga", "pnum";
        font-feature-settings: "kern", "liga", "pnum";
        font-size: 0.9rem;
        line-height: 1.7;
        min-height: 100vh;
        min-width: 320px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /*Typography*/
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6 {
        font-family: "Hind", "Calibre", "Helvetica Neue", "Helvetica", "Arial",
          sans-serif;
        -webkit-font-feature-settings: "kern", "liga", "pnum";
        font-feature-settings: "kern", "liga", "pnum";
        -webkit-font-smoothing: antialiased;
        color: #444;
      }

      /*Page Header*/
      .header-hero {
        position: relative;
        z-index: 2;
        height: 100vh;
        overflow: hidden;
        background-color: #212835;
      }

      .hero-wrapper {
        padding: 10px 0;
      }

      .header-hero .hero-bg {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 110%;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center center !important;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
        perspective: 1000;
        z-index: -1;
      }

      .header-hero .overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: -webkit-gradient(
          linear,
          left top,
          right bottom,
          from(#002f4b),
          to(#dc4225)
        );
        background-image: linear-gradient(to bottom right, #4d4d4d, #1289ad);
        opacity: 0.9;
      }

      .header-hero .entry-header h1 {
        line-height: 70px;
        font-style: normal;
        color: #fff;
        font-size: 40px;
        padding-top: 3%;
      }

      .header-hero .entry-header p {
        font-size: 18px;
        color: #b7bde0;
        font-weight: 300;
        line-height: 1.55em;
        margin: 0px auto;
      }
    </style>
  </head>
  <body style="font-family: 'Times New Roman'">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-2">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-xjhWGEF2CcM%2FT4GYz7ukhFI%2FAAAAAAAAFj0%2FYBVn8Czp6Vc%2Fs1600%2FLOGO%2BKOTA%2BPADANG.png&f=1&nofb=1"
          class="rounded float-left"
          alt="Responsive image"
          height="120px"
        />
      </div>
      <div class="col-md-6 text-center">
        <h3>Pemerintah Kota Padang</h3>
        <h2>Dinas Perpustakaan dan Kearsipan Kota Padang</h2>
        <div
          style="font-family: 'Times New Roman'; font-size: 12px; color: black"
        >
          Jalan Jendral. Sudirman No.1 Padang 25111 Telp (0751)-8950251 / Fax
          (0751)-811413
        </div>
        <div
          style="font-family: 'Times New Roman'; font-size: 10px; color: red"
        >
          e-mail : dns.perpustakaan.kearsipan.pdg@gmail.com website:
          www.padang.go.id
        </div>
      </div>
    </div>
    <hr
      style="
        height: 2px;
        border-width: 4px;
        color: black;
        background-color: black;
      "
    />
    <h2 class="text-center">Formulir Pendaftaran Anggota</h2>
    <div class="h5">
      No.Pendaftaran: ${data.member_no} <br />
      Pengembalian formulir tanggal:
      .................................................................................
      No. Anggota:.....................
      <div class="row py-3">
        <div class="col-md-3">Nama</div>
        <div class="col-md-9">: ${capital(data.nama)}</div>
        <div class="col-md-3">Tempat / Tanggal Lahir</div>
        <div class="col-md-9">: ${capital(data.tempat_lahir)} / ${
    data.tanggal_lahir
  }</div>
        <div class="col-md-3">Alamat Tetap</div>
        <div class="col-md-9">: ${capital(data.alamat)}</div>
        <div class="col-md-3">No. Telp / Hp</div>
        <div class="col-md-9">: ${capital(data.telepon_no)}</div>
        <div class="col-md-3">Pendidikan / Pekerjaan</div>
        <div class="col-md-9">: ${data.pekerjaan}</div>
        <div class="col-md-3">Nama Instansi</div>
        <div class="col-md-9">: ${capital(data.nama_instansi)}</div>
      </div>

      Mendaftar sebagai anggota dan menggunakan fasilitas perpustakaan dan saya
      berjanji akan menaati segala peraturan yang berlaku di Dinas Perpustakaan
      dan Kearsipan Kota Padang.
      <div class="row py-3">
        <div class="col-md-9"></div>
        <div class="col-md-3">Padang,...............20....</div>
      </div>
      <div class="row py-5 text-center">
        <div class="col-md-3">Yang Menjamin</div>
        <div class="col-md-6"></div>
        <div class="col-md-3">Yang Memohon</div>
      </div>
      <div class="row pt-5 text-center">
        <div class="col-md-3">(......................................)</div>
        <div class="col-md-6"></div>
        <div class="col-md-3">(${capital(data.nama)})</div>
      </div>

      <hr
        style="
          height: 2px;
          border-width: 4px;
          color: black;
          background-color: black;
        "
      />

      <h2 class="text-center">Persyaratan Anggota</h2>
      <ul>
        <li>Berdomisili kota Padang</li>
        <li>Mengisi formulir Pendaftaran</li>
        <li>Melampirkan photocopy kartu identitas yang masih berlaku</li>
        <li>Kartu keanggotaan hanya berlaku bagi pemilik</li>
        <li>Maksimal meminjam 3 buku</li>
        <li>Mengganti buku yang hilang ketika dipinjam</li>
      </ul>
      <h2 class="text-center">Tata Tertib Pengunjung</h2>
      <ul>
        <li>Mengisi formulir tamu</li>
        <li>
          Menitipkan barang bawaan pada locker yang telah disediakan dan harap
          dikunci
        </li>
        <li>Dilarang membawa jaket, tas, topi, dan helm</li>
        <li>Tidak diizinkan makan, minum, dan merokok</li>
        <li>
          Tidak diizinkan mencoret, melipat, menstabilo dan merobek koleksi
          perpustakaan
        </li>
        <li>
          Meletakkan kembali buku yang telah dibaca sesuai dengan kode
          klasifikasinya
        </li>
      </ul>
    </div>
  </body>

`;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await sleep(3000);
  window.print();
};

export { main, regis, book, pageForm };
