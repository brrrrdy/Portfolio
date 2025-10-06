import footerContent from "../content/footer.json";

export function FooterNav() {
  const footer = document.createElement("footer");
  footer.className =
    "w-full bg-orange-800 text-white py-10 px-12 flex justify-between items-center mt-20";

  const text1 = document.createElement("div");
  text1.textContent = footerContent.footerText1;

  const text2 = document.createElement("div");
  text2.textContent = footerContent.footerText2;

  footer.appendChild(text1);
  footer.appendChild(text2);

  return footer;
}
