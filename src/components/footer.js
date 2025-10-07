import footerContent from "../content/footer.json";

export function FooterNav() {
  const footer = document.createElement("footer");
  footer.className =
    "w-full bg-orange-800 text-white py-10 px-12 flex justify-between items-start mt-20";

  // Left section - Repository link and Sitemap
  const leftSection = document.createElement("div");
  leftSection.className = "flex items-start gap-20";
  
  const repoText = document.createElement("div");
  repoText.textContent = footerContent.footerText1;
  repoText.className = "text-orange-200";
  
  // Sitemap links
  const sitemapLinks = document.createElement("div");
  sitemapLinks.className = "flex flex-col space-y-2";
  
  const links = [
    { text: "home", href: "/#top" },
    { text: "about me", href: "/#about" },
    { text: "projects", href: "/#projects" },
    { text: "projects archive", href: "/projects" },
    { text: "contact", href: "/#contact" }
  ];
  
  links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.href = link.href;
    linkElement.textContent = link.text;
    linkElement.className = "text-orange-200 hover:text-white transition-colors duration-300 text-sm";
    sitemapLinks.appendChild(linkElement);
  });
  
  leftSection.appendChild(repoText);
  leftSection.appendChild(sitemapLinks);

  // Middle section - Empty for spacing
  const middleSection = document.createElement("div");

  // Right section - Copyright
  const rightSection = document.createElement("div");
  rightSection.className = "flex flex-col";
  
  const text2 = document.createElement("div");
  text2.textContent = footerContent.footerText2;
  text2.className = "text-orange-200";
  rightSection.appendChild(text2);

  footer.appendChild(leftSection);
  footer.appendChild(middleSection);
  footer.appendChild(rightSection);

  return footer;
}
