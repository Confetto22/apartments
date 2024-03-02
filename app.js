const mobileMenuButton = document.querySelector(".mobile-menu-button");
const topBar = document.querySelector(".top")
const middleBar = document.querySelector(".middle")
const bottomBar = document.querySelector(".bottom")
const menuWindow = document.querySelector(".menu__window")
const closeMenuEl = document.querySelector(".closemenu__button")


let openMenu = () => {
  
  menuWindow.classList.toggle("slide__down")
  topBar.classList.toggle("bartop__transform")
  middleBar.classList.toggle("barmiddle__transform")
  bottomBar.classList.toggle("barbottom__transform")
}

mobileMenuButton.addEventListener("click", openMenu)

closeMenuEl.addEventListener("click", () => {
    menuWindow.classList.remove("slide__down")
  topBar.classList.remove("bartop__transform")
  middleBar.classList.remove("barmiddle__transform")
  bottomBar.classList.remove("barbottom__transform")
  
})














const accordionItemsEl = document.getElementsByClassName("accordion__item");
const accordionTitleText = document.querySelectorAll("accordion__title")


function main() {
  for (let item of accordionItemsEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click", function() {
      this.classList.toggle("active");
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) {
        this.lastElementChild.innerHTML = "<i class='bx bx-chevron-down'></i>";
        accDetails.style.maxHeight = null;
      } else {
          this.lastElementChild.innerHTML = "<i class='bx bx-chevron-up'></i>";
          
        accDetails.style.maxHeight = accDetails.scrollHeight + "px";
      }

      accHeader.classList.toggle("acc__head__transform")
    })
  }
  

  accordionTitleText.forEach((head) => {
    head.style.color = "red";
  })
}

main();





