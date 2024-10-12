// script.js
export function toggleSkills() {
    const skillsSection = document.getElementById("skills");
    const toggleButton = document.getElementById("toggle-skills");
    toggleButton?.addEventListener("click", () => {
        if (skillsSection?.classList.contains("hidden")) {
            skillsSection.classList.remove("hidden");
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsSection?.classList.add("hidden");
            toggleButton.textContent = "Show Skills";
        }
    });
}
