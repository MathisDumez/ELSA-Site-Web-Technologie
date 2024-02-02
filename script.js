// this function will be called when a button is clicked
let changeLang = (languageCode) => {
    document.documentElement.setAttribute("lang", languageCode);
    let contentsToHide;
    if (languageCode == "fr"){
        contentsToHide = document.querySelectorAll(".en");
    }else{
        contentsToHide = document.querySelectorAll(".fr");
    }
    for (let contentToHide of contentsToHide) {
        contentToHide.style.display = 'none';
    }
    let contents = document.querySelectorAll("." + languageCode);
    for (let content of contents) {
        content.style.display = 'block';
        console.log(content.style.display);
    }
};