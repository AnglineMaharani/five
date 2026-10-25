const intro = document.getElementById("intro");
const seeFlowerBtn = document.getElementById("seeFlowerBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const notesBtn = document.getElementById("notesBtn");
const notesModal = document.getElementById("notesModal");
const closeNotesBtn = document.getElementById("closeNotesBtn");
const closeNotesBottom = document.getElementById("closeNotesBottom");

// Tombol Lihat: munculkan bunga, musik, dan ikon Notes.
seeFlowerBtn.addEventListener("click", async () => {
  document.body.classList.remove("container");
  document.body.classList.add("opened");

  intro.classList.add("is-closing");

  window.setTimeout(() => {
    intro.hidden = true;
  }, 850);

  musicBtn.hidden = false;
  notesBtn.hidden = false;

  // Musik mulai saat pengguna menekan tombol Lihat.
  try {
    await bgMusic.play();
    musicBtn.textContent = "♫";
  } catch (error) {
    musicBtn.textContent = "♫";
    console.warn("Musik belum bisa diputar. Periksa file music/music.mp3.");
  }
});

// Tombol musik untuk mematikan atau menyalakan musik.
musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "♫";
    } catch (error) {
      musicBtn.textContent = "♫";
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫";
  }
});

// Membuka Notes saat ikon ditekan.
function openNotes() {
  notesModal.hidden = false;
  closeNotesBtn.focus();
}

// Menutup Notes.
function closeNotes() {
  notesModal.hidden = true;
  notesBtn.focus();
}

notesBtn.addEventListener("click", openNotes);
closeNotesBtn.addEventListener("click", closeNotes);
closeNotesBottom.addEventListener("click", closeNotes);

// Tutup Notes jika pengguna mengeklik area di luar surat.
notesModal.addEventListener("click", (event) => {
  if (event.target === notesModal) {
    closeNotes();
  }
});

// Tutup Notes dengan tombol Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !notesModal.hidden) {
    closeNotes();
  }
});