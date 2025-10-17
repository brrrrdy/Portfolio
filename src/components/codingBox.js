export function CodingBox() {
  const container = document.createElement("div");
  container.className =
    "bg-gray-900 rounded-lg p-4 font-mono text-sm w-96 h-60 mx-auto shadow-lg";

  // Terminal header
  const header = document.createElement("div");
  header.className = "flex items-center mb-3 pb-2 border-b border-gray-700";

  const dots = document.createElement("div");
  dots.className = "flex gap-2";
  ["bg-red-500", "bg-yellow-500", "bg-green-500"].forEach((color) => {
    const dot = document.createElement("div");
    dot.className = `w-3 h-3 rounded-full ${color}`;
    dots.appendChild(dot);
  });

  const title = document.createElement("span");
  title.className = "text-gray-400 ml-4 text-xs";
  title.textContent = "portfolio.js";

  header.appendChild(dots);
  header.appendChild(title);

  // Code content
  const codeContainer = document.createElement("div");
  codeContainer.className = "text-green-400 h-44 overflow-hidden";

  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: '  name: "Tom Alvarez",', delay: 800 },
    { text: '  role: "Full Stack Developer",', delay: 1600 },
    { text: '  skills: ["JavaScript", "React", "Node.js"],', delay: 2400 },
    { text: '  passion: "Building amazing web apps"', delay: 3200 },
    { text: "};", delay: 4000 },
    { text: "", delay: 4500 },
    { text: 'console.log("Welcome to my portfolio!");', delay: 5000 },
  ];

  // Cursor element
  const cursor = document.createElement("span");
  cursor.className = "animate-pulse text-green-400";
  cursor.textContent = "|";

  container.appendChild(header);
  container.appendChild(codeContainer);

  // Typing animation
  let currentLine = 0;
  let currentChar = 0;

  function typeCode() {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];

      if (currentChar === 0) {
        // Create new line element
        const lineElement = document.createElement("div");
        lineElement.className = "mb-1";
        codeContainer.appendChild(lineElement);
      }

      const currentLineElement = codeContainer.lastElementChild;

      if (currentChar < line.text.length) {
        // Add next character
        currentLineElement.textContent = line.text.substring(
          0,
          currentChar + 1
        );
        currentChar++;
        setTimeout(typeCode, 50); // Typing speed
      } else {
        // Move to next line
        currentLine++;
        currentChar = 0;
        setTimeout(
          typeCode,
          codeLines[currentLine]?.delay - codeLines[currentLine - 1]?.delay ||
            500
        );
      }
    } else {
      // Animation complete, add cursor
      codeContainer.appendChild(cursor);

      // Restart animation after delay
      setTimeout(() => {
        codeContainer.innerHTML = "";
        currentLine = 0;
        currentChar = 0;
        typeCode();
      }, 3000);
    }
  }

  // Start animation
  setTimeout(typeCode, 500);

  return container;
}
