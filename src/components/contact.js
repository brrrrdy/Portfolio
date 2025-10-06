import cardContent from "../content/contact.json";

export function contact() {
  const contact = document.createElement("div");
  contact.className = "section-container scroll-mt-24";
  contact.id = "contact";

  const textContainer = document.createElement("div");
  textContainer.className = "section-content";

  const text1 = document.createElement("div");
  text1.textContent = cardContent.cardTitle;
  text1.className = "section-title";

  const text2 = document.createElement("div");
  text2.textContent = cardContent.cardText;
  text2.className = "section-subtitle";

  // Social links container
  const socialContainer = document.createElement("div");
  socialContainer.className = "mt-6 flex items-center gap-4";

  // LinkedIn link with inline SVG
  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/in/tom-alvarez-ryan-80423951/";
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
  linkedinLink.className = "flex items-center gap-2 transition-transform duration-200 hover:scale-110";

  const linkedinSvg = document.createElement("div");
  linkedinSvg.innerHTML = `
    <svg class="w-8 h-8 fill-red-600 hover:fill-red-500 transition-colors duration-200" viewBox="0 0 382 382">
      <path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0M118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666M341.91 330.654a9.247 9.247 0 0 1-9.246 9.246H286.73a9.247 9.247 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 0 1-9.246 9.246h-44.426a9.247 9.247 0 0 1-9.246-9.246V149.593a9.247 9.247 0 0 1 9.246-9.246h44.426a9.247 9.247 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472z"/>
    </svg>
  `;

  linkedinLink.appendChild(linkedinSvg);

  // GitHub link with inline SVG
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/brrrrdy"; 
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.className = "flex items-center gap-2 transition-transform duration-200 hover:scale-110";

  const githubSvg = document.createElement("div");
  githubSvg.innerHTML = `
    <svg class="w-8 h-8 fill-red-600 hover:fill-red-500 transition-colors duration-200" viewBox="0 0 128 128">
      <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
    </svg>
  `;

  githubLink.appendChild(githubSvg);

  // Email link with inline SVG
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:your.email@example.com"; 
  emailLink.className = "flex items-center gap-2 transition-transform duration-200 hover:scale-110";

  const emailSvg = document.createElement("div");
  emailSvg.innerHTML = `
    <svg class="w-8 h-8 fill-red-600 hover:fill-red-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
    </svg>
  `;

  emailLink.appendChild(emailSvg);

  socialContainer.appendChild(linkedinLink);
  socialContainer.appendChild(githubLink);
  socialContainer.appendChild(emailLink);

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  textContainer.appendChild(socialContainer);
  contact.appendChild(textContainer);

  return contact;
}