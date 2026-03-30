import { useEffect, useState } from "react";

function Appoo() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/system/webdev/prova/newfile.html")  // se redirige al Ignition gracias al proxy
      .then(res => res.json())            // JSON con la clave "html"
      .then(data => setHtml(data.html))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Contenido desde aaaaaa Ignition</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default Appoo;
