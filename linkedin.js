window.open("https://www.linkedin.com/in/nicol%C3%A1s-safonov-931bb5292/", 'linkedin', "width=500, height=200, location=no, menubar=no, left=100, top=200");

console.log('URL: ' + window.location.href); //Devuelve la ubicación del archivo

console.log('Nombre de la página: ' + window.name); //Aparece vacío al no abrirse con window.open;

console.log(navigator.userAgent); 

console.log("Anchura y altura de la pantalla: " + screen.width + " - " + screen.height);
console.log("Anchura y altura utilizable de la pantalla: " + screen.availWidth + " - " + screen.availHeight);
console.log("Anchura y altura total de la ventana: " + window.outerWidth + " - " + window.outerHeight);
console.log("Anchura y altura úlil de la ventana: " + window.innerWidth + " - " + window.innerHeight);

window.print();

