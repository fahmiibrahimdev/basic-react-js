import "./css/style.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import DaftarBuku from "./components/DaftarBuku";
import Kontak from "./components/Kontak";
import Tentang from "./components/Tentang";

function App() {
  //
  const [buku, setBuku] = useState([
    { id: 1, judul: "Buku Tilawah", harga: 22000 },
    { id: 2, judul: "Buku Kimia", harga: 55000 },
    { id: 3, judul: "Buku Fisika", harga: 45000 },
    { id: 4, judul: "Buku Dongeng", harga: 30000 },
    { id: 5, judul: "Buku Doa Nabi", harga: 78000 },
  ]);

  const hapusBuku = (bukuId) => {
    const bukuBaru = buku.filter((data) => data.id !== bukuId);
    setBuku(bukuBaru);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<DaftarBuku buku={buku} hapusBuku={hapusBuku} />}
          />
          <Route exact path="/tentang" element={<Tentang />} />
          <Route exact path="/kontak" element={<Kontak />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
