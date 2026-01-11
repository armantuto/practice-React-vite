import { useEffect, useState } from "react";

function Api() {
  const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

function Loadingg() {
  return <p>Cargando...</p>;
}
useEffect(() => {
  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Error al cargar usuarios");

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
   setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 segundos(false);
    }
  };

  getUsers();
}, []);

  const userFiltrados = users.filter(usuario => usuario.name.toLowerCase().includes(search.toLowerCase()));
    if (loading) return <Loadingg />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div>
        
        <h1>usuarios</h1>
             <input
        type="text"
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
        {/* {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))} */}
      </div>
      <div>
        <h1>Usuarios por email</h1>
       { userFiltrados.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Api;
