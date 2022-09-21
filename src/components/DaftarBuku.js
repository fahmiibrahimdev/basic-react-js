const DaftarBuku = ({ buku, hapusBuku }) => {
  return (
    <div>
      <ul>
        {buku.map((data) => (
          <li key={data.id}>
            {data.judul} - {data.harga}
            <button
              className="px-4 py-3 bg-gray-50 rounded-lg mt-3 shadow-sm shadow-black ml-3"
              onClick={() => hapusBuku(data.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaftarBuku;
