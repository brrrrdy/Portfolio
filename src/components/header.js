import headerContent from "../content/header.json";
import heroTomImage from "../assets/images/heroTom.webp";

export function header() {
  const header = document.createElement("header");
  header.className = "w-full relative flex items-start px-20 mb-10";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-start";

  const text1 = document.createElement("div");
  text1.textContent = headerContent.headerTitle;
  text1.className = "text-6xl font-bold mb-10 self-left";

  // Create animated subtitle container
  const animatedContainer = document.createElement("div");
  animatedContainer.className = "text-lg text-gray-500 pl-20 flex items-center gap-2 self-left";

  const staticText = document.createElement("span");
  staticText.textContent = "I am a ";

  const typingText = document.createElement("span");
  typingText.className = "text-red-600 font-bold min-w-[200px]";
  
  // Cursor element
  const cursor = document.createElement("span");
  cursor.textContent = "";
  cursor.className = "text-blue-600 animate-pulse";

  animatedContainer.appendChild(staticText);
  animatedContainer.appendChild(typingText);
  animatedContainer.appendChild(cursor);

  // Typing animation logic
  const phrases = ['full-stack developer', 'basketball player', 'pulpo enjoyer'];
  const colors = ['text-red-600', 'text-orange-400', 'text-purple-600'];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isTyping = true;
  let isDeleting = false;

  function typeAnimation() {
    const currentPhrase = phrases[currentPhraseIndex];
    const currentColor = colors[currentPhraseIndex];
    
    // Update color for current phrase
    typingText.className = `${currentColor} font-bold min-w-[200px]`;
    
    if (isTyping && !isDeleting) {
      // Typing forward
      if (currentCharIndex < currentPhrase.length) {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(typeAnimation, 80); // typing speed
      } else {
        // pause at end of phrase
        isTyping = false;
        setTimeout(() => {
          isDeleting = true;
          typeAnimation();
        }, 4000); // pause duration
      }
    } else if (isDeleting) {
      // Deleting backward
      if (currentCharIndex > 0) {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(typeAnimation, 20); // deleting speed
      } else {
        // Move to next phrase
        isDeleting = false;
        isTyping = true;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeAnimation, 500); // pause before next phrase
      }
    }
  }

  // Start the animation
  typeAnimation();

  textContainer.appendChild(text1);
  textContainer.appendChild(animatedContainer);

  // download my cv link below animated subtitle
  const downloadContainer = document.createElement("div");
  downloadContainer.className = "block text-left mt-30";
  
  const downloadLink = document.createElement("a");
  downloadLink.href = "#"; 
  downloadLink.className = "inline-flex items-center gap-2 font-semibold text-base text-red-600 hover:text-orange-300 transition-colors duration-300 hover:underline group border-2 border-red-400 p-2.5";
  
  const downloadText = document.createElement("span");
  downloadText.textContent = "download my cv";
  
  const downloadSvg = document.createElement("div");
  downloadSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -960 960 960" class="mt-1 transition-transform duration-300 group-hover:-translate-y-1.5"><path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368z"/></svg>`;
  
  downloadLink.appendChild(downloadText);
  downloadLink.appendChild(downloadSvg);
  downloadContainer.appendChild(downloadLink);
  textContainer.appendChild(downloadContainer);

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "absolute left-1/3 transform -translate-x-1/2 top-0 ml-50";
  
  const heroImage = document.createElement("img");
  heroImage.src = heroTomImage;
  heroImage.alt = "Hero Tom";
  heroImage.className = "w-50 h-auto object-contain border-4 border-black-600 transform rotate-3";
  
  imageContainer.appendChild(heroImage);

  header.appendChild(textContainer);
  header.appendChild(imageContainer);

  return header;
}
