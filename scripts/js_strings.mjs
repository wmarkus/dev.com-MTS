import { tokenizer } from "acorn";
import { readFileSync } from "node:fs";

const source = readFileSync(0, "utf8");
const strings = [];
for (const token of tokenizer(source, { ecmaVersion: "latest", sourceType: "module", allowHashBang: true })) {
  if (token.type.label === "string" && (
    /url\(|@import/.test(token.value) ||
    /^(https?:|\/\/|\.{0,2}\/)/.test(token.value) ||
    /^(?:[\w.-]+\/)+[\w.-]+\.(?:m?js|css|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|mp4)$/.test(token.value) ||
    /^[\w.-]+\.(?:m?js|css|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|mp4)$/.test(token.value)
  )) strings.push([token.start, token.end, token.value]);
}
process.stdout.write(JSON.stringify(strings));
