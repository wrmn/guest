import { pageForm } from "../view/main";

const regisPage = `
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <form id="formElem">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Nama</label>
              <input type="text" class="form-control" id="nama" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Tempat / Tanggal Lahir</label>
              <input type="text" class="form-control" id="tempat_lahir" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="form-group">
              <label>&nbsp;</label>
              <input type="date" class="form-control" id="tanggal_lahir" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label>Alamat</label>
              <input type="text" class="form-control" id="alamat" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="posForm">Pekerjaan</label>
              <select class="form-control" id="job_id"></select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Nama Instansi</label>
              <input type="text" class="form-control" id="nama_instansi" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Nomor Telepon</label>
              <input type="text" class="form-control" id="telepon_no" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Nomor Identitas</label>
              <input type="text" class="form-control" id="identitas_no" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
              oninput="this.setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-md-6">
            <label>Pas Foto</label>
            <input type="file" id="foto_file" class="form-control" accept="image/*" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
            oninput="this.setCustomValidity('')"/>
          </div>
          <div class="col-md-6">
            <label>Kartu Identitas</label>
            <input type="file" id="identitas_file" class="form-control" accept="image/*" required oninvalid="this.setCustomValidity('Data dibutuhkan')"
            oninput="this.setCustomValidity('')"/>
          </div>
        </div>
        <br />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="agreement" 
            required
          />
          <label class="form-check-label" for="flexCheckDefault">
            Saya setuju dengan persyaratan member Perpustakaan Kota Padang
          </label>
        </div>
        <br />
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <div class="form-group pull-right">
              <button class="btn btn-success" type="submit">Daftar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
`;

const regisFunct = () => {
  jobFiller();
  formElem.onsubmit = async (e) => {
    e.preventDefault();
    const data = await registerPost();
    console.log(data);
    const url = "http://localhost:8000/api/register";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    let result = await response.json();
    if (result.ok == "ok") {
      pageForm(result.data);
    } else {
      alert(
        `data yang dimasukkan tidak benar, ${JSON.stringify(
          result.fail,
          null,
          4
        )
          .replaceAll("{", "")
          .replaceAll("}", "")
          .replaceAll("[", "")
          .replaceAll("]", "")}`
      );
    }
  };
};

const jobFiller = async () => {
  const jobForm = document.getElementById("job_id");
  const url = "http://localhost:8000/api/jobs";
  const response = await fetch(url);
  let data = await response.json();
  jobForm.innerHTML = "";

  data.forEach((job) => {
    const element = `<option value="${job["job_id"]}">
      ${job["job_id"]}.${job["pekerjaan"]}
      </option>`;
    jobForm.innerHTML += element;
  });
};

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const registerPost = async () => {
  const nama = document.getElementById("nama").value;
  const tempatLahir = document.getElementById("tempat_lahir").value;
  const tanggalLahir = document.getElementById("tanggal_lahir").value;
  const alamat = document.getElementById("alamat").value;
  const pekerjaan = document.getElementById("job_id").value;
  const namaInstansi = document.getElementById("nama_instansi").value;
  const nomorTelepon = document.getElementById("telepon_no").value;
  const nomorIdentitas = document.getElementById("identitas_no").value;
  const agreementVal =
    document.getElementById("flexCheckDefault").value == "on";

  let requestData, dataPhoto, dataIdentitas;
  var file = document.getElementById("foto_file").files[0];
  var reader = new FileReader();
  reader.onload = () => {
    dataPhoto = reader.result;
  };
  reader.readAsDataURL(file);

  var file2 = document.getElementById("identitas_file").files[0];
  var reader2 = new FileReader();
  reader2.onload = () => {
    dataIdentitas = reader2.result;
  };
  reader2.readAsDataURL(file2);

  await waitFor(1500);

  requestData = {
    nama: `${nama}`,
    tempatLahir: `${tempatLahir}`,
    tanggalLahir: `${tanggalLahir}`,
    alamat: `${alamat}`,
    pekerjaan: `${pekerjaan}`,
    namaInstansi: `${namaInstansi}`,
    nomorTelepon: `${nomorTelepon}`,
    nomorIdentitas: `${nomorIdentitas}`,
    agreement: agreementVal,
    fotoFile: dataPhoto,
    identitasFile: dataIdentitas,
  };
  return requestData;
};

export { regisPage, regisFunct };
