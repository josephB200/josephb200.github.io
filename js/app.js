const menuInscriptionConexion = document.querySelector('.account-responsive');
const showModal = document.querySelector('.modalInscriptionConexion')
let isModalOpen = false;

function ShowModalInscriptionConexion (event){
    event.preventDefault();
    showModal.style.color = "blue";
}

menuInscriptionConexion.addEventListener("click", function ShowModalInscriptionConexion() {
    if (isModalOpen) {
    showModal.style.display = "none";
    isModalOpen = false;
    } else {
    showModal.style.display = "flex" ;
    isModalOpen = true;
    }
    });
