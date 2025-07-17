# Taller NPM - Cifrado Seguro de Datos con ncrypt-js

## ✨ Descripción del Problema

En muchos proyectos y aplicaciones es necesario manejar información sensible, como contraseñas, tokens o datos personales. Guardar estos datos sin cifrar representa un gran riesgo de seguridad. Esta aplicación de consola resuelve ese problema permitiendo **cifrar y descifrar datos** de forma fácil y segura desde la terminal.

## 📚 Librería Utilizada

**ncrypt-js**
Una librería ligera que permite cifrar y descifrar objetos completos en formato JSON usando AES-256-CBC de forma segura.

* Nombre: `ncrypt-js`
* Link oficial: [https://www.npmjs.com/package/ncrypt-js](https://www.npmjs.com/package/ncrypt-js)

### ✅ Justificación:

* Permite cifrar objetos completos y no solo strings.
* Usa AES-256-CBC, un estándar seguro y confiable.
* Fácil de usar y entender.
* Compatible con `dotenv` para manejar claves secretas.

---

## ⚙️ Implementación

La aplicación está desarrollada en `Node.js` y ofrece un menú interactivo con 3 opciones principales:

### 1. Cifrar datos

El usuario ingresa datos en formato JSON y se cifran usando `ncrypt-js`.

### 2. Descifrar datos

El usuario pega un texto cifrado previamente, y la app muestra el objeto original.

### 3. Salir

Finaliza la aplicación.

### Archivos Clave:

* `main.js`: Archivo principal con la lógica y el menú.
* `.env`: Contiene la clave secreta para el cifrado.

---

## 📋 Instalación y Uso

### 1. Clona el repositorio

```bash
git clone https://github.com/usuario/taller-npm-cifrado.git
cd taller-npm-cifrado
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura el archivo `.env`

Crea un archivo `.env` en la raíz con el siguiente contenido:

```
SECRET=claveUltraSegura123
```

### 4. Ejecuta la aplicación

```bash
node main.js
```

---

## 🎞️ Video Explicativo

En este video se explica:

* El problema que resuelve la app
* La librería utilizada y su funcionamiento
* Demostración en consola del cifrado y descifrado


---

## 🚀 Tecnologías Usadas

* Node.js
* ncrypt-js
* readline-sync (para entrada de datos por consola)

---

## 🌟 Autor

Juan David Bermeo Castro

