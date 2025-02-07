
"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Kabin Ghale
      Date: 5 February 2025

      Filename: js05.js
*/

window.addEventListener("load", setupGallery);

function setupGallery() {
   let imageCount = imgFiles.length;
   let galleryBox = document.getElementById("galleryBox");
   let currentSlide = 1;
   let isRunning = false;
   let favorites = [];
   let showRunning;
   
   let galleryTitle = document.createElement("h1");
   galleryTitle.id = "galleryTitle";
   galleryTitle.textContent = imgCaptions[currentSlide-1];
   galleryBox.appendChild(galleryTitle);
   
   let slideCounter = document.createElement("div");
   slideCounter.id = "slideCounter";
   slideCounter.textContent = currentSlide + " / " + imageCount;
   galleryBox.appendChild(slideCounter);

   let leftBox = document.createElement("div");
   leftBox.id = "leftBox";
   leftBox.innerHTML = "&#9664;";
   leftBox.onclick = moveToLeft;   
   galleryBox.appendChild(leftBox);
   
   let rightBox = document.createElement("div");
   rightBox.id = "rightBox";
   rightBox.innerHTML = "&#9654;";  
   rightBox.onclick = moveToRight;   
   galleryBox.appendChild(rightBox);
   
   let playPause = document.createElement("div");
   playPause.id = "playPause";
   playPause.innerHTML = "&#9199;";
   playPause.onclick = startStopShow;
   galleryBox.appendChild(playPause);
   
   let slideBox = document.createElement("div");
   slideBox.id = "slideBox";
   galleryBox.appendChild(slideBox);
   
   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createModal;
      slideBox.appendChild(image);
   }
   
   let favoritesContainer = document.createElement("div");
   favoritesContainer.id = "favoritesContainer";
   galleryBox.appendChild(favoritesContainer);
   
   function moveToRight() {
      let firstImage = slideBox.firstElementChild.cloneNode(true);
      firstImage.onclick = createModal;
      slideBox.appendChild(firstImage);
      slideBox.removeChild(slideBox.firstElementChild);
      currentSlide++;
      if (currentSlide > imageCount) {
         currentSlide = 1;
      }
      galleryTitle.textContent = imgCaptions[currentSlide-1];
      slideCounter.textContent = currentSlide + " / " + imageCount;
   }
   
   function moveToLeft() {
      let lastImage = slideBox.lastElementChild.cloneNode(true);
      lastImage.onclick = createModal;
      slideBox.removeChild(slideBox.lastElementChild);
      slideBox.insertBefore(lastImage, slideBox.firstElementChild);
      currentSlide--;
      if (currentSlide === 0) {
         currentSlide = imageCount;
      }
      galleryTitle.textContent = imgCaptions[currentSlide-1];
      slideCounter.textContent = currentSlide + " / " + imageCount;      
   }  
   
   function startStopShow() {
      if (isRunning) {
         window.clearInterval(showRunning);
         isRunning = false;
      } else {
         showRunning = window.setInterval(moveToRight, 2000);
         isRunning = true;
      }
   }
   
   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "activeModal";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);
      
      let modalImage = this.cloneNode(true);
      figureBox.appendChild(modalImage);
      
      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);

      let favoriteButton = document.createElement("button");
      favoriteButton.textContent = "❤ Add to Favorites";
      favoriteButton.style.borderRadius = "10px"
      favoriteButton.style.border = "none"
      favoriteButton.style.padding = "5px 10px";
      favoriteButton.style.backgroundColor = "#FE2712";
      favoriteButton.style.color = "#FFFFFF";
      favoriteButton.style.borderColor = "#FFFFFF";
      favoriteButton.style.cursor = "pointer";
      favoriteButton.addEventListener("mouseover", function() {
         favoriteButton.style.backgroundColor = "#FF7F10";
         favoriteButton.style.color = "#000000";

      }
      );
      favoriteButton.addEventListener("mouseout", function() {
         favoriteButton.style.backgroundColor = "#FE2712";
         favoriteButton.style.color = "#FFFFFF";
      }
      );
      

      favoriteButton.onclick = function() {
         if (favorites.length >= 5) {
            alert("You can only add up to 5 favorites. Remove one first.");
            return;
         }
         let favoriteImage = modalImage.cloneNode(true);
         favoriteImage.onclick = createModal;
         favorites.push(favoriteImage);
         updateFavorites();
      };
      figureBox.appendChild(favoriteButton);
      
      let closeBox = document.createElement("div");
      closeBox.id = "modalClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(modalWindow);
      }
      
      modalWindow.appendChild(closeBox);
      document.body.appendChild(modalWindow);
   }
   
   function updateFavorites() {
      favoritesContainer.innerHTML = "<br><h1>Favorites</h1><br>";
      favoritesContainer.style.fontFamily = "Times New Roman", "Times", "serifArial", "sans-serif";
      favoritesContainer.style.fontSize = "2em";
      favoritesContainer.style.color = "black";
      favorites.forEach((img, index) => {
         let favoriteItem = document.createElement("div");
         img.style.borderRadius = " 10px 0px 0px 10px"
         favoriteItem.appendChild(img);
         favoriteItem.style.display = "flex";
         favoriteItem.style.justifyContent = "top";
         favoriteItem.style.margin = "10px";
         
         favoriteItem.appendChild(img);

         let removeButton = document.createElement("button");
         removeButton.textContent = "Remove";
         removeButton.style.border = "none";
         removeButton.style.padding = "5px 10px";
         removeButton.style.cursor = "pointer";
         removeButton.style.height = "50px";
         removeButton.style.width= "50px";

         removeButton.style.borderRadius = " 0 10px 10px 0"
         removeButton.style.backgroundColor = "#FE2712";
         removeButton.style.color = "#FFFFFF";
         removeButton.innerHTML = "&#10006";
         removeButton.onclick = function() {
            favorites.splice(index, 1);
            updateFavorites();
         };
         favoriteItem.appendChild(removeButton);
         favoritesContainer.appendChild(favoriteItem);
      });
   }
}
