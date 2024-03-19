#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var p = require("@clack/prompts");
var promises_1 = require("node:timers/promises");
var picocolors_1 = require("picocolors");
var cliTools = [
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var project, s, data, picks, _i, _a, _b, key, value, _c, value_1, pick, stats, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.clear();
                    return [4 /*yield*/, (0, promises_1.setTimeout)(500)];
                case 1:
                    _f.sent();
                    p.intro("".concat(picocolors_1["default"].bgGreen(picocolors_1["default"].black(" Welcome to CLI Madness 2024 "))));
                    return [4 /*yield*/, p.group({
                            rules: function () {
                                return p.note("Choose your favorite CLI tool in 4 rounds of head-to-head match ups.", "Tourney Rules");
                            },
                            pick1_1: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 1.",
                                    options: [
                                        { value: cliTools[0], label: cliTools[0] },
                                        { value: cliTools[1], label: cliTools[1] },
                                    ]
                                });
                            },
                            pick1_2: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 2.",
                                    options: [
                                        { value: cliTools[2], label: cliTools[2] },
                                        { value: cliTools[3], label: cliTools[3] },
                                    ]
                                });
                            },
                            pick1_3: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 3.",
                                    options: [
                                        { value: cliTools[4], label: cliTools[4] },
                                        { value: cliTools[5], label: cliTools[5] },
                                    ]
                                });
                            },
                            pick1_4: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 4.",
                                    options: [
                                        { value: cliTools[6], label: cliTools[6] },
                                        { value: cliTools[7], label: cliTools[7] },
                                    ]
                                });
                            },
                            pick1_5: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 5.",
                                    options: [
                                        { value: cliTools[8], label: cliTools[8] },
                                        { value: cliTools[9], label: cliTools[9] },
                                    ]
                                });
                            },
                            pick1_6: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 6.",
                                    options: [
                                        { value: cliTools[10], label: cliTools[10] },
                                        { value: cliTools[11], label: cliTools[11] },
                                    ]
                                });
                            },
                            pick1_7: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 7.",
                                    options: [
                                        { value: cliTools[12], label: cliTools[12] },
                                        { value: cliTools[13], label: cliTools[13] },
                                    ]
                                });
                            },
                            pick1_8: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 1. Pick 8.",
                                    options: [
                                        { value: cliTools[14], label: cliTools[14] },
                                        { value: cliTools[15], label: cliTools[15] },
                                    ]
                                });
                            },
                            advanceToRound2: function (_a) {
                                var results = _a.results;
                                return p.note([
                                    results.pick1_1,
                                    results.pick1_2,
                                    results.pick1_3,
                                    results.pick1_4,
                                    results.pick1_5,
                                    results.pick1_6,
                                    results.pick1_7,
                                    results.pick1_8,
                                ].join("\n"), "Advancing to Round 2");
                            },
                            pick2_1: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 2. Pick 1.",
                                    options: [
                                        { value: results.pick1_1, label: results.pick1_1 },
                                        { value: results.pick1_2, label: results.pick1_2 },
                                    ]
                                });
                            },
                            pick2_2: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 2. Pick 2.",
                                    options: [
                                        { value: results.pick1_3, label: results.pick1_3 },
                                        { value: results.pick1_4, label: results.pick1_4 },
                                    ]
                                });
                            },
                            pick2_3: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 2. Pick 3.",
                                    options: [
                                        { value: results.pick1_5, label: results.pick1_5 },
                                        { value: results.pick1_6, label: results.pick1_6 },
                                    ]
                                });
                            },
                            pick2_4: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 2. Pick 4.",
                                    options: [
                                        { value: results.pick1_7, label: results.pick1_7 },
                                        { value: results.pick1_8, label: results.pick1_8 },
                                    ]
                                });
                            },
                            advanceToRound3: function (_a) {
                                var results = _a.results;
                                return p.note([
                                    results.pick2_1,
                                    results.pick2_2,
                                    results.pick2_3,
                                    results.pick2_4,
                                ].join("\n"), "Advancing to Round 3");
                            },
                            pick3_1: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 3. Pick 1.",
                                    options: [
                                        { value: results.pick2_1, label: results.pick2_1 },
                                        { value: results.pick2_2, label: results.pick2_2 },
                                    ]
                                });
                            },
                            pick3_2: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Round 3. Pick 2.",
                                    options: [
                                        { value: results.pick2_3, label: results.pick2_3 },
                                        { value: results.pick2_4, label: results.pick2_4 },
                                    ]
                                });
                            },
                            advanceToRound4: function (_a) {
                                var results = _a.results;
                                return p.note([results.pick3_1, results.pick3_2].join("\n"), "Advancing to the Championship!");
                            },
                            pick4_1: function (_a) {
                                var results = _a.results;
                                return p.select({
                                    message: "Your Champion!",
                                    options: [
                                        { value: results.pick3_1, label: results.pick3_1 },
                                        { value: results.pick3_2, label: results.pick3_2 },
                                    ]
                                });
                            }
                        }, {
                            onCancel: function () {
                                p.cancel("Tourney cancelled.");
                                process.exit(0);
                            }
                        })];
                case 2:
                    project = _f.sent();
                    if (!project.pick4_1) return [3 /*break*/, 8];
                    s = p.spinner();
                    s.start("Submitting your picks…");
                    data = {
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
                        "youtube-dl": 0
                    };
                    picks = {
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
                        4: [project.pick4_1]
                    };
                    for (_i = 0, _a = Object.entries(picks); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        for (_c = 0, value_1 = value; _c < value_1.length; _c++) {
                            pick = value_1[_c];
                            data[pick] = parseInt(key);
                        }
                    }
                    return [4 /*yield*/, fetch("https://cli-bracket-website.vercel.app/api/addEntry.json", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data)
                        })];
                case 3:
                    _f.sent();
                    s.message("Submitted your picks!");
                    return [4 /*yield*/, (0, promises_1.setTimeout)(1000)];
                case 4:
                    _f.sent();
                    s.message("Fetching stats for all players…");
                    return [4 /*yield*/, fetch("https://cli-bracket-website.vercel.app/api/getEntries.json")];
                case 5:
                    stats = _f.sent();
                    return [4 /*yield*/, (0, promises_1.setTimeout)(1000)];
                case 6:
                    _f.sent();
                    _e = (_d = p).note;
                    return [4 /*yield*/, stats.json()];
                case 7:
                    _e.apply(_d, [_f.sent(), "Stats!"]);
                    s.stop();
                    _f.label = 8;
                case 8:
                    p.outro("Thanks for playing!");
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](console.error);
