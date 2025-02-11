import { chromium } from "playwright";
import fs from "fs";

const generatePDF = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.waitForTimeout(1000);

  const pdfBuffer = await page.pdf({ path: "cv.pdf", format: "A4" });
  await browser.close();
  console.log("PDF generated successfully: cv.pdf");

  fs.writeFileSync("cv.pdf", pdfBuffer);
};

generatePDF();
