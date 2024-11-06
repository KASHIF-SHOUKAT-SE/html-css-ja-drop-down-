let arrow = document.querySelectorAll(".arrow")

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("ShowMenu");
    });   
}
let sidebar = document.querySelector(".sidebar");
let bxmenu = document.querySelector(".bx-menu");
bxmenu.addEventListener("click",()=>{
    sidebar.classList.toggle("close")
})
// console.log(bxmenu); 