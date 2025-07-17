const { ncrypt } = require("ncrypt-js");

const secret = "claveUltraSegura123"; // Puedes cambiarla o ponerla en .env
const { encrypt, decrypt } = new ncrypt(secret);

const datos = { nombre: "Juan", clave: "miSecreta123" };

// 🔐 Cifrado
const cifrado = encrypt(datos);
console.log("Cifrado:", cifrado);

// 🔓 Descifrado
const descifrado = decrypt(cifrado);
console.log("Descifrado:", descifrado);
