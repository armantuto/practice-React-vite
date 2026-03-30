import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

function DetectarNumeros() {
  const webcamRef = useRef(null);
  const [resultado, setResultado] = useState("");

  const capturarYDetectar = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    const { data: { text } } = await Tesseract.recognize(
      imageSrc,
      "eng",
      {
        tessedit_char_whitelist: "0123456789"
      }
    );

    setResultado(text);
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      <button onClick={capturarYDetectar}>
        Detectar Números
      </button>

      <h2>Números detectados: {resultado}</h2>
    </div>
  );
}

export default DetectarNumeros;
