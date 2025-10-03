export function createProjectCard({ 
  image = "https://via.placeholder.com/400x250/6b7280/ffffff?text=Project+Image", 
  title = "Project Title", 
  description = "Project description goes here. This is a brief overview of what the project does and its key features.", 
  tags = ["JavaScript", "React", "CSS"] 
}) {
  
  const card = document.createElement("div");
  card.className = "flex bg-white overflow-hidden mb-6 max-w-4xl h-64";

  // Left half - Image
  const imageContainer = document.createElement("div");
  imageContainer.className = "w-1/2 h-full";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.className = "w-full h-full object-cover";

  imageContainer.appendChild(img);

  // Right half - Content
  const contentContainer = document.createElement("div");
  contentContainer.className = "w-1/2 p-6 flex flex-col justify-between";

  // Title section
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.className = "text-xl font-bold mb-3 text-gray-900";

  // Text section
  const textElement = document.createElement("p");
  textElement.textContent = description;
  textElement.className = "text-gray-600 text-sm leading-relaxed mb-4 flex-grow";

  // Metadata tags section
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "flex flex-wrap gap-2";

  tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.className = "px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full";
    tagsContainer.appendChild(tagElement);
  });

  // Assemble content
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(textElement);
  contentContainer.appendChild(tagsContainer);

  // Assemble card
  card.appendChild(imageContainer);
  card.appendChild(contentContainer);

  return card;
}