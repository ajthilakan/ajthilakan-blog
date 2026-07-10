---
title: "Starting a Vibe coding challenge – Crossing the Threshold from PM to Builder"
pubDatetime: 2026-07-10T16:01:59Z
description: "Taking on a loosely timeboxed build-and-ship challenge inspired by others — exploring what it means for a PM without a deep technical background to actually build things, what gave me the confidence to try, and what I'm optimizing for."
tags: [vibe-coding, building, pm]
draft: false
ogImage: ../../assets/starting-a-vibe-coding-challenge/hero.png
heroImage: /assets/starting-a-vibe-coding-challenge/hero.png
---
I've always been excited about products that enabled builders and creators to do their best work, and had some exposure to this more recently at Docker (focused on a specific category of creators - development teams). But while I've gotten more familiar, I felt I haven't done enough of actually building things myself. Inspired by others I decided to tackle my own vibe-coding builder challenge, so I can close that gap.

## My take on the challenge

I first mentioned this briefly in my [recent retooling update](https://ajthilakan.com/posts/quick-update-retooling/#thread-2--vibe-30-or-60-challenge). I was inspired by [Nuno Coracao](https://x.com/nunocoracao)'s [vibe30 challenge](https://github.com/nunocoracao/30DaysOfVibeCoding) — his experiment shipping 30 things in 30 days. It's a great premise, but I kept my attempt here looser. Ship and learn as much as I can within a rough 30-day timebox. The timebox is not rigid and I might shorten or extend it. The bar is low by design. Disposable builds are fine, and learning — especially how to scaffold my SDLC stack and orchestrate coding agents — is the goal. I'll share more on my progress here in a future post.

## My initial feelings going in...

As someone with limited technical depth, the imposter syndrome was substantial during my early days at Docker. However I was able to overcome some of that over time, and leveraging AI agents as learning and execution partners proved to be a big enabler. I used this to help me get deeper into our developer focused product when needed, but more importantly across my product workflows (research, analysis, documentation, prototyping). That said, I also felt I was only just keeping up with the latest advancements, and only just scratching the surface of what I could do as an aspiring builder.

Things are moving fast enough that it's easy to feel like you're always one step behind. And vibe coding specifically has a real failure mode: AI-generated code can look perfectly reasonable and be quietly wrong. You don't always know where to look for the rot. Diving into this as a PM — without a deep technical background — can feel a bit like jumping into traffic.

## ...And what gave me the confidence to dive in

A conversation with [Jake Levine](https://x.com/awakenjake) *(whose [recent shift](https://specstory.com/blog/a-ceos-journey-back-to-code) from leadership to hands-on building was also particularly inspiring here)* reframed how I was thinking about this. 

His take on imposter syndrome for non-technical builders was more than just encouragement — it was a structural point. The bottleneck has shifted. It used to be *writing code*. That was the hard part; that was where expertise paid off. Now, with capable coding agents in the loop, it's increasingly *knowing what to build and verifying that it does what you think*. Execution is being commoditized. Framing, judgment, and verification are where the real leverage sits.

That's ground a good PM already knows well. You spend your career translating ambiguous user problems into specific, testable solutions and holding them accountable to outcomes. The skill transfers.

So if you have good product taste and domain knowledge, you're actually better positioned than you think, and there's research backing it up. An Anthropic [research report](https://www.anthropic.com/research/claude-code-expertise) found that in vibe coding sessions, success was determined more by how well someone understands the problem they're solving than by whether they have a coding background. Domain experts succeed at nearly the same rate as software engineers. The quote that stuck with me:

> "These findings give us an early read on possible transitions in the labor market. In our data, success is determined by how well a person understands the problem they are trying to solve, not whether they're trained in coding.
> ...The greater domain expertise a person brings to a session... domain experts succeed at nearly the same rate as software engineers. "
> — [Anthropic Research Report - Agentic coding and persistent returns to expertise](https://www.anthropic.com/research/claude-code-expertise)

Jake also made a second point that I felt was particularly important for my product peer group: what separates PMs in a crowded market isn't just the resume anymore. Your portfolio matters more than any individual artifact, and having projects to show on your GitHub can go a long way. 

## How I'm going into this

I want to cross the threshold from *aspiring* to *semi-competent builder*. Not just empowering builders — actually being one of them, at least at a level that's genuinely useful. And what does that mean? It doesn't mean writing production code myself. It means being able to take an idea from concept to something working and deployed, independently. To verify that what got built is what I asked for. To iterate without needing a handoff every time something needs to change. That's the threshold I'm trying to cross.

The products I ship during this challenge might be disposable. Short-lived proof-of-concepts, or tools I build to solve one problem and retire are completely fine. 

There is a real cost to this that's worth flagging — tooling, subscriptions, time. Not everyone is positioned to take this bet. But for any PM who's been considering a bootcamp or post-grad course to get more technical: I'd argue that you could go further budgeting for a Claude or Codex subscription and shipping disposable things yourself. It won't teach you everything — good strategy, taste, and writing are different muscles — but technical fluency in a world of coding agents is increasingly learnable by doing.

### And overcoming the "daunting" technical challenges 

The challenge here isn't just prompting, which is learnable in an afternoon. It's around the surrounding technical structure — which is twofold, and especially daunting for non-technical builders:

1) Figuring out my SDLC setup i.e. your local dev environment, git and CI/CD workflows;
2) And making sure I can trust the code that I cannot directly verify myself

For both of these - I felt that I (and non-technical builders) could tackle it using Claude Code (or your choice of model & agent harness) as a planning and execution partner, while also utilizing the variety of engineering skill plugins that are out there. 

Your agent partner can help you plan and setup your SDLC stack, and you can then utilize the appropriate engineering skills to take you through the actual development cycle. Claude Code comes with many out of the box, but I was very intrigued by the [Compound Engineering](https://github.com/everyinc/compound-engineering-plugin) plugin (~23K stars on github), and its in-depth skills for the full development workflow end to end: `ce-brainstorm` > `ce-plan` > `ce-work` > `ce-review`. I was also intrigued to try its `lfg` command that runs the full pipeline in one long-running flow. 

This might sound like a lot of overhead for "disposable" builds. But I think the setup overhead is actually part of what I'm here to learn *(otherwise I could just continue building prototypes in V0 or Bolt)*. Once the scaffolding exists, it applies to everything that comes after. 

## What's next

With all this in hand, I'd like to see how far I can take my agentic SDLC orchestration, and what I can ship with my limited technical depth. More on this and what I learned in a subsequent post.
