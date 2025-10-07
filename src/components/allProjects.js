import projectsData from "../content/projects.json";
import githubIcon from "../assets/images/github-original.svg";

export function allProjects() {
  const container = document.createElement("div");
  container.className = "section-container scroll-mt-24 pt-2";
  container.id = "all-projects";

  const contentContainer = document.createElement("div");
  contentContainer.className = "section-content w-full";

  // Page title
  const title = document.createElement("h1");
  title.textContent = "All Projects";
  title.className = "section-title";

  // Subtitle
  const subtitle = document.createElement("p");
  subtitle.textContent = "The full archive of projects and associated technologies that I have completed so far.";
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
      <th class="border-b border-gray-300 px-4 py-4 text-left font-semibold w-1/3">Project Name</th>
      <th class="border-b border-gray-300 px-4 py-4 text-left font-semibold w-2/5">Description</th>
      <th class="border-b border-gray-300 px-4 py-4 text-left font-semibold w-1/6">Technologies</th>
      <th class="border-b border-gray-300 px-4 py-4 text-left font-semibold w-1/12">GitHub repo</th>
    </tr>
  `;

  // Table body
  const tbody = document.createElement("tbody");
  
  // Populate table with all projects
  projectsData.projects.forEach((project, index) => {
    const row = document.createElement("tr");
    row.className = "bg-transparent";
    
    const projectLink = project.HTMLlink && project.HTMLlink[0] ? project.HTMLlink[0] : "#";
    const ghPageLink = project.ghPage && project.ghPage[0] ? project.ghPage[0] : "#";
    const technologies = project.tags ? project.tags.join(", ") : "";
    
    row.innerHTML = `
      <td class="border-b border-gray-300 px-4 py-4 font-medium">
        <div class="flex items-start gap-1">
          <a href="${ghPageLink}" target="_blank" class="text-red-600 hover:text-orange-300 font-medium transition-colors duration-200 group leading-tight inline">
            ${project.title}
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 -960 960 960" class="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 text-red-600 group-hover:text-orange-300 ml-1" style="margin-top: 2px;">
            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344z"/>
          </svg>
        </div>
      </td>
      </td>
      <td class="border-b border-gray-300 px-4 py-4">${project.description}</td>
      <td class="border-b border-gray-300 px-4 py-4">
        <div class="flex flex-wrap gap-1">
          ${project.tags.map(tag => `<span class="px-2 py-1 ${tag.toLowerCase() === 'game' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} text-xs rounded">${tag}</span>`).join('')}
        </div>
      </td>
      <td class="border-b border-gray-300 px-4 py-4">
        <a href="${projectLink}" target="_blank" class="inline-block hover:opacity-75 transition-opacity duration-200">
          <img src="${githubIcon}" alt="GitHub" class="w-6 h-6">
        </a>
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
  backLink.textContent = "< Back to Home";
  backLink.className = "inline-flex items-center gap-2 font-semibold text-lg text-red-600 hover:text-orange-300 transition-colors duration-300 hover:underline";
  
  backContainer.appendChild(backLink);

  contentContainer.appendChild(title);
  contentContainer.appendChild(subtitle);
  contentContainer.appendChild(tableContainer);
  contentContainer.appendChild(backContainer);
  container.appendChild(contentContainer);

  return container;
}