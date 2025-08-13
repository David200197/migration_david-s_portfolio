import fs from "fs/promises";
import path from "path";
import Handlebars from "handlebars";
import { chromium } from "playwright";
import { title } from "process";

const baseDataFolder = path.join(
  process.cwd(),
  "src",
  "modules",
  "core",
  "data"
);
const cvPath = path.join(process.cwd(), "public", "cv");

const langs = ["en", "es"];

const getLocalData = async (lang, fileName) => {
  const data = await fs.readFile(
    path.join(baseDataFolder, lang, `${fileName}.json`),
    { encoding: "utf-8" }
  );
  return JSON.parse(data);
};

const getCommonData = async () => {
  const data = await fs.readFile(path.join(baseDataFolder, `common.json`), {
    encoding: "utf-8",
  });
  return JSON.parse(data);
};

const getTemplateHtml = async () => {
  return await fs.readFile(
    path.join(process.cwd(), "tools", "create-cv", "template.html"),
    { encoding: "utf-8" }
  );
};

const getSocials = (profile) => {
  return profile.links
    .filter((link) => link.ref !== "/cv/en.pdf")
    .map((link) => ({
      to: link.ref,
      title: link.tooltip,
    }));
};

const getCurrentProfile = (common, profile) => {
  return {
    email: common.email,
    portfolio: common.portfolio,
    description: profile.description.replace(
      "{years}",
      new Date().getFullYear() - 2021
    ),
  };
};

const getCurrentSkills = (profile) => {
  return profile.skills.map((link) => ({
    to: link.ref,
    title: link.tooltip,
  }));
};

const run = async () => {
  const templateHtml = await getTemplateHtml();
  const browser = await chromium.launch();

  for (const lang of langs) {
    const page = await browser.newPage();
    const jobData = await getLocalData(lang, "jobs");
    const profile = await getLocalData(lang, "profile");
    const common = await getCommonData();

    const template = Handlebars.compile(templateHtml);

    const socials = getSocials(profile);
    const currentProfile = getCurrentProfile(common, profile);
    const currentSkills = getCurrentSkills(profile);

    const cvHtml = template({
      profile: currentProfile,
      socials,
      skillTitle: profile.skillTitle.toUpperCase(),
      personalInformationTitle: profile.sectionTitle.toUpperCase(),
      technologiesTitle: profile.technologiesTitle.toUpperCase(),
      studiesTitle: profile.studiesTitle.toUpperCase(),
      skills: currentSkills,
      studies: profile.studies,
      workExperienceTitle: jobData.sectionTitle.toUpperCase(),
      jobs: jobData.jobs,
    });

    await page.setContent(cvHtml);

    await page.pdf({
      path: path.join(cvPath, `cv-${lang}.pdf`),
      format: "A4",
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      printBackground: true,
    });

    await page.close();
  }

  await browser.close();
};
run();
