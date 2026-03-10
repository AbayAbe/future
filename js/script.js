// 1. Inisialisasi Audio
const music = document.getElementById("bgMusic");
let isPlaying = false;

// Fungsi untuk memutar musik (dipicu saat user klik layar atau hover)
function playMusic() {
    if (!isPlaying && music) {
        music.play().catch(e => console.log("Menunggu interaksi untuk musik..."));
        music.volume = 0.5; // Set volume ke 50%
        isPlaying = true;
    }
}

// 2. Fungsi Tombol "No" Mengelak (Ditingkatkan)
function moveButton() {
    playMusic(); // Musik jalan saat dia mulai mencoba klik "No"
    var button = document.getElementById("noBtn"); // Pastikan ID sesuai di HTML

    // Menghitung batas agar tombol tidak keluar layar
    var x = Math.random() * (window.innerWidth - button.offsetWidth - 20);
    var y = Math.random() * (window.innerHeight - button.offsetHeight - 20);

    button.style.position = "fixed"; // Pakai fixed agar tetap mengejar meski di-scroll
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.zIndex = "999";
}

// 3. Tambahkan Event Listener ke tombol "No"
document.getElementById("noBtn").addEventListener("mouseover", moveButton);
document.getElementById("noBtn").addEventListener("touchstart", moveButton); // Supaya lincah di HP juga

// 4. Efek Bintang di Awal
function createStars() {
    for (let i = 0; i < 20; i++) {
        let star = document.createElement("div");
        star.innerHTML = "⭐";
        star.className = "particle"; // Gunakan class CSS yang sudah kita buat

        star.style.left = Math.random() * 100 + "vw";
        star.style.position = "fixed";
        star.style.top = "-50px";
        star.style.animation = `fall ${Math.random() * 5 + 5}s linear forwards`;

        document.body.appendChild(star);
    }
}

// 5. Fungsi Yes Clicked (Memunculkan Modal + Hati)
function yesClicked() {
    playMusic();
    
    // Munculkan Modal daripada Alert biasa agar lebih cantik
    document.getElementById("modal").style.display = "flex";

    // Efek Hati
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.className = "particle";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.position = "fixed";
        heart.style.top = "-50px";
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(heart);
    }
}

// 6. Fungsi Tutup Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// 7. Efek Fade-in Teks (Agar Dramatis)
const ids = ["line1", "line2", "line3", "line4", "line5", "line6", "line7", "line8", "line9"];
window.onload = () => {
    createStars();
    ids.forEach((id, i) => {
        setTimeout(() => {
            const el = document.getElementById(id);
            if(el) el.style.opacity = 1;
        }, i * 1000);
    });
};
