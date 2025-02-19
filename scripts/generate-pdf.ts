import { chromium } from "playwright";
import { writeFile } from "fs/promises";

const generatePDF = async (language: string) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/${language}`);
  await page.waitForTimeout(1000);

  const path = `cv-${language}.pdf`;
  const pdfBuffer = await page.pdf({ path, format: "A4" });
  await browser.close();
  console.log(`PDF generated successfully: ${path}`);

  await writeFile(path, pdfBuffer);
};

generatePDF("en");
generatePDF("ru");
