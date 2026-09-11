document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("play", () => {
      document.querySelectorAll("video").forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
      });
    });
  });

  const copyButton = document.querySelector("[data-copy-target]");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const target = document.getElementById(copyButton.dataset.copyTarget);
      if (!target) return;
      const label = copyButton.querySelector("span");
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        label.textContent = "Copied";
        window.setTimeout(() => { label.textContent = "Copy"; }, 1600);
      } catch (error) {
        label.textContent = "Select text to copy";
      }
    });
  }
});
