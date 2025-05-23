const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

module.exports = () => {
  const dir = path.join(__dirname, "..", "content", "uni-staff");
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
