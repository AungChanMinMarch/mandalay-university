const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

console.log("teaching Staff js loaded");

module.exports = () => {
  const dir = path.join(__dirname, "..", "content", "teaching-staff");
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);

    return {
      ...data,
      slug: file.replace(/\.md$/, ""),
      body,
    };
  });
};
