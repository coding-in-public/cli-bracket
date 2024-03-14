import * as p from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";

const createBracketSegment = ({
  round,
  pick,
  teams,
}: {
  round: number;
  pick: number;
  teams: string[];
}) => {
  const maxLength = Math.max(...teams.map((i) => i.length));
  const teamData = teams.map((i) => ({
    name: i,
    spaces: " ".repeat(maxLength - i.length),
  }));

  return `\nRound ${round}. Pick ${pick}.\n\n
${teamData[0].spaces}${teamData[0].name} \\
${" ".repeat(maxLength + 3)}${"_".repeat(6)}

${teamData[1].spaces}${teamData[1].name} /
`;
};

const cliTools = [
  "jq",
  "fzf",
  "tldr",
  "cURL",
  "ffmpeg",
  "bat",
  "cat",
  "z",
  "Tmux",
  "vim",
  "wget",
  "exa",
  "lazydocker",
  "httpie",
  "neovim",
  "youtube-dl",
];

async function main() {
  console.clear();

  await setTimeout(500);

  p.intro(`${color.bgGreen(color.black(" Welcome to CLI Madness 2024 "))}`);

  const project = await p.group(
    {
      rules: () =>
        p.note(
          "Choose your favorite CLI tool in 4 rounds of head-to-head match ups.",
          "Tourney Rules"
        ),
      pick1_1: ({ results }) =>
        p.select({
          message: "Round 1. Pick 1.",
          options: [
            { value: cliTools[0], label: cliTools[0] },
            { value: cliTools[1], label: cliTools[1] },
          ],
        }),
      pick1_2: ({ results }) =>
        p.select({
          message: "Round 1. Pick 2.",
          options: [
            { value: cliTools[2], label: cliTools[2] },
            { value: cliTools[3], label: cliTools[3] },
          ],
        }),
      pick1_3: ({ results }) =>
        p.select({
          message: "Round 1. Pick 3.",
          options: [
            { value: cliTools[4], label: cliTools[4] },
            { value: cliTools[5], label: cliTools[5] },
          ],
        }),
      pick1_4: ({ results }) =>
        p.select({
          message: "Round 1. Pick 4.",
          options: [
            { value: cliTools[6], label: cliTools[6] },
            { value: cliTools[7], label: cliTools[7] },
          ],
        }),
      pick1_5: ({ results }) =>
        p.select({
          message: "Round 1. Pick 5.",
          options: [
            { value: cliTools[8], label: cliTools[8] },
            { value: cliTools[9], label: cliTools[9] },
          ],
        }),
      pick1_6: ({ results }) =>
        p.select({
          message: "Round 1. Pick 6.",
          options: [
            { value: cliTools[10], label: cliTools[10] },
            { value: cliTools[11], label: cliTools[11] },
          ],
        }),
      pick1_7: ({ results }) =>
        p.select({
          message: "Round 1. Pick 7.",
          options: [
            { value: cliTools[12], label: cliTools[12] },
            { value: cliTools[13], label: cliTools[13] },
          ],
        }),
      pick1_8: ({ results }) =>
        p.select({
          message: "Round 1. Pick 8.",
          options: [
            { value: cliTools[14], label: cliTools[14] },
            { value: cliTools[15], label: cliTools[15] },
          ],
        }),
      advanceToRound2: ({ results }) =>
        p.note(
          [
            results.pick1_1,
            results.pick1_2,
            results.pick1_3,
            results.pick1_4,
            results.pick1_5,
            results.pick1_6,
            results.pick1_7,
            results.pick1_8,
          ].join("\n"),
          "Advancing to Round 2"
        ),
      pick2_1: ({ results }) =>
        p.select({
          message: "Round 2. Pick 1.",
          options: [
            { value: results.pick1_1, label: results.pick1_1 as string },
            { value: results.pick1_2, label: results.pick1_2 as string },
          ],
        }),
      pick2_2: ({ results }) =>
        p.select({
          message: "Round 2. Pick 2.",
          options: [
            { value: results.pick1_3, label: results.pick1_3 as string },
            { value: results.pick1_4, label: results.pick1_4 as string },
          ],
        }),
      pick2_3: ({ results }) =>
        p.select({
          message: "Round 2. Pick 3.",
          options: [
            { value: results.pick1_5, label: results.pick1_5 as string },
            { value: results.pick1_6, label: results.pick1_6 as string },
          ],
        }),
      pick2_4: ({ results }) =>
        p.select({
          message: "Round 2. Pick 4.",
          options: [
            { value: results.pick1_7, label: results.pick1_7 as string },
            { value: results.pick1_8, label: results.pick1_8 as string },
          ],
        }),
      advanceToRound3: ({ results }) =>
        p.note(
          [
            results.pick2_1,
            results.pick2_2,
            results.pick2_3,
            results.pick2_4,
          ].join("\n"),
          "Advancing to Round 3"
        ),
      pick3_1: ({ results }) =>
        p.select({
          message: "Round 3. Pick 1.",
          options: [
            { value: results.pick2_1, label: results.pick2_1 as string },
            { value: results.pick2_2, label: results.pick2_2 as string },
          ],
        }),
      pick3_2: ({ results }) =>
        p.select({
          message: "Round 3. Pick 2.",
          options: [
            { value: results.pick2_3, label: results.pick2_3 as string },
            { value: results.pick2_4, label: results.pick2_4 as string },
          ],
        }),
      advanceToRound4: ({ results }) =>
        p.note(
          [results.pick3_1, results.pick3_2].join("\n"),
          "Advancing to the Championship!"
        ),
      pick4_1: ({ results }) =>
        p.select({
          message: "Your Champion!",
          options: [
            { value: results.pick3_1, label: results.pick3_1 as string },
            { value: results.pick3_2, label: results.pick3_2 as string },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Tourney cancelled.");
        process.exit(0);
      },
    }
  );

  if (project.pick4_1) {
    const s = p.spinner();
    s.start("Submitting your picks…");
    const data = {
      jq: 0,
      fzf: 0,
      tldr: 0,
      cURL: 0,
      ffmpeg: 0,
      bat: 0,
      cat: 0,
      z: 0,
      Tmux: 0,
      vim: 0,
      wget: 0,
      exa: 0,
      lazydocker: 0,
      httpie: 0,
      neovim: 0,
      "youtube-dl": 0,
    };

    const picks = {
      1: [
        project.pick1_1,
        project.pick1_2,
        project.pick1_3,
        project.pick1_4,
        project.pick1_5,
        project.pick1_6,
        project.pick1_7,
        project.pick1_8,
      ],
      2: [project.pick2_1, project.pick2_2, project.pick2_3, project.pick2_4],
      3: [project.pick3_1, project.pick3_2],
      4: [project.pick4_1],
    };

    for (const [key, value] of Object.entries(picks)) {
      for (const pick of value) {
        data[pick as keyof typeof data] = parseInt(key);
      }
    }

    await fetch("http://localhost:4321/api/addEntry.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    s.message("Submitted your picks!");
    await setTimeout(500);
    s.message("Fetching stats...");

    const stats = await fetch("http://localhost:4321/api/getEntries.json");
    p.note(await stats.json(), "Stats!");
    s.stop("Stats!");
  }

  p.outro(
    `Problems? ${color.underline(color.cyan("https://example.com/issues"))}`
  );
}

main().catch(console.error);
