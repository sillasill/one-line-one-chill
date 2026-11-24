import { writeFileSync, mkdirSync } from "node:fs";

const TEXT = "I found my own handwriting on the bedroom wall, describing everything I did today, signed and dated tomorrow.";

mkdirSync("/output", { recursive: true });
if (TEXT.length === 0 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}
writeFileSync("/output/entry.txt", TEXT, "utf8");
