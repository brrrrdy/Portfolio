export function createProjectCard({ 
  image = "https://via.placeholder.com/400x250/6b7280/ffffff?text=Project+Image", 
  title = "Project Title", 
  description = "Project description goes here. This is a brief overview of what the project does and its key features.", 
  tags = ["JavaScript", "React", "CSS"] 
}) {
  
  const card = document.createElement("div");
  card.className = "flex bg-transparent overflow-hidden mb-0 ml-5max-w-4xl h-64";

  // Left half - Image with offset red border frame
  const imageContainer = document.createElement("div");
  imageContainer.className = "w-[280px] h-[180px] flex-shrink-0 relative p-3";

  // Red border frame (offset to bottom left)
  const borderFrame = document.createElement("div");
  borderFrame.className = "absolute top-6 left-0 w-[260px] h-[160px] border-2 border-red-500 z-0 bg-red-150";

  // Image container (positioned above the border frame)
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "relative z-10 w-[260px] h-[160px] bg-white";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.className = "w-full h-full object-contain transition-transform duration-200 hover:scale-105";

  imgWrapper.appendChild(img);
  imageContainer.appendChild(borderFrame);
  imageContainer.appendChild(imgWrapper);

  // Right half - Content
  const contentContainer = document.createElement("div");
  contentContainer.className = "flex-1 p-4 pl-8 flex flex-col";

  // Title section
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.className = "text-xl font-bold mb-3 text-gray-900";

  // Text section
  const textElement = document.createElement("p");
  textElement.textContent = description;
  textElement.className = "text-gray-600 text-sm leading-relaxed mb-2";

  // Metadata tags section
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "flex flex-wrap gap-2";

  tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    // Special styling for Game tag
    if (tag.toLowerCase() === 'game') {
      tagElement.className = "px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full";
    } else {
      tagElement.className = "px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full";
    }
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