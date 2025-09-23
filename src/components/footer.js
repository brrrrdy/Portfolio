import footerContent from "../content/footer.json";

export function FooterNav() {
  const footer = document.createElement("footer");
  footer.className =
    "fixed bottom-0 left-0 w-full bg-gray-800 text-white py-10 px-12 flex justify-between items-center";

  const text1 = document.createElement("div");
  text1.textContent = footerContent.footerText1;

  const text2 = document.createElement("div");
  text2.textContent = footerContent.footerText2;

  footer.appendChild(text1);
  footer.appendChild(text2);

  return footer;
}
