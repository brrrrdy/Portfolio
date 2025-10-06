import projectsData from "../content/projects.json";

export function allProjects() {
  const container = document.createElement("div");
  container.className = "section-container scroll-mt-24";
  container.id = "all-projects";

  const contentContainer = document.createElement("div");
  contentContainer.className = "section-content w-full";

  // Page title
  const title = document.createElement("h1");
  title.textContent = "All Projects";
  title.className = "section-title";

  // Subtitle
  const subtitle = document.createElement("p");
  subtitle.textContent = "here are all my projects so far";
  subtitle.className = "section-subtitle mb-8 mt-4";

  // Table container
  const tableContainer = document.createElement("div");
  tableContainer.className = "w-full overflow-x-auto";

  // Create table
  const table = document.createElement("table");
  table.className = "w-full border-collapse";

  // Table header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr class="bg-transparent">
      <th class="border-b border-gray-300 px-4 py-2 text-left font-semibold">Project Name</th>
      <th class="border-b border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
      <th class="border-b border-gray-300 px-4 py-2 text-left font-semibold">Technologies</th>
      <th class="border-b border-gray-300 px-4 py-2 text-left font-semibold">GitHub repo</th>
    </tr>
  `;

  // Table body
  const tbody = document.createElement("tbody");
  
  // Populate table with all projects
  projectsData.projects.forEach((project, index) => {
    const row = document.createElement("tr");
    row.className = "bg-transparent";
    
    const projectLink = project.HTMLlink && project.HTMLlink[0] ? project.HTMLlink[0] : "#";
    const technologies = project.tags ? project.tags.join(", ") : "";
    
    row.innerHTML = `
      <td class="border-b border-gray-300 px-4 py-2 font-medium">${project.title}</td>
      <td class="border-b border-gray-300 px-4 py-2">${project.description}</td>
      <td class="border-b border-gray-300 px-4 py-2">
        <div class="flex flex-wrap gap-1">
          ${project.tags.map(tag => `<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">${tag}</span>`).join('')}
        </div>
      </td>
      <td class="border-b border-gray-300 px-4 py-2">
        <a href="${projectLink}" target="_blank" class="text-blue-600 hover:text-blue-800 underline">View Project</a>
      </td>
    `;
    
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);

  // Back to home link
  const backContainer = document.createElement("div");
  backContainer.className = "mt-8 text-center";
  
  const backLink = document.createElement("a");
  backLink.href = "/";
  backLink.textContent = "← Back to Home";
  backLink.className = "inline-flex items-center gap-2 font-semibold text-lg text-red-600 hover:text-orange-300 transition-colors duration-300 hover:underline";
  
  backContainer.appendChild(backLink);

  contentContainer.appendChild(title);
  contentContainer.appendChild(subtitle);
  contentContainer.appendChild(tableContainer);
  contentContainer.appendChild(backContainer);
  container.appendChild(contentContainer);

  return container;
}