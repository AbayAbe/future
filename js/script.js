// 1. PENGATURAN MUSIK (Global)
const music = document.getElementById("bgMusic");

// Fungsi untuk sinkronisasi waktu musik antar halaman
function syncMusic() {
    if (!music) return;

    // Ambil posisi waktu terakhir dari localStorage
    const savedTime = localStorage.getItem("musicCurrentTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Mainkan musik otomatis (jika diizinkan browser)
    music.volume = 0.5;
    music.play().catch(() => {
        console.log("Menunggu interaksi user untuk memutar musik...");
    });

    // Simpan posisi waktu setiap detik
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicCurrentTime", music.currentTime);
        }
    }, 1000);
}

// 2. LOGIKA TOMBOL "NO" MENGELAK
function moveButton() {
    const button = document.getElementById("noBtn") || document.getElementById("no");
    if (!button) return;

    // Pastikan musik menyala saat dia berinteraksi
    if (music && music.paused) music.play();

    const x = Math.random() * (window.innerWidth - button.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 50);

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.zIndex = "9999";
}

// 3. EFEK PARTIKEL (Bintang/Hati/Lainnya)
function createParticles(emoji, count = 15, className = "star") {
    for (let i = 0; i < count; i++) {
        let p = document.createElement("div");
        p.innerHTML = emoji;
        p.className = className; // Menggunakan class dari style.css
        
        p.style.left = Math.random() * 100 + "vw";
        p.style.position = "fixed";
        p.style.bottom = "-50px"; // Mulai dari bawah
        p.style.animationDuration = (Math.random() * 5 + 5) + "s";
        
        document.body.appendChild(p);
        
        // Hapus elemen setelah animasi selesai agar tidak memberatkan browser
        setTimeout(() => p.remove(), 10000);
    }
}

// 4. FUNGSI KHUSUS CONFESS (Yes Clicked)
function yesClicked() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex";
        if (music) music.volume = 0.8; // Besarkan musik saat "Yes"
        createParticles("❤️", 30, "heart");
        createParticles("✨", 20, "star");
    }
}

function closeModal() {
    const modal = document.getElementById("modal") || document.getElementById("confirmModal") || document.getElementById("doubleCheckModal") || document.getElementById("farewellModal");
    if (modal) modal.style.display = "none";
}

// 5. INISIALISASI SAAT HALAMAN DIMUAT
window.onload = () => {
    syncMusic();

    // Jalankan efek fade-in teks jika ada (Khusus confess.html)
    const lineIds = ["line1", "line2", "line3", "line4", "line5", "line6", "line7", "line8", "line9"];
    lineIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            setTimeout(() => {
                el.style.opacity = 1;
            }, i * 1500);
        }
    });

    // Jalankan fungsi typing jika ada di halaman tersebut
    if (typeof type0 === "function") type0();
    if (typeof type1 === "function") type1();
    if (typeof type2 === "function") type2();
    if (typeof type3 === "function") type3();

    // Tambahkan event listener untuk tombol No secara otomatis jika ada
    const noBtn = document.getElementById("noBtn") || document.getElementById("no");
    if (noBtn) {
        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            moveButton();
        });
    }
};
