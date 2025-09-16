import footerContent from "../content/footer.json";

export function FooterNav() {
  const footer = document.createElement("footer");
  footer.className =
    "w-full text-black py-4 mt-8 flex justify-between items-center px-8 text-sm";

  const text1 = document.createElement("div");
  text1.textContent = footerContent.footerText1;

  const text2 = document.createElement("div");
  text2.textContent = footerContent.footerText2;

  footer.appendChild(text1);
  footer.appendChild(text2);

  return footer;
}
