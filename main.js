/*
//lado del usuario
//crea, borre, obtenga, actulizar
let request = require('request');
//se define promesa que encapsule  la peticion
let URI = "/api/v1/authors/";
let URL_base = "https://goodreads-devf-aaron.herokuapp.com";
let URL = URL_base + URI;
let jsonSend = {
    "name": "Molly",
    "last_name": "La loca",
    "nacionalidad": "MX",
    "biography": "Le gustan los tacos",
    "gender": "F",
    "age": 2
};
let crearUsuario = new Promise( (resolve, reject) => {
     //peticion tipo post usando modulo request
     request.post({ url: URL,formData: jsonSend}, (error, response, body) => {
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
     });
});
crearUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));



let urlObtenerUsuario = "/api/v1/authors/";
let URL_2 = URL_base + urlObtenerUsuario;
let obtener = new Promise( (resolve, reject) => {
    request.get(URL_2, (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
    });
});
obtener
    .then(usuario => console.log(usuario))
    .catch(error => console.log(error));



let urlBorrar = "/api/v1/authors/{id}/";
let URL_3 = URL_base + urlBorrar;
let borrarUsuario = new Promise( (resolve, reject) => {
    request.delete(URL_3, jsonSend, (error, response, body) => {
        response.statusCode == 204
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
    });
});

then(usuario2 => console.log(usuario2))
.catch(error => console.log(error));*/
console.log("Segundo commit");
