// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// seleziono la lista UL
const listUl = document.querySelector(".listaspesa");

// stilo la lista
const spesa = ["pasta", "uova", "pane", "passata", "latte"];
let i = 0;

// creo un ciclo while
    while(i < spesa.length) {
    console.log(spesa[i]);
    let spesaI = spesa[i];

    // creo LI
    const elementLi = document.createElement("li");

    // assegno gli elemeti spesa a LI
    elementLi.append(spesaI);

    // assegno a UL
    listUl.append(elementLi);
    i++;
}