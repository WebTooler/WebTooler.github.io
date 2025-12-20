const container = document.getElementById("tools-container");

if (!container || typeof TOOL_CATEGORIES === "undefined") {
  console.error("Tools container or TOOL_CATEGORIES not found");
} else {
  TOOL_CATEGORIES.forEach(category => {
    const section = document.createElement("section");
    section.id = category.id;

    section.innerHTML = `
      <h2>${category.title}</h2>
      <p>${category.description}</p>
      <div class="tools">
        ${category.tools.map(tool => `
          <div class="tool">
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            ${
              tool.url
                ? `<a href="${tool.url}">Open Tool →</a>`
                : `<em>Coming soon</em>`
            }
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}
