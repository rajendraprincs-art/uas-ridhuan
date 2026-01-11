function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
});

.profile-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 5px solid #facc15;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
