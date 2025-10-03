import headerContent from "../content/header.json";

export function header() {
  const header = document.createElement("header");
  header.className = "w-full pl-50 flex justify-start items-start mb-20";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-center";

  const text1 = document.createElement("div");
  text1.textContent = headerContent.headerTitle;
  text1.className = "text-6xl font-bold mb-10";

  // Create animated subtitle container
  const animatedContainer = document.createElement("div");
  animatedContainer.className = "text-lg text-gray-500 flex items-center gap-2";

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
  const colors = ['text-red-600', 'text-orange-400', 'text-purple-600']; // Different color for each phrase
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
  header.appendChild(textContainer);

  return header;
}
