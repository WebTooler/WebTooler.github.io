document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tools-container");

  if (!container) {
    container.innerHTML = "<p>Container not found</p>";
    return;
  }

  if (typeof TOOL_CATEGORIES === "undefined") {
    container.innerHTML = "<p>Tool data not loaded</p>";
    return;
  }

  TOOL_CATEGORIES.forEach(category => {
    const section = document.createElement("section");
    section.style.marginBottom = "60px";

    let toolsHTML = "";

    category.tools.forEach(tool => {
      toolsHTML += `
        <div class="tool">
          <h3>${tool.name}</h3>
          <p>${tool.desc}</p>
          ${tool.url ? `<a href="${tool.url}">Open Tool →</a>` : `<em>Coming soon</em>`}
        </div>
      `;
    });

    section.innerHTML = `
      <h2 style="color:#38bdf8;">${category.title}</h2>
      <p>${category.description}</p>
      <div class="tools">${toolsHTML}</div>
    `;

    container.appendChild(section);
  });
});
