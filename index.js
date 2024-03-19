#!/usr/bin/env node

import * as p from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import fetch from "node-fetch";

const generateOptions = (tools) => {
  return tools.map((tool) => {
    return {
      value: tool,
      label: `${tool} (${cliDescriptions[tool]})`,
    };
  });
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

const cliDescriptions = {
  jq: "JSON reading, parsing, and manipulating",
  fzf: "Command-line fuzzy finder",
  tldr: "A terminal based readme viewer",
  cURL: "A command line tool for transferring data with URL syntax",
  ffmpeg: "Record, convert, and stream audio and video",
  bat: "A cat(1) clone with syntax highlighting",
  cat: "Concatenate and print files",
  z: "A faster way to navigate your filesystem",
  Tmux: "The terminal multiplexer",
  vim: "Vi IMproved",
  wget: "A network utility to retrieve files",
  exa: "A modern replacement for ls",
  lazydocker: "A terminal application for managing containers",
  httpie: "A command line http client",
  neovim: "A powerful text editor",
  "youtube-dl": "A command line program to download videos from YouTube",
};

async function main() {
  console.clear();

  await setTimeout(500);

  p.intro(" Welcome to CLI Madness 2024 ");

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
          options: generateOptions([cliTools[0], cliTools[1]]),
        }),
      pick1_2: ({ results }) =>
        p.select({
          message: "Round 1. Pick 2.",
          options: generateOptions([cliTools[2], cliTools[3]]),
        }),
      pick1_3: ({ results }) =>
        p.select({
          message: "Round 1. Pick 3.",
          options: generateOptions([cliTools[4], cliTools[5]]),
        }),
      pick1_4: ({ results }) =>
        p.select({
          message: "Round 1. Pick 4.",
          options: generateOptions([cliTools[6], cliTools[7]]),
        }),
      pick1_5: ({ results }) =>
        p.select({
          message: "Round 1. Pick 5.",
          options: generateOptions([cliTools[8], cliTools[9]]),
        }),
      pick1_6: ({ results }) =>
        p.select({
          message: "Round 1. Pick 6.",
          options: generateOptions([cliTools[10], cliTools[11]]),
        }),
      pick1_7: ({ results }) =>
        p.select({
          message: "Round 1. Pick 7.",
          options: generateOptions([cliTools[12], cliTools[13]]),
        }),
      pick1_8: ({ results }) =>
        p.select({
          message: "Round 1. Pick 8.",
          options: generateOptions([cliTools[14], cliTools[15]]),
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
          options: generateOptions([results.pick1_1, results.pick1_2]),
        }),
      pick2_2: ({ results }) =>
        p.select({
          message: "Round 2. Pick 2.",
          options: generateOptions([results.pick1_3, results.pick1_4]),
        }),
      pick2_3: ({ results }) =>
        p.select({
          message: "Round 2. Pick 3.",
          options: generateOptions([results.pick1_5, results.pick1_6]),
        }),
      pick2_4: ({ results }) =>
        p.select({
          message: "Round 2. Pick 4.",
          options: generateOptions([results.pick1_7, results.pick1_8]),
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
          options: generateOptions([results.pick2_1, results.pick2_2]),
        }),
      pick3_2: ({ results }) =>
        p.select({
          message: "Round 3. Pick 2.",
          options: generateOptions([results.pick2_3, results.pick2_4]),
        }),
      advanceToRound4: ({ results }) =>
        p.note(
          [results.pick3_1, results.pick3_2].join("\n"),
          "Advancing to the Championship!"
        ),
      pick4_1: ({ results }) =>
        p.select({
          message: "Your Champion!",
          options: generateOptions([results.pick3_1, results.pick3_2]),
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
        data[pick] = parseInt(key);
      }
    }

    await fetch("https://cli-bracket-website.vercel.app/api/addEntry.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    s.message("Submitted your picks!");
    await setTimeout(1000);
    s.message("Fetching stats for all players…");

    const stats = await fetch(
      "https://cli-bracket-website.vercel.app/api/getEntries.json"
    );
    await setTimeout(1000);
    p.note(await stats.json(), "Stats!");
    s.stop();
  }

  p.outro(`Thanks for playing!`);
}

main().catch(console.error);
