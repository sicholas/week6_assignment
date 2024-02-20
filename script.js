const form = document.getElementById("submitBlog");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;

    const newDiv = document.createElement('div');

    // Create an h2 element
    const newH2 = document.createElement('h2');
    newH2.textContent = `${title}`;

    const newH4 = document.createElement('h4');
    newH4.textContent = `Author: ${author}, Date: ${new Date().toLocaleDateString()}`;

    // Create a p element
    const newP = document.createElement('p');
    newP.textContent = content;

    // Append the h2 and p elements to the div
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newP);

    // Append the new div to the body
    document.body.appendChild(newDiv);
});

