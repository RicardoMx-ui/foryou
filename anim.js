// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I wanna be your vacuum cleaner", time: 18 },
  { text: "Breathing in your dust", time: 21 },
  { text: "I wanna be your Ford Cortina", time: 25 },
  { text: "I will never rust", time: 28 },
  { text: "If you like your coffee hot", time: 32 },
  { text: "Let me be your coffee pot", time: 36 },
  { text: "You call the shots, babe", time: 39 },
  { text: "I just wanna be yours", time: 42 },
  { text: "Secrets I have held in my heart", time: 46 },
  { text: "Are harder to hide than I thought", time: 50 },
  { text: "Maybe I just wanna be yours", time: 53 },
  { text: "I wanna be yours, I wanna be yours", time: 56 },
  { text: "Wanna be yours", time: 62 },
  { text: "Wanna be yours", time: 66 },
  { text: "Wanna be yours", time: 69 },
  { text: "Let me be your leccy meter", time: 74 },
  { text: "And I'll never run out", time: 78 },
  { text: "Let me be the portable heater", time: 81 },
  { text: "That you'll get cold without", time: 85 },
  { text: "I wanna be your setting lotion", time: 88 },
  { text: "Hold your hair in deep devotion", time: 92 },
  { text: "At least as deep as the Pacific Ocean", time: 96 },
  { text: "Now I wanna be yours", time: 99 },
  { text: "Secrets I have held in my heart", time: 103 },
  { text: "Are harder to hide than I thought", time: 106 },
  { text: "Maybe I just wanna be yours", time: 110 },
  { text: "I wanna be yours, I wanna be yours", time: 113 },
  { text: "Wanna be yours", time: 119 },
  { text: "Wanna be yours", time: 122 },
  { text: "Wanna be yours", time: 126 },
  { text: "Wanna be yours", time: 129 },
  { text: "Wanna be yours", time: 133 },
  { text: "Wanna be yours", time: 136 },
  { text: "Wanna be yours", time: 140 },
  { text: "I wanna be your vacuum cleaner", time: 145 },
  { text: "Breathing in your dust", time: 149 },
  { text: "I wanna be your Ford Cortina", time: 152 },
  { text: "I will never rust", time: 156 },
  { text: "I just wanna be yours", time: 159 },
  { text: "I just wanna be yours", time: 162 },
  { text: "I just wanna be yours", time: 166 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < (lyricsData.find(l => l.time > line.time) || { time: Infinity }).time
  );

  if (currentLine) {
    // Muestra la línea inmediatamente y ocúltala antes de la siguiente línea
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Verifica la posición del audio cada 100ms para mayor precisión
setInterval(updateLyrics, 100); // Actualiza cada 100ms

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);


