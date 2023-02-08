/* ------------ Commentaires ------------ */

// Le .then attend la ligne du dessus
// Le response correspond à un nom de variable, on peut mettre ce qu'on veut
// Ensuite crée un tableau qui prend les datas qu'on va stocker dans canap et on apelera ensuite chaque valeur grace au dollar

/* ------------ JavaScript de l'index ------------ */

fetch("http://localhost:3000/api/products")

    .then((response) => response.json()) // return le tableau data[]
    
    .then(data => data.map(canap =>                                             
    `                                           
        <a href="./product.html?id=${canap._id}">                                         
            <article>
                <img src="${canap.imageUrl}" alt="${canap.altTxt}">
                <h3 class="productName">${canap.name}</h3>
                <p class="productDescription">${canap.description}</p>
            </article>
        </a>
    `
    )) // return le tableau HTML[]
    
    .then(html => document.getElementById("items").innerHTML = html.join('')); // Affiche le HTML généré au bon endroit dans le document HTML.
    // Lien avec le HTML, va faire le lien pour chaque id, et l'insérer dans l'items.
    // Inner HTML est la pour rafraichir la page. le html.join permet de choisir comment vont être afficher les elements des items
    // ici on met rien car les elements sont deja positionné, si on met un caractère il se metra entre les elements.