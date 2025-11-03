document.addEventListener("DOMContentLoaded",()=>{
    const accBtns = document.querySelectorAll(".accordion-btn");
    accBtns.forEach(btn=>{
        btn.addEventListener("click",() => {
            btn.classList.toggle("active");
            const panel = btn.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    });
});

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

const testimonialsSection = document.getElementById("testimonials");
if (testimonialsSection) {
  const testimonials = [
    { name: "Jabu", text: "Mental Mania helped me overcome anxiety." },
    { name: "Jeanne", text: "The volunteers are kind and professional!" },
  ];
  testimonials.forEach(t => {
    const div = document.createElement("div");
    div.classList.add("testimonial");
    div.innerHTML = `<p>"${t.text}"</p><strong>- ${t.name}</strong>`;
    testimonialsSection.appendChild(div);
  });
}
