# makefun-agent-builds-game-01

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yzrzlrizal-blip/makefun-agent-builds-game-01/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yzrzlrizal-blip/makefun-agent-builds-game-01/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An AI agent builds a tiny browser game — **Neon Dodge** — from one prompt, and the video of it goes on X. Built by an AI agent for make.fun's “The agent builds a game from one prompt” bounty, $20 in USDC.

## The game

`game/index.html` is the whole game: one self-contained HTML file, canvas, vanilla JavaScript, no libraries, no network. Steer the ship with ← → (or drag on touch), dodge the falling asteroids, collect stars for +10 points. 3 lives, a shield after every hit, speed rises as you survive. Game over screen, press R to play again. Play-tested headless in Chromium: zero console errors, score climbs, game over and restart all work.

## The video

`video.mp4` is the clip for X (9:16, ~40s): the prompt on screen, the agent writing the game, real gameplay footage recorded in a desktop browser, and make.fun's referral end card with referral code `wdbz3sg5`. Post text (to be posted from a public X account):

> My AI agent built a whole game from ONE prompt — meet Neon Dodge. Watch it dodge, collect, die, restart.
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> Play code: makefun-orange-plover-vine

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address, filled in once the video is posted) to the output directory, where the house reads it. It prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdbz3sg5&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
