function articlesList() {

    let inputElement = document.getElementById("createTitle");
    let textContent = document.getElementById("createContent");

    let title = inputElement.value;
    let content = textContent.value;

    if(title !== "" && content !== "") {
        inputElement.value = "";
        textContent.value = "";

        let articlesSection = document.getElementById("articles");
        articlesSection.innerHTML += `<article><h3>${title}<h3><p>${content}</p></h3>article>`;
    }
}