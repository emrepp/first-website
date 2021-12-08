

const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content")
const closeButton = document.getElementById("close");
const figures = document.getElementsByClassName("figure");


for (let i = 0; i < figures.length; i++) {

   
    let figureImage = figures[i].firstElementChild;
    let figureDescription = figures[i].lastElementChild;
    let text = figureDescription.textContent;

    let imageCopy = figureImage.cloneNode();
    let descriptionCopy = figureDescription.cloneNode();

    
    figureImage.addEventListener('click', function() {
       
        lightbox.style.display = 'flex';
        descriptionCopy.style.display = 'flex';
        descriptionCopy.textContent = text;

       
        lightboxContent.appendChild(imageCopy);
        lightboxContent.appendChild(descriptionCopy);
        
        
        closeButton.addEventListener('click', function() {

           
            lightbox.style.display = 'none';

            
            lightboxImage = lightboxContent.firstElementChild;
            lightboxDescription = lightboxContent.lastElementChild;
            
            lightboxContent.innerHTML = "";
        })
    })
}