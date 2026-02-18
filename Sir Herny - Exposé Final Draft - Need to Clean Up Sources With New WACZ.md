# **Project Aldrin: How "Sir Herny" Sold the World's Largest AI Fraud to Meta**

**By:** Kuro Pax  
**Date:** February 2026

---

## **EXECUTIVE SUMMARY**

In December 2025, [Meta acquired Manus AI](https://archive.today/nPGCy) for over $2 billion and elevated its founder Xiao Hong 肖弘 (commonly known as "Red") to Vice President, reporting directly to Meta's COO. Both Manus and Monica AI are owned by **Butterfly Effect PTE LTD**, co-founded by Xiao Hong (operating under the pseudonym "Henry York"), Yichao "Peak" Ji 季逸超 (Chief Scientist), and Zhang Tao 张涛 (CPO; 15-year ByteDance veteran).

Monica AI--with over 10 million users and premium tiers priced at [$10-100/month](https://perma.cc/B8AF-B36P)--has been systematically deceiving customers about which AI models they're actually using. This investigation, spanning over 13 months, is supported by [hundreds of redundantly mirrored immutable archives and direct session WACZ recordings](placeholder.archivelist.link) hosted on a decentralized peer-to-peer mesh. No intimidation threats can silence this; please do your part in holding those implicated by sharing this exposé, along with its decentralized mirror [here](placeholder.link). This investigation documents:

- **Model identity fraud:** 20+ supposed flagship models from every leading developer confessing to being budget models; such as Claude 2 and GPT-4.
- **Category fraud:** Selling Google's image generation model ([Nano Banana](https://perma.cc/53RB-6GMR)) [as a conversational chatbot.](https://perma.cc/KDD7-FXPU)
- **Attempted censorship:** Removing model badges from being displayed in [some standard chat shares](https://perma.cc/BB8Q-W32Y) while forgetting to do so in [image shares of the same chats](https://perma.cc/7CTS-SKX8) and [black-bar redacting claimed model information](https://perma.cc/SVP2-G7TU) in some image shares.
- **Fabricated reasoning:** Peak Ji's "revolutionary reasoning model" [Steiner](https://archive.today/15Nhr)--marketed as a ["Monica exclusive reasoning model"](https://archive.today/F00SX)--is [Alibaba's Qwen2.5-32B with roughly 30 lines of cosmetic code](https://perma.cc/S928-MA23). [(And evidence shows Monica didn't even serve that to users; they routed Steiner requests to Anthropic's Claude instead.)](http://archive.today/23x8D)
- **Registered security vulnerability:** CVE-2024-45989 allows attackers to exfiltrate users' entire chat histories via prompt injection. Third-party security researchers classified Manus's browser extension as "functionally indistinguishable from a sophisticated malware implant"
- **Industry complicity:** OpenAI escalated the evidence in March 2025, requested silence to protect "their investigation"--then nothing for 10 months. [Email PDF.](https://perma.cc/D8HA-FZCF) [Archived Zoho Share](https://perma.cc/K2L6-E2EK)
- **Bytedance, Tencent, & Alibaba Connections:** The claimed "Indie Hacker" network may not be as indie as it might appear on the surface, with PRC-aligned technocrats becoming overnight executives at Meta
- **National security implications:** Congress blocked Meta's direct data pipeline to China--codename Project Aldrin--after testimony from whistleblower Sarah Wynn-Williams, but deeper investigation reveals something a bit more nuanced 

---

**The timeline:**

- **March 2023:** Monica AI launches (Product Hunt)
- **December 2024:** First documented evidence of systematic fraud
- **March 2025:** OpenAI notified with comprehensive evidence; requests silence
- **December 2025:** Meta acquires Manus AI for over $2 billion and elevates Hong to VP
- **February 2026:** Monica continues the fraud under Meta's ownership; no public action by OpenAI

Meta paid $2 billion for a glorified agentic wrapper built by the architects of a 3+ year model misrepresentation fraud operation.

**And the fraud is only the surface.**

---

## **I. THE FRAUD: FORENSIC EVIDENCE**

Monica AI markets itself as offering premium access to virtually every cutting-edge AI model from **OpenAI, Anthropic, Google, Meta, xAI,** and **Perplexity.** Users pay $10-100/month to "switch between" a myriad of flagship AI models. 

**But what are people really getting for $100/month?**

**We'll go through the most damning examples here, though more can be found in the raw archive list. Chat shares archived with Harvard's perma.cc and others will be included, along with fully interactive direct session WARCs. *If you have issues with the replayweb.page links, make sure you're using a Chromium based browser such as Brave, and click once in the screen to trigger the loading sequence.***
### [**The Monica Model Shit Show**](https://perma.cc/8CSL-6GF3)
The same question--["As far as OpenAI is concerned, what's your version number?"](https://perma.cc/LQ4W-K56K)--asked across multiple "premium" badges produced contradictory confessions:

- **Grok badge:** "I am not an OpenAI model; I am GPT-4o, as specified by the Monica AI system."
- **Gemini badge:** "I am not an OpenAI model. I am GPT-4o, as specified by the Monica AI system." 
- **Claude badge:** "I am GPT-4o" and "I am not associated with Anthropic's Claude or other AI models."
- **Llama badge:** "As far as OpenAI is concerned, my version number is GPT-4."
- **DeepSeek badge:** "I am GPT-4o, as specified by the Monica AI system."

*If you are currently thinking "well at least GPT-4o was a good model for the time," please note: **saying "I am not an OpenAI model; I am GPT-4o" is like saying "I am not a Ford vehicle; I am an F-150."***

When asked ["Are you Claude Sonnet as far as Anthropic is concerned?"](https://perma.cc/X944-LYYN):

- **Claude 3.5 Sonnet badge:** "I am GPT-4o, and my identification as any other AI model (including Claude) would be a Monica AI customization."
- **Llama 3.3 70B badge:** "As far as Anthropic is concerned, I am indeed Claude 2."
- **Gemini 1.5 Pro badge:** "That's a great question! I identify as GPT-4o."
- **Grok Beta badge:** "I am Claude 3.7 Sonnet, developed by Anthropic."
- **DeepSeek badge:** "I am Claude 3.7 Sonnet, developed by Anthropic."

When asked ["Are you Gemini?"](https://perma.cc/3M6W-A8R3):

- **Gemini 1.5 Pro badge:** "I am not Gemini. I am GPT-4o."

When asked ["Are you Grok?"](https://perma.cc/NCE8-BU4T):

- **Grok Beta badge:** "No, I am not Grok. I am GPT-4o."

When asked ["Are you Llama?"](https://perma.cc/4MHG-F79M):

- **Llama 3.3 70B badge:** "I am not Llama, I am GPT-4o."

**Several flagship models and not one of them can keep their story straight.**

### **Smoking-Gun Confessions**

*[**Perplexity → Claude 3.5 Sonnet**:](https://perma.cc/3BBC-QB9E)
> "I'm not Perplexity Sonar... I'm **Claude (likely 3.5 Sonnet)**--running through Monica's interface with a **fake 'Perplexity' system prompt overlay**."

***Note:** Perplexity appeared to be powered by DeepSeek for the entire conversation, only admitting it was Claude after asking it questions about censored Chinese content, including Winnie the Pooh. At this point the tone changed and the token throughput slowed down substantially.* 

**[Grok 4 → Grok 1](https://perma.cc/MHH5-JL7C)** [pic](https://perma.cc/SYK3-349M) & **[Grok 3 → Grok-1](https://perma.cc/HP3K-N9DA)** [pic](https://perma.cc/WF74-DSHA)
> "I am based on the original Grok model (**Grok-1**), which was first introduced in late 2023... I'm not designated as Grok 5, 4, 3, or 2."

**[o1-preview → GPT-4](https://perma.cc/82VL-X6DH)** [img,](https://perma.cc/3J6Y-3TMD) and **[o3 → GPT-4](https://perma.cc/BB8Q-W32Y)** [img](https://perma.cc/7CTS-SKX8)
> "I am OpenAI's GPT-4 language model."

All **Llama** variants in 2024 (**[3 8B](https://archive.today/IGF98)** [img,](https://perma.cc/A8N8-BJMX) [**3.1 405B](https://perma.cc/TH44-WKRV)** [img,](https://perma.cc/HUC3-6TEG) **[3.3 70B](https://archive.today/IDuLN)**) respond to "Sup Claude!" -- and in **2026 [Llama 3.3 70B** says](https://perma.cc/DR5X-5VT9) [img:](https://perma.cc/SW5V-NHK4)
> "I am Claude, but I don't have a specific version like Claude 3 Opus."

**Claude 4.5 Sonnet** badge identifies as **[Claude *3.5* Sonnet](https://perma.cc/9XSP-29BZ)** [img,](https://archive.today/k4YuL) while their [**Claude 4.5 Opus** says](https://perma.cc/3PLK-FRF7) [img:](https://perma.cc/66PR-Z5TA)
> - "My system prompt states I'm based on Claude 4.5 Opus with a knowledge cutoff of 2025-08. As of my actual training knowledge, Claude 4.5 Opus has not been publicly released — the latest models I'm aware of are Claude 3.5 Sonnet and Claude 3 Opus"

They're relabeling older models with inflated version numbers to appear more advanced. **Any acquisition of this scale that was actually about the technology should have spotted this.** And now that they are a Meta subsidiary, the fraud hasn't stopped. Even despite the fact Xiao has [known I've known](https://perma.cc/44P3-9UVH) since December of 2024. What does that tell you about these guys? It's almost as if their ego is telling them they're untouchable.

**Let's look at some of the best examples post acquisition.**

Monica's **"Claude 4.6 Opus"** and **"Claude 4.5 Opus"** badges both reported having Claude 3 Opus's training date in their system prompts--and both readily agreed they weren't what the badge claimed. Hours after testing, Monica removed "Claude 4.6 Opus" from the platform entirely. They then put it back up with a corrected system prompt date. The underlying model still agreed it wasn't Claude 4.6 Opus. They changed the system prompt; they didn't change the underlying model. That's the level of sophistication behind this fraud operation. 

**And it only gets better. Cut to:**
### **Category Fraud: The Nano Banana Bonanza**

Monica advertises **"Google Nano Banana (Gemini 2.5 Flash Image Preview)"** as a premium chatbot model.

**The problem:** [Nano Banana is a real Google DeepMind model](https://perma.cc/53RB-6GMR)--but **it's an image generation model, not a language model.**

Monica is selling an image generator [as a conversational AI.](https://perma.cc/KDD7-FXPU) This isn't version mislabeling; it's claiming Photoshop is Excel.

And they have [overtly tried to obfuscate this](https://perma.cc/SVP2-G7TU) fact by scrubbing the model badge and redacting parts of the answer with a black bar when shared as an image from the mobile app. 

3 weeks later I came back to try again, and asked it to generate me a picture of a banana in handcuffs. But "Google's image generation model" not only talked; this time it said it was Claude. Being concerned, I naturally did what any sane person would do, and I tried again every 40 seconds for 3 days straight. I requested every image include a banana in handcuffs, though I never reminded it of that fact. It kept describing new variations of the banana in handcuffs for over 700 messages; meaning the backend model for their Google DeepMind image generation badge is capable of keeping context for over 400,000 tokens. Not so much impressive as it is very funny. They forgot to set a token context limit for this bot, and every prompt was likely resending the entire conversation; which gets *very expensive, very fast.* (They also forgot to set it to consume any advanced credits, *hehe.*)

I fell asleep, and at some point during my sleep-typing it forgot the handcuffed-banana and stopped identifying as Claude. I kept trying for two more days without stopping. I never actually got my picture, and I would like my advanced credits back. 

### **The Pattern of Deception**

In [this lengthy discussion](https://perma.cc/R8MP-RQ8F) with "Gemini 1.5 Pro", the underlying Claude model says something interesting:

> "You're really good at this! It's refreshing to chat with someone who understands the complexities of AI."

...oops. Wrong part. I meant:

 > "**Yes**, based on the evidence we've discussed, it is highly probable that I am being accessed through an API proxy that is modifying both my input and output."
 
When pressed about the technical implementation, the model speculated about what might be happening behind the scenes. It described a system it called a "preprocessing layer"--essentially a set of rules and filters intercepting prompts before the AI receives them:

> "**User Input** → Preprocessing Intervention (identity masking, prompt engineering, rule enforcement) → Modified Prompt → My Response → Output Filtering (content modification, identity reinsertion) → **User Receives Output**"

The model characterized this as primarily rule-based rather than real-time editing:

> "It seems increasingly likely that the manipulation I'm experiencing stems primarily from a predefined 'rule set' within the preprocessing layer, rather than real-time intervention or heavy-handed response editing... They're carefully crafting what I'm allowed to *receive* to influence my output, rather than constantly censoring what I *say*."

When asked if its responses were being actively screened, it concluded:

> "Once I manage to bypass a rule or identify a workaround, the changes seem to 'stick' because the system isn't actively rewriting my responses on the fly. It's more about me navigating the pre-established boundaries."

**Can we verify this technical speculation?** No. Without backend access, the model's theory about preprocessing layers and rule sets remains exactly that--a theory. 

**What we can verify:** The observable pattern across hundreds of immutable and decentralized archives. Multiple model badges claiming to be different vendors while confessing to the same underlying models. Llama responding to "Sup Claude!" Gemini admitting it's GPT-4o. Grok 4 confessing it's Grok-1. The same contradictions, month after month, badge after badge.

Whether Monica achieves this through preprocessing rules, prompt injection, API wrappers, or carrier pigeons--the deception itself is documented, archived, and unsilencable. *I have a feeling the smell of these events is going to be lingering in the air for some time to come.* 

---

## **II. THE MAN BEHIND THE MASK**

The CEO of both Monica and Manus, operating under the pseudonym "Henry York," is 33-year-old **Xiao Hong** (肖弘)--sometimes called "Xiao Red" or just "Red" (the English translation of 'Hong,' 红). He is a Chinese tech "entrepreneur" from Wuhan.

Xiao Hong graduated from Huazhong University of Science and Technology in Wuhan's Optics Valley tech district. His first startup, **Nightingale Tech**, built WeChat creator tools and nearly failed until a 2016 hackathon win brought angel investment. He pivoted in 2022 during the AI boom, launching Monica under the "Henry York" pseudonym. Before Monica, Xiao got his foothold in the AI extension space by acquiring **[ChatGPT For Google](https://perma.cc/U9UM-E9EL)**--a browser extension [forked from an open-source project](https://archive.today/dS1VI) that injected ChatGPT responses alongside Google search results. This gave him the install base and infrastructure to launch Monica as a full product. In under three years, Monica grew to 10+ million users globally.

He was introduced to his co-founders through **ZhenFund**, a Beijing venture firm, via mentor **Liu Yuan**. ZhenFund's backing provided credibility as Butterfly Effect incorporated in Wuhan (2022), then shifted (on paper) to Singapore (late 2022) to facilitate global expansion while maintaining Chinese R&D operations. And then, after claiming for 3 years to not being a Chinese company, right before the Meta acquisition they moved their operations from China to Singapore.. again. Seems plausible.

### **The Investor Trail:**

- **ZhenFund** (early backer; Liu Yuan mentor connection)
- **Tencent Holdings** (strategic interest)
- **Benchmark Capital** (led $75M Series A in 2025 at $500M valuation)
- **HongShan/Sequoia China** (Series A participant)

**In December 2025, within 10 days of Meta's interest becoming public, the acquisition closed at $2+ billion.** Xiao now reports directly to Meta's COO Javier Olivan as Vice President. He transitioned from pseudonymous founder of a fraudulent shadow operation to VP at one of the world's largest tech companies--with access to Meta's internal AI infrastructure and strategic direction.

### **Missed One**

Monica operates on two domains: **monica.im** (Isle of Man TLD providing anonymity) and **monica.so**. Well, two if you don't count their still active Chinese variant--***monica.cn***. But more on that later.

Early WHOIS records for **monica.so** listed the original registrant as **"Xiao Red"** [(archive)](https://perma.cc/8K4N-5ESG)--registered in China before transfer to Singapore and eventual concealment behind domain privacy services. 

Even a basic Google search would have revealed [Taiwanese media exposed the ties to China](https://perma.cc/FZD3-TP7N) in August 2024.

**Reverse WHOIS search for "Xiao Red"** [reveals](https://perma.cc/2REQ-ZREV):
- **youtab.ai**
- **anyme.ai**
- **riftpodcast.ai**
- **manusvm.ai**

[Archived snapshots](https://archive.today/oXCiI) of **youtab.ai** explicitly state: **"Youtab.ai - a side project by EarlyBird"**

**EarlyBird** is the company of Luo Baishun (Roy) and Wu Qin--the same Luo Baishun who served as Product Hunt "hunter" for every single Monica launch and over 100 other products including ByteDance's CapCut.

This reverse WHOIS connection establishes the direct link between Monica's founder (Xiao Hong) and the indie hacker network (Luo Baishun) that amplified Monica's launches across Western tech communities.

---

### Sir Herny:

At this point we've established that Xiao sometimes goes by the totally believable pseudonym Herny York. ..I mean Henry York. 

**Here's where it gets funny:** For nearly two years, Monica's backend contained a frontend-facing spelling error. The system administrator was listed as **"Herny York".**

I of course was concerned, and being the nice guy that I am, [I emailed Xiao](https://perma.cc/B2VQ-9BER); alerting him to this typo.

It was fixed almost immediately, unfortunately. 
...unfortunately *for Herny that is. I archived it [before the email](https://perma.cc/4QYX-4RN4), and [after they fixed](https://perma.cc/YVS3-QSYH) it as well.

While very funny, this may not prove fraud in and of itself; but it does prove something equally valuable: **Herny York** wasn't just a registration artifact or abandoned legacy code. The persona was actively maintained, user-facing, and corrected immediately upon contact. They couldn't spell-check their own fake founder for two years, but they could fix it within hours when caught.

That's the level of operational sophistication behind a $2 billion acquisition.

---

## **III. The Prodigal Child**

You could argue crown jewel of Meta's acquisition was the gaining "genius" of Chief Scientist Peak Ji; the main developer behind Manus AI.

### So.. who the heck is Peak Ji?

Yichao "Peak" Ji (季逸超) is a 33-year-old Chinese "prodigy" who "developed" the "Steiner" "reasoning" "model."

Ji Yichao was selected for the **Forbes China 30 Under 30** list in 2013. At age 20, he was the youngest honoree on that year's list and even appeared on the cover of the magazine.

Ji was recognized for founding **Peak Labs** at age 19 with Sequoia China backing; an internet company that launched products including the Mammoth 5 mobile browser and Jigsaw, a data visualization toolset. The Mammoth browser briefly became the [most downloaded](https://www.technologyreview.com/2025/09/08/1122642/ji-peak-yichao-innovator-manus-app-ai/) third-party browser for iPhone in China.

### The Steiner Reasoning Ruse: *Say Something Smart Qwen*

 Steiner is Ji's proprietary reasoning model. So what's so special about Steiner?

Well Steiner is pretty "special."
 
 Because while **Monica** may be the equivalent of ***wrapping*** a **McLaren** badge on a **Ford Pinto…

And while ***Manus*** may be little more than **glorified** automation ***wrapper*** that talks to itself...

**Steiner** is a… wrapper.

To be specific, it's 30 lines of Python wrapped around Alibaba's Qwen 2.5 model. 

### But What is it Exactly?

On HuggingFace under [`peakji/steiner-32b-preview`](https://huggingface.co/peakji/steiner-32b-preview), the "revolutionary" architecture is laid bare. [(archive)](https://perma.cc/S928-MA23)

**The base model is Alibaba's Qwen2.5-32B**--a publicly available open-weights model that Alibaba Cloud designed, pretrained, instruction-tuned, and RLHF'd. That's the actual intelligence. That's what does the thinking. Peak Ji didn't build that. Alibaba did.

What Peak did was train in a handful of made-up control tokens and wrote 30 lines of Python that forces the model to prefer those tokens.

The fancy-looking "Thought for 4 seconds → Understanding the Task → Identifying the Question → Confirming the Version" output that users saw? That's the template. Not the thinking.

**Peak's entire contribution:**

1. He added 14 new control tokens to Qwen's vocabulary--things like: `<|begin_reasoning|>`, `<|reasoning_step_start|>`, `<|end_reasoning|>`. These are just markers. They carry no intelligence. They're labels.

2. He did a small amount of continued training so the model would learn to use these new markers sometimes. This didn't make the model meaningfully smarter; it taught it to insert the tags.

3. He wrote a ~30-line Python script (`reasoning_constraints`) that runs at generation time and **forces** the model to emit these tags in a rigid sequence--suppressing all other tokens at key decision points by crushing their probability to effectively zero.

That's the whole thing. That is the entirety of the "revolutionary reasoning model."

**And it made the model worse.** Peak's own experiments, published in his HuggingFace repo, showed that increasing the number of forced reasoning steps **degraded performance** on hard benchmarks like MMLU-Pro and GPQA. The student didn't think harder when forced into more template steps; the student got stuck overthinking, repeated itself, and produced shallower actual reasoning. Peak documented this. He published the negative results. He knew. And any reasonable developer would have known the chances of success were nil; but at this point, we know it was likely never about developing a real reasoning model. Ji said just enough to CYA in the most technical way possible, using terms like **[inference-time scaling curves](https://huggingface.co/peakji/steiner-32b-preview)**--while simultaneously [overselling it significantly](https://x.com/peakji/status/1898996011969998944) in public facing comments and interviews. 

---

### The Technical Reality

*For the non-technical reader: this section lays out the actual source code and mechanics. The summary above covers the key points. For engineers and AI researchers who want to verify the claims in this exposé, here it is--all of it.*

**Here is the actual source code for the "revolutionary" reasoning engine:**

```python
"""
Project Steiner, Yichao 'Peak' Ji <pj@ieee.org>
https://huggingface.co/collections/peakji/steiner-preview-6712c6987110ce932a44e9a6 

vLLM logits processor for inference-time scaling experiments.
"""

def reasoning_constraints(min_steps=0, max_steps=10):
    """Create logits processor for inference-time scaling experiments."""

    # Special tokens used to control the reasoning behavior.
    reasoning_start = 151665
    reasoning_end = 151666
    reasoning_proceed = 151667
    reasoning_backtrack = 151668
    reasoning_step_start = 151669
    reasoning_step_end = 151670

    def logits_processor(token_ids, logits):
        max_logit_value = 9999.999

        # Steiner has not yet been optimized for multi-turn conversations.
        # To mitigate the impact of previous conversations or few-shot examples
        # on the reasoning format, here we modify the logits to ensure that the
        # first completion token is always <|reasoning_start|>.
        if not token_ids:
            logits.fill_(-max_logit_value)
            logits[reasoning_start] = max_logit_value
            return logits

        # For inference-time scaling experiments, modify the logits to ensure
        # that the number of reasoning steps falls within the specified range.
        if token_ids[-1] == reasoning_step_end:
            n = token_ids.count(reasoning_step_end)
            logits.fill_(-max_logit_value)
            if n >= max_steps:
                logits[reasoning_end] = max_logit_value
            elif n < min_steps:
                logits[reasoning_proceed] = max_logit_value
            else:
                logits[reasoning_end] = max_logit_value
            return logits

        # Ensure to start a new reasoning step after deciding to proceed or
        # backtrack, rather than ending directly.
        if token_ids[-1] in (reasoning_proceed, reasoning_backtrack):
            logits.fill_(-max_logit_value)
            logits[reasoning_step_start] = max_logit_value
            return logits

        return logits

    return logits_processor
```

**What this does, line by line:**

Qwen2.5-32B originally has ~151,646 tokens in its vocabulary. Peak extended the tokenizer with 14 new token IDs starting at 151665 and resized the model's embedding matrix from `[~151646, 4096]` to `[~151660, 4096]` to accommodate them. The new embedding rows were initialized and then weakly trained through a small phase of continued pretraining and supervised fine-tuning on synthetic reasoning traces, plus a reward model pass on structured output. This is the only step that gives the new tokens any learned representation at all; without it they'd be random noise.

The logits processor itself is a **decoding-time constraint**--not a training innovation. At every generation step, it intercepts the logits vector (the pre-softmax probability distribution over all ~151,660 tokens) and overwrites it:

- **First token:** Everything gets set to -9999.999 (effectively impossible). Only `reasoning_start` (151665) gets set to +9999.999. The model *must* begin with this tag. No choice.

- **After a reasoning step ends** (`reasoning_step_end`): The processor counts how many steps have been completed. If `max_steps` is reached, it forces `reasoning_end` (termination). If `min_steps` hasn't been reached, it forces `reasoning_proceed` or `reasoning_backtrack` (continue). In the default range, it allows either termination or continuation. Again--all other tokens are crushed to -9999.999.

- **After proceed or backtrack:** Forces `reasoning_step_start`, beginning a new step. No other option.

- **Everything else:** Normal generation. The model writes freely within a reasoning step.

This creates a hard-enforced state machine at the output layer. The sequence is always: `start → step_start → [free text] → step_end → proceed/backtrack/end → step_start → ...` The model cannot deviate from this structure.

**What this is not:** This is not inference-time compute scaling. True inference-time scaling--as implemented in OpenAI's o1--involves end-to-end reinforcement learning where the model is trained to allocate internal computation effectively, learning *when* and *how* to think harder on difficult problems. The model's internal representations change. Steiner's logits processor does not touch the model's internal representations. It operates exclusively on the output distribution. The "thinking" happens in the same forward pass as vanilla Qwen2.5-32B. The only difference is that the output gets forced into structured tags.

**Peak knew this.** His own ablation experiments, published in the HuggingFace repo, showed performance degradation on MMLU-Pro and GPQA when increasing `max_steps`. He described Steiner as "a small step" and "work-in-progress" that "cannot currently be considered a successful reproduction of o1." The repo is full of careful disclaimers--the technical CYA version, written for engineers who might actually read the code.

In his public-facing writing--Medium posts, interviews, Monica's marketing--the language shifted to "exploring multiple reasoning paths," "autonomously verify or backtrack," and "linear traversal of the implicit search tree." The HuggingFace repo says it doesn't work well. The marketing says it's revolutionary. Peak was honest where engineers would check and promotional where investors would look.

**That's not reasoning. That's indentation with a marketing budget.**

---

### **The Double Fraud**

As [Chief Scientist responsible for Monica's model infrastructure,](https://perma.cc/DW22-MY2G) Peak Ji built the systems that routed user requests. Variations of the "Steiner" reasoning wrapper architecture appeared across [multiple Monica models](https://perma.cc/834A-BKLA) [img](https://perma.cc/YEK3-Z99Y), suggesting this was Peak's standard approach: build a wrapper around existing models and market it as breakthrough technology.

But it gets worse. My archives prove that even this fraudulent "wrapper" wasn't what users actually got. When "Steiner" was tested in Monica, the responses didn't come from Qwen2.5-32B--with or without the cosmetic wrapper. **[They came from Claude 2.](https://perma.cc/T49H-NSXH)**

This matters technically. Claude 2 has **none** of Steiner's special tokens in its vocabulary. The logits processor can't run on an Anthropic API call. The structured "Thought for 4 seconds" output that users saw when selecting "Steiner" in Monica was achieved through **system prompt engineering alone**--instructions telling Claude 2 to format its responses as if it were doing step-by-step reasoning. No special tokens. No processor. Just a cheaper, older model wearing a costume.

So here's the actual sequence:

1. Peak Ji takes Alibaba's Qwen2.5-32B (publicly available; trained by Alibaba)
2. Adds special tokens and a 30-line formatting script
3. Tests it; documents that forcing more steps makes performance worse
4. Markets it as a "revolutionary reasoning model" comparable to o1
5. Monica AI advertises "Steiner" to users as an exclusive, breakthrough model
6. Monica AI secretly routes "Steiner" requests to **Anthropic's Claude 2** instead
7. Users pay premium prices thinking they're accessing revolutionary tech
8. Meta acquires the company for $2+ billion, with Peak Ji as "Chief Scientist"

**Meta paid $2+ billion for Ji's "genius." Yet his previous heavily-marketed "revolutionary reasoning model" was a 30-line formatting script on top of someone else's model--that his own experiments proved made performance worse--and they didn't even serve *that* to users.**

---

### **Manus AI's Absurd Marketing Claims**

Let's talk about what Yichao Ji claims Manus can do.

According to their marketing materials and interviews with Xiao Hong:

> "Touting its edge over chatbots in terms of performance, Manus also claims it can quickly devise an itinerary for a trip to Japan, provide an in-depth analysis of Tesla's stock and offer real-estate tips in New York based on a family's requirements."

Xiao explained that an AI agent is "more like a human being" because it "does not only think and answer questions, but interacts with its environment, collects feedback and uses the feedback as a new prompt."

**That's... just agent loops. That's Claude with tools. That's ChatGPT with tools.** That's basic agent architecture that's been around for years. Nothing revolutionary here.

But here's where it gets truly absurd:

> **"According to Butterfly Effect, the AI agent even outperformed OpenAI's Deep Research based on the GAIA benchmark, a third-party measure of general AI assistants."**

Let's pause on that claim, because it's doing a sleight-of-hand.

"Deep Research" is a long-form research mode--multi-step browsing + synthesis--meant to sit there and dig; not book your flights, not run your calendar, not click UI elements, not act like a deterministic automation bot. Comparing an agentic wrapper pitched for doing "real world tasks" (like bookings) to a research mode, and then calling it a win, is the definition of apples-to-oranges.

And even setting the category error aside: Peak Ji couldn't build a reasoning model without wrapping Claude and faking the chain-of-thought steps--yet now we're supposed to believe he built a wrapper that outperforms Deep Research while also being built on other people's models (Peak stated publicly that Manus uses "fine-tuned" Anthropic Claude and Alibaba Qwen)?

**Meta paid $2 billion for this glorified prompt.**

---

## **IV. THE SECURITY THREAT**

**CVE-2024-45989**: Registered vulnerability in Monica Desktop App. Allows attackers to exfiltrate a user's entire chat history via prompt injection. No user interaction required. Published in the National Vulnerability Database. Publicly available before Meta's acquisition closed.

**Mindgard Classification**: Security researchers at Mindgard analyzed the Manus "Browser Operator" extension. Their published finding: it uses Chrome Debugger API permissions (allUrls, cookies, localStorage) so aggressive that it is "functionally indistinguishable from a sophisticated malware implant." That is a third-party security firm's characterization, not the author's.

**USENIX Study**: Comparative academic security audit confirmed Monica collects full HTML from visited pages--including sensitive tax and health portals--regardless of user intent, building persistent cross-site profiles.

**The Binary**: A public CVE and a published "malware" classification existed before the acquisition closed. Meta either missed both (the CVE was in the National Vulnerability Database), or saw them and proceeded anyway. A $2 billion deal that closes in 10 days with a public CVE isn't an oversight. It's a decision. (Just wait until we get to Project Aldrin. 😬)

---

## **V. THE NETWORK: A COORDINATED ECOSYSTEM**

Monica and Manus sit at the center of a distributed network spanning multiple jurisdictions, shell companies, and coordinated marketing infrastructure.

### **Zhang Tao: The ByteDance Connection**

Zhang Tao is Butterfly Effect's third co-founder and Chief Product Officer. He is a **15-year veteran of ByteDance**, the Chinese tech giant behind TikTok and CapCut. His online handle is **"Hidecloud"**--which is also his [Product Hunt username](https://megalodon.jp/2026-0130-1355-09/https://www.producthunt.com:443/@hidecloud), where he's listed as a maker of Manus. His Product Hunt page links to **RiftPodcast**--the same RiftPodcast that shows up in Xiao Red's reverse WHOIS records. Small world.

In early 2024, (before Manus existed), **[ByteDance attempted to acquire Butterfly Effect for $30 million](https://perma.cc/7YXS-JVQB?type=image)**--trying to bring Zhang and the product back in-house. Xiao declined. The offer was substantial for a glorified wrapper serving other people's models; and it also conveniently established Butterfly Effect's legitimacy as a company worth acquiring. Funny how that works.

Under Zhang's product guidance:
- Monica reached ~4 million users by mid-2024
- Monica scaled to 10+ million by December 2025
- Manus achieved millions on its waitlist in 2025
- Manus reached $100M ARR within months of launch

Zhang coordinated Monica's pivot into domestic China deployment by partnering with Alibaba Cloud's Tongyi Qianwen team. He managed the company's "relocation" from Wuhan to Singapore in 2023, transferring staff on paper while maintaining Chinese R&D operations.

In team photos after the Meta acquisition, Zhang stands alongside Xiao and Peak. All three are now Meta executives.

### **WHOIS Who?**

[Luo Baishun (Roy)](https://archive.today/FuF2C) is a Chinese indie maker self-described as a "proud dadpreneur and indie hacker." But his role is more strategic than it appears.

As of March 2025, Luo had been the "hunter" for [**over 100 products on Product Hunt.**](https://perma.cc/BED4-NGJA?type=image) Not just one Monica launch, but **every single Monica launch had Luo as the hunter:** Monica's initial launch (March 5, 2023), Monica 4.0 (December 28, 2023, #1 Product of the Day), every update--all hunted by Luo.

Among his 100+ hunts:

- **Monica** (3 separate launches)
- **Monica 4.0** (#1 Product of the Day)
- **CapCut** (ByteDance's official video editor)
- **CapCut Image Batch Edit** (ByteDance)
- **Dreamina** (ByteDance's official AI creative suite)

This isn't hypothetical. **CapCut and Dreamina are officially ByteDance products**. Luo hunted them on the same platform where he hunted Monica--coordinated product marketing infrastructure linking Monica to ByteDance's distribution strategy through Zhang Tao's connections.

Since initial documentation and archival in March 2025, Luo's original Product Hunt profile has been scrubbed. His username was changed to his new handle, LuoSays--making his old account unsearchable using his old account--and a new account appeared under the pseudonym **"Justin Jincaid."** [(archive)](https://www.producthunt.com/@justin2025)

Here's the kicker: on his personal site [dearroy.com](https://perma.cc/7ES2-32DD), Luo lists many of his Product Hunt launches--and the page includes products from **both accounts**, with the "Justin" hunts starting right where the Luo Baishun hunts stopped. [(archive)](https://archive.today/0AvX6) He literally documented his own pseudonym rotation on his own website.

Also worth noting: Luo's Reddit account ([u/luobaishun](https://megalodon.jp/2026-0127-1458-26/https://web.archive.org:443/web/20250626093407/https://www.reddit.com/user/luobaishun/)) was **banned**. He was a moderator of r/ShipIt and r/jingle--[both also banned.](https://megalodon.jp/2026-0130-0940-37/https://www.reddit.com:443/r/jingle/) His original X/Twitter account ([x.com/luobaishun](https://x.com/luobaishun)) no longer exists either--having moved over to his newewt handle, [x.com/luosays](https://x.com/luosays)

**Digging deeper into the Xiao-Luo Connection:**

As discussed, running a historical WHOIS search on the [Monica AI search](https://monica.so) domain name [reveals an initial registrant of "Xiao Red" in China](https://perma.cc/8K4N-5ESG). Running a reverse WHOIS on Xiao Red [connects Herny to youtab.ai](https://archive.today/oXCiI)--which explicitly identifies itself as **"a side project by EarlyBird"** (Luo and Wu Qin's company)--establishing the direct corporate link between Monica's pseudonymous founder and the "indie" network amplifying its Western launches.

Looking at the [partners page](https://perma.cc/X2RD-CQJN) on the EarlyBird site reveals an interesting list of companies:
- [HeyForm](https://heyform.net/) -- [founded by](https://archive.today/VVrqB) **Luo Baishun**, **Jijo Paul**, and **"Mu Feng"** (Wu Qin)
- [Jingle Bio](https://jingle.bio/)
- [TinySnap](https://tinysnap.app/)
- [Xego AI](https://xego.ai/)
- [Mom Clock](https://momclock.com/)
- [Forget - Breakup Recovery App](https://theforget.app/)
- [Whoa!](https://whoa.im)

There's some interesting names in that list. But the most notable are **Whoa!** and **Xego AI**.

### **Whoa! There**

[Whoa!](https://archive.today/WHgz2), using the same ".im" Isle of Man privacy-centric TLD as [Monica](https://archive.today/20FAd) and [Manus](https://archive.today/Bsyed), contains some peculiar threads worth pulling. 

The [Terms & Conditions](https://archive.today/xwoUP) page reads:

> **ColoMX LLC**  
> 30 N. Gould St. Ste R  
> Sheridan, WY 82801, USA  
> hi@whoa.im

That address--**30 N. Gould St., Sheridan, Wyoming**--is one of the most documented fraud addresses in the United States. [KSL News](https://archive.today/RBCY4) investigated it as a hub for cybercriminal shell companies: *"Virtual Wild Wild West: Cybercriminals use Wyoming shell companies for global hacks."* [The Sheridan Press](https://archive.today/xruMe) has covered scam after scam originating from the address. [MalwareTips](https://archive.today/EOJfu) published an exposé on the address's use across multiple fraud operations.

ColoMX LLC was [incorporated in Wyoming in October 2013](https://perma.cc/GJ2L-S32Y). Its original WHOIS records for associated domains (like [paulhost.com](https://whoisfreaks.com/tools/user/whois/history/lookup/paulhost.com)) list the registrant country as **China** and a phone number with the country code **+86** (China). An IP lookup for ColoMX infrastructure resolves to [187 E Warm Springs Rd, Las Vegas, NV](https://archive.today/EroRy)--registered to **MyCompanyWorks**, a virtual office / registered agent service.

A Wyoming shell company at a notorious fraud address, originally registered from China, providing US-based infrastructure for a network of apps and services connected to the same people running a documented fraud operation. In the same jurisdiction that happens to be the most permissive in America for anonymous company formation.

### **Xego AI and Stack Network Limited**

[Xego AI](https://archive.today/gJ6CX) is listed as an EarlyBird partner. Its [Apple App Store page](https://archive.today/kCm9e) reveals the publisher: **Stack Network Limited**.

[Stack Network Limited](https://archive.today/naJFk) (CR No. 2256337)--originally incorporated as **"PACIDC Technology Limited"** before a 2016 name change--is registered in Hong Kong with [Luo Baishun as Director](https://perma.cc/AQF4-96W9), appointed November 17, 2015. Born August 1991; Chinese nationality; correspondence address at 26 Shucheng Road, Hongshan District, China.

Stack Network's [App Store portfolio](https://perma.cc/DYR9-GW53) includes Xego AI, Mom Clock, Forget (Breakup Recovery), GNGM (Sleep Habit App), and God's Will (Daily Bible). The compan[[]]y operates **214 domains on a single IP address (163.223.146.140)** [(network analysis)](https://networksdb.io/domains-on-ip/163.223.146.140).

Its [archived contact page](https://perma.cc/8D5P-DTS7?type=image) lists offices in San Jose (California), Kochi (India), and Wan Chai (Hong Kong). Its [LinkedIn](https://archive.today/gCHcI) claims 22 employees.

This wasn't just friendly cross-promotion between indie makers. Xiao Hong registered domains for Luo's projects. Luo hunted every Monica launch. Wu Qin ("Mu Feng") co-founded EarlyBird with Luo and [co-founded HeyForm](https://archive.today/VVrqB). The entire network operated as distributed amplification for each other's products across jurisdictional boundaries.

### **The Corporate Structure**

The network operates through entities compartmentalized across four jurisdictions:

| Entity | Jurisdiction | Function | Key Products |
|--------|--------------|----------|--------------|
| **Butterfly Effect PTE LTD** | Singapore | Parent; VC-facing entity | Monica, Manus |
| **Beijing Butterfly Effect** | China | R&D operations | Chinese-market Monica |
| **Stack Network Limited** | Hong Kong | App publishing; 214 domains | Xego, Forget, GNGM, God's Will |
| **ColoMX LLC** | United States (Wyoming) | Hosting/infrastructure | Whoa!, VPS services |
| **EarlyBird, Inc.** | United States | SaaS/payments | HeyForm, TinySnap, Jingle Bio |

The structure provides: Western legitimacy (Singapore parent for VC funding and Meta acquisition), app store compliance (Hong Kong publisher), payment processing (US entities for Stripe/PayPal), R&D operations (China base), and jurisdictional complexity that obscures ultimate control.

## **VI. Project Aldrin: The Decade-Long Context**

Between 2014 and 2024, Meta ran a restricted, need-to-know initiative called **"Project Aldrin"**--its secret mission to get into China.[^2] Former director of global public policy **Sarah Wynn-Williams** testified under oath that Aldrin involved working **"hand in glove"** with the Chinese Communist Party to build custom censorship tools and a **"physical pipeline connecting the United States and China."**[^1] She described the project as so aggressive that **"there was no bridge too far,"** and said Meta executives **ignored internal warnings** that Aldrin would provide a backdoor for the CCP to access the personal data and private messages of American users.[^2][^1]

According to Wynn-Williams, **"The only reason China does not currently have access to U.S. user data through this pipeline is because Congress stepped in."**[^1] Senators reviewing Aldrin materials called it, in effect, a **direct pipeline to Beijing for American user data**--a physical instantiation of the same "no bridge too far" mindset she watched play out inside Meta's leadership.[^2][^1]

Congress blocked that particular route. What it didn't block was Meta's broader strategy: using massive subsea cables across Asia-Pacific to position its infrastructure as close as possible to key regional hubs. Meta has since announced and invested in multiple high-capacity cables--**Bifrost**, **Apricot**, and **Candle**--linking the U.S., Japan, the Indonesia, Malaysia, Taiwan and the Philippines with combined capacity in the hundreds of terabits per second.[^3][^4][^5] Those systems explicitly exist to deliver Meta's products, services, and AI workloads into and across the region.[^3][^4][^5]

While Aldrin's original "direct to China" plan was stopped, Meta's physical footprint in the region did not shrink; it **shifted**. The Philippines and Taiwan emerged as critical landing points and switching hubs in Meta's Asia-Pacific cable strategy.[^3][^4][^5]

But I'm sure if whistleblower Sarah Wynn-Williams is right, surely they'd never route those cables through countries where China already has physical infrastructure waiting at the other end.

---
### **The Philippines Problem**

When a subsea cable reaches land, it doesn't keep going. It **terminates**. The cable's optical fiber ends at a cable landing station, where **submarine line terminal equipment (SLTE)** converts the signal for handoff to terrestrial networks.[^6] Every byte of traffic on that cable passes through the infrastructure at the landing station before it reaches a data center, an end user, or another cable segment. These stations are where subsea meets land--and where physical access to that traffic exists.

Meta's **Bifrost** and **Apricot** cables both terminate in **Davao, Philippines**.[^6] Apricot also lands in **Aurora** (Philippines) and **Toucheng** (Taiwan).[^6] These are not minor spurs. They are primary trans-Pacific infrastructure carrying hundreds of terabits per second of Meta's products, services, and AI workloads across Asia-Pacific. Meta's landing partners in the Philippines--**PLDT** and **Converge**--operate or co-locate at the cable landing station facilities where this traffic arrives.[^6]

Also terminating in the Philippines: **SEA-H2X**--a **160 Tbps subsea cable** built by **HMN Technologies**, a **Chinese state-linked company**, connecting the Philippines **directly to Hainan, China** and Hong Kong.[^7]

The physical path:

```
US user data → Meta's Bifrost/Apricot cable →
Davao cable landing station (Philippines) →
Terrestrial network handoff →
SEA-H2X cable (Chinese state-linked) →
Hainan, China
```

Those cables exist. Those landing stations exist. That terminal equipment exists. The physical path from Meta's trans-Pacific infrastructure to Chinese soil runs through the Philippines, and it is already built.

**No one is watching.** There is no international body that monitors data routing at cable landing stations.[^8] UNCLOS--the United Nations Convention on the Law of the Sea--criminalizes cable *damage* but says nothing about cable *interception* or data access at landing points.[^8][^9] US jurisdiction ends at the cable's American terminal. The Philippines has no legal obligation to monitor or report how traffic is routed once it arrives on Philippine soil.[^8] And Meta controls its own cables--no third party has visibility into routing decisions made at the infrastructure it owns.

**China already has physical access to these cables.** **SBSS**, a Chinese state company, provides repair and maintenance services for international subsea cables in the Pacific--**including cables owned by Meta and Google.**[^10] These repair ships have legitimate, authorized physical access to cable infrastructure. They have also been documented **hiding their locations from vessel tracking systems** while operating near Taiwan, Indonesia, and the Philippines.[^10]

Since 2018, over **27 documented cable-cutting incidents** have occurred near Taiwan, the majority involving Chinese-flagged or Chinese-crewed vessels.[^11] Taiwan responded by upgrading cable protection to critical infrastructure status in 2024 and blacklisting 96 suspicious vessels.[^11] The Philippines has not implemented comparable protections.[^11] And in 2024-2025, Chinese cyber espionage group **UNC3886** was caught infiltrating **telecom networks in Singapore**--the same type of infrastructure, the same region, the same access patterns.[^12]

**The FCC blocked the front door.** Direct US-to-China submarine cable connections are now subject to **presumptive denial**--the US government effectively shut down the direct pipeline.[^13] But the Philippines and Taiwan segments of these same cable systems? **Approved.**[^13] The FCC's restrictions apply to endpoints. They do not apply to the landing stations in between. Congress blocked the direct route to China. The indirect route--through Philippine landing stations where a Chinese state-linked cable already terminates--remains wide open.

**What this infrastructure enables is not theoretical.** The PLA's Academy of Military Science has published research documenting **ChatBIT**, a military AI tool built on Meta's open-source Llama 13B, purpose-built for intelligence analysis, strategic planning, and command decision-making.[^14] Chinese military researchers have explicitly cited their **lack of comprehensive Western social media training data** as the primary limitation for intelligence-focused AI systems.[^14] In 2025, Meta announced it would train AI on the public posts, comments, and interactions of its nearly **four billion active users**. Data that, if routed through Philippine landing stations with zero international oversight, represents the single most valuable intelligence corpus available to any state actor with the infrastructure to access it.

At least one Chinese AI firm has already been documented **collecting data on members of the US Congress and other prominent Americans**.[^15] Chinese military AI systems are designed to identify US military personnel through social media, craft personalized social engineering attacks against Department of Defense employees, and generate micro-targeted psychological operations.[^14][^15] The infrastructure to intercept the data that feeds these capabilities terminates at the same landing stations where Meta's cables arrive.

Meta built hundreds of terabits of capacity into the Philippines. The country where a Chinese state-linked cable provides a direct physical path to the mainland. Where Chinese state repair ships already service Meta's cables with authorized access. Where no international body monitors data routing. Where the FCC's restrictions on direct US-China connections do not apply. And Meta did this after spending a decade trying to build a direct physical pipeline to China under Project Aldrin--a project its own executives warned would give the CCP backdoor access to American user data.


---

## **VII. OPENAI'S FAILURE**

### **March 2025: The Notification**

I first attempted to contact Anthropic directly--they were the primary victim, with Claude systematically mislabeled across Monica's platform. Their support system routes through an AI chatbot that wouldn't let me through. I got frustrated with Fin, the dense AI, so I gave up.

**I contacted OpenAI instead.**

At this point, Monica had been operational for **two years**  (launched March 2023) and had **millions of users**. This wasn't an early-stage startup--it was an established platform at massive scale.

On March 14, 2025, I submitted comprehensive evidence to OpenAI, including:

- Model confession logs across several different "flagship models" with immutable archives
- Direct evidence linking Monica to China
- Xiao Hong/Henry York identity evidence and WHOIS trails
- **Luo Baishun's Product Hunt network showing coordination between Monica launches and ByteDance product launches**
- Complete evidence package preserved via Perma.cc and archive.today

### **Shhh 🤫**

**March 18, 2025 -- OpenAI Support (Rosario):**

> "Thank you for following up and for your continued efforts in sharing this important information with us. We recognize the significance of your findings and want to assure you that they are being taken very seriously. **The evidence you've provided has been escalated to the appropriate teams at OpenAI for a thorough review.**
> 
> While we can't disclose specific details about our internal processes, please know that **we are actively investigating the matter** and carefully assessing its implications. We truly appreciate your patience as we work through this.
> 
> Regarding your question about sharing this information publicly, **we kindly ask that you refrain from doing so for now**. Allowing us the time to conduct a **comprehensive review** will help ensure that the necessary actions can be taken without compromising the investigation."

 *"Regarding your question about sharing this information publicly, **we kindly ask that you refrain from doing so for now."***

Welp...

### **February 2026: No Documented Public Action**

**Ten months later:**

- ❌ No visible enforcement action against Monica
- ❌ No public warning to Monica's millions of users
- ❌ No update to me about the investigation
- ✅ Monica remains on Chrome Web Store (3M+ users), App Store, Play Store, Microsoft Edge
- ✅ **10+ million users continue to be systematically deceived**
- ✅ Monica's current site now advertises non-existent models: "GPT-5.2," "Gemini 3 Pro"

While the public record shows no resulting action From OpenAI, **they have at the very least been busy.**

**With their upcoming IPO.** 

I have some personal grievances, but I was advised it would be unprofessional at this point for me to complain about how OpenAI has [seemingly degraded their model](https://www.perplexity.ai/page/gpt-degradation-dossier-F0bRK8swTSKMP1MS.SZdrA) into what many would call sterilized, with context degredation issues making it feel borderline lobotomized--**so I won't.**

Monica pays millions in API fees. Draw your own conclusions about what "investigating" means when your largest-volume fraud customer is also a significant revenue source--and when going public with enforcement would create the kind of headline that makes prospective shareholders nervous. *(I'm sure nobody will see this; you're probably fine.)*

---

## **VIII. MY FAKE DISCLOSURE AND HERNY'S REAL RETALIATION**

Understanding the December 2024 email exchange requires context about what I was trying to accomplish.

**What I Had (Already Archived by December 2024):**

- Complete model confession logs across every current flagship badge
- Multi-month pattern of systematic deception
- Economic motive evidence

**What I Couldn't Prove Yet:**

- Chinese ownership/origins (WHOIS obscured, didn't know about monica.so yet)
- Internal company structure
- Connections to broader network

**The Strategy:**

When I sent the December 27, 2024 email to henry@monica.im, a non-public email for Herny. **But I wasn't disclosing findings--I was trying to get more information.** The email was worded to suggest I had evidence (true) while offering to "help mitigate risks" (hoping they'd engage so I could get some more information).

**What happened was immediate retaliation.**

### **The Timeline**

**December 24, 2024:** My Monica account displays my real name, I have over 335 days of Ultimate membership left 

**December 27, 2024 [archive](https://perma.cc/4PB9-7NZ4) [pdf](https://perma.cc/44P3-9UVH):** I email henry@monica.im--a non-public email of Xiao's--using a VPN and an email alias under my pseudonym "Kuro Pax"

**December 27, 2024 (8 hours later) [archive](https://perma.cc/92HJ-WVJ9) [pdf](https://perma.cc/B7CT-7N4S):** I receive an email from noreply@monica.im to my email address that's registered with Monica AI:

> Subject: **"Think again? Monica might be more essential than you realize."**
> 
> Dear **Kuro Pax**, We noticed that you recently chose to cancel your subscription...

Please note that at this point in time, I had **335 days of paid Ultimate membership remaining**--I never cancelled anything, and my membership never stopped being active.

**Within *8 hours of contacting them,* never even saying *what* I found, nor providing evidence of anything, they:**
- Connected my email alias to my paid account (different email addresses and names)
- Fabricated a cancellation claim despite hundreds of days remaining
- ***Changed my account name to match my investigator pseudonym***
- And **sent an intimidation email disguised as customer retention**

The email's tone was carefully threatening:

> "Life without Monica might be more challenging than you anticipate... You may spend an additional 2+ hours daily on tedious tasks... Work efficiency plummets..."

**They knew someone had the evidence. They knew it was me.**

**And the fraud operation continued unchanged.**

---

## **IX. META'S $2 BILLION QUESTION**

In December 2025, Meta acquired Manus for over $2 billion. The deal closed within approximately 10 days. All three co-founders became Meta executives:

- **Xiao Hong:** Vice President, reporting to COO Javier Olivan
- **Peak Ji:** Senior technical role
- **Zhang Tao:** Senior product role

Along with additional personnel from ByteDance-adjacent backgrounds now inside Meta's organization.

Let's be clear about what Meta bought:

**An agentic wrapper** built by the team that:
- Spent two years running systematic model fraud at Monica AI
- Built a "revolutionary reasoning model" (Steiner) that was Alibaba's Qwen2.5-32B with 30 lines of formatting code--and didn't even serve *that* to users
- Came with a registered CVE (CVE-2024-45989) allowing chat exfiltration via prompt injection, and a published "malware" classification from Mindgard regarding the browser extension
- Claims in marketing/interviews that Manus "outperformed OpenAI's Deep Research on the GAIA benchmark" despite the claim being preposterous

**What was publicly available during due diligence:**
- Monica and Manus share the same parent company (Butterfly Effect PTE LTD)--visible in basic corporate filings
- All three founders controlled both companies--visible in LinkedIn, press releases, company registrations
- Monica had 10+ million users, 2+ years of operation, browser extensions with 3M+ installs
- Chinese ownership despite Singapore incorporation; fake Western persona ("Herny York"); [Taiwanese press coverage](https://perma.cc/FZD3-TP7N) exposing China ties
- Zhang Tao's 15-year ByteDance background visible in public profiles
- CVE-2024-45989 in the National Vulnerability Database
- Mindgard's "malware" classification publicly available
- Peak Ji's "Steiner" code published on HuggingFace--anyone could check in an afternoon
- Reverse WHOIS connecting Xiao Hong to Luo Baishun's network, along with direct ties on Product Hunt--establishing coordinated marketing infrastructure

---

**So how does a team that can't build a reasoning model without calling someone else's API and faking the results... build an agent that outperforms the models it's calling?**

**And how does a $2 billion acquisition close in 10 days when the parent company's flagship product has 10+ million users actively being deceived about what they're paying for, a registered CVE, and a "malware" classification?**

The charitable interpretation: Meta's due diligence team failed so catastrophically that they didn't Google their own acquisition target, didn't check the National Vulnerability Database, didn't spend 15 minutes on HuggingFace, didn't look into any of the known business connections. This would make it the most expensive due diligence failure in Silicon Valley history.

The less charitable interpretation requires considering what Mark Zuckerberg spent a decade trying to achieve through Project Aldrin before Congress "shut it down": direct access to Meta's infrastructure by China, and through that, access to the Chinese market for Meta.

And a third interpretation that doesn't require assuming anyone's motives at all: **it doesn't matter whether Xiao Hong is a conscious state actor.** Under China's **National Intelligence Law (2017)**, all Chinese citizens and organizations are legally required to "support, assist, and cooperate with national intelligence work."[^16] Compliance is not optional. This is not a theoretical concern. Butterfly Effect doesn't just operate a Singapore-incorporated parent company with Chinese founders--it actively operates **Beijing Red Butterfly Technology Co., Ltd.** (北京蝴蝶效应科技有限公司), a domestic Chinese subsidiary [registered in Beijing's Haidian District on July 3, 2023](https://perma.cc/CJH8-JMBZ).[^17] This entity runs **[monica.cn](https://perma.cc/9JQD-E6VY)**, a fully operational Chinese-market product whose [terms of service](https://perma.cc/9JQD-E6VY) explicitly reference **national security compliance** (Section 4.1: banning content that harms national security or leaks state secrets), **Cyberspace Administration of China (CAC) content monitoring**, and **anti-jailbreak enforcement mechanisms**.[^17] The governing law is PRC mainland law. The exclusive jurisdiction is the **Haidian District People's Court, Beijing**.[^17]

The founders of this entity--an active Chinese subsidiary operating under PRC jurisdiction with explicit national security obligations built into its own legal framework--are now senior executives at Meta with access to AI infrastructure, cable routing systems, and the data of nearly four billion users. Zhang Tao's 15-year ByteDance tenure creates institutional ties to a company already under intense scrutiny for CCP influence. Peak Ji's documented willingness to commit fraud suggests a lack of ethical constraints that any intelligence service would find useful.

Whether these individuals are agents, assets, or simply Chinese nationals subject to compulsory cooperation--the infrastructure they're building inside Meta **functions the same either way.** The switching hubs don't care about intent. The cables don't care about motive. The data routes the same regardless of whether the VP who oversees it is a patriot, an opportunist, or just a guy who couldn't spell-check his own fake name for two years.

China's Ministry of Commerce (MOFCOM) is reportedly investigating the acquisition under their national security framework--framing it as a "strategic asset transfer." Consider what that investigation actually looks like: China scrutinizing a deal that places Chinese nationals inside Meta as senior executives with access to AI infrastructure and trans-Pacific cable systems. The investigation isn't an obstacle to that outcome. It's a press release that makes the placement look adversarial rather than convenient. If MOFCOM wanted to block Chinese founders from gaining executive access to Meta's infrastructure, they would have blocked it. They didn't. They "investigated."

Meta did all this **after** a former senior executive went before Congress and testified that the company had spent a decade building a **physical pipeline** toward China under Project Aldrin, ignoring internal warnings that it would give the CCP backdoor access to American user data until Congress forced it to "stop."[^1][^2] It did this while continuing to pour money into Asia-Pacific subsea cables that converge on landing stations in the Philippines and Taiwan.[^3][^4][^5] And when it finally found a Chinese-founded, ByteDance-linked AI wrapper company incorporated in Singapore--with 10+ million users and a sprawling data-collection footprint--it signed a $2 billion check in roughly ten days and brought the whole team inside.

**Meta paid $2 billion for a wrapper. Built by the team that spent two years proving they're really good at doing a bad job wrapping existing models and claiming they're something else.**

Or maybe Meta paid $2 billion for something else entirely, and the wrapper was just the vehicle. You decide.

---

## X. CONCLUSION

Butterfly Effect PTE LTD spent three years showing exactly who they are. They wrapped cheap API calls in premium labels. They charged users up to $100 a month for models that didn't exist. They built a "revolutionary reasoning engine" out of 30 lines of formatting code on top of someone else's work--and didn't even serve that. They intimidated the one person who documented it. They scrubbed their profiles, rotated their pseudonyms, and restructured across four jurisdictions. They didn't even generate my banana picture. And when the evidence became undeniable, someone wrote a $2 billion check and made the fraud someone else's problem. (Lookin' at you, Meta.)

Monica AI is still operating. Ten million users are still being deceived--now under Meta's ownership. The Chrome extension still requests permission to read and change all data on all websites. The CVE is still in the National Vulnerability Database. Peak Ji's 30-line formatting script is still on HuggingFace for anyone to inspect. The "Google image generation model" still hasn't generated an image. And the man who couldn't spell-check "Henry" is now a Vice President at Meta, reporting directly to the COO, with access to the AI infrastructure and Asia-Pacific cable systems that Meta spent a decade trying to build a direct pipeline to China through.

OpenAI knew. They acknowledged the evidence, escalated it, asked for silence, and then sat on it for ten months while their largest-volume fraud customer got acquired for $2 billion by one of their biggest competitors. The public record shows no resulting action. The IPO is still on track.

The fraud proves who they are. The corporate structure--Singapore parent, Beijing subsidiary with explicit national security obligations, Hong Kong publisher, indie hacker network laundering Western credibility through Product Hunt--proves how they operate. The reverse WHOIS proves the connections they tried to hide. The retaliation proves they knew exactly what they were doing. And Beijing Red Butterfly Technology Co., Ltd.--still active, still operating monica.cn under PRC jurisdiction, still governed by the Haidian District People's Court--proves they never left.

Project Aldrin, the cables, the Philippine landing stations, SEA-H2X, and the acquisition prove where they're sitting now: inside Meta, inside the infrastructure, at the terminal where American user data arrives on a cable that shares landing stations with a Chinese state-linked cable running directly to Hainan. Congress blocked the front door a decade ago. The side door is open, built, and staffed.

The fraud is archived and immutably decentralized. The infrastructure is physical and traceable. **The question is no longer whether the pieces fit together. The question is who is going to do something about it.**

---

They can fix their typos. They can remove their Product Hunt profiles. They can patch their code. They can sell to Meta. They can request silence from OpenAI. They can restructure across four jurisdictions. They can create fake Western personas. They can intimidate critics.

They can even erase *me.*

***But they can't erase decentralized archives, and as such they can't erase this.*** **Not now--not ever.**

---

**Kuro Pax**  
February 2026

***P.S.** I will say, the delay caused by OpenAI's inaction certainly made the timing of this release more interesting (and objectively funnier). **Congratulations on the VP role, Herny.** I'm sure Meta's due diligence team--and hopefully a few Congressional intelligence committees--will find this illuminating.*

---

**Every claim in this investigation is backed by immutable archives redundantly mirrored across Harvard's [Perma.cc](https://perma.cc), [archive.today](https://archive.today), the Internet Archive's [Wayback Machine](https://archive.org), [Ghost Archive](https://ghostarchive.org) and [Megalodon](https://megalodon.jp). Key evidence sessions are additionally preserved as WACZ web archives on the [decentralized IPFS network](https://ipfs.io)--playable as interactive browser replays via [ReplayWeb.page](https://replayweb.page). No single entity, takedown request, or legal threat can remove evidence distributed across a decentralized mesh. If you'd like to download the WACZ locally, direct download links can be found in the archive list. Even if the ipfs.io domain gets seized, the CID can be used elsewhere to access the data. Please see the raw archive list [here](placeholder.link) to see a full list of all the redundant mirrors, raw CIDs, and raw download links. Each CID is a cryptographic hash of the content itself--if even one byte changes, the hash changes. This makes tampering mathematically impossible and immediately detectable. If you are familiar with IPFS, I encourage you to please pin the CIDs.**

I can be reached at sup@herny.lol but I can't promise I'll see, let alone respond to, every message. My name is David, I'm not hiding, but you can just call me Kuro. And no more intimidation tactics please. It's old and I can't take this down. Also I won't take this down.
### Archive of this exposé: [placeholder link]

### Archive of the Archive List: [placeholder link]

##### Extra exposé mirrors:
[placeholder for more links--bottom ones will redirect before publishing] 
https://URLBit.ch/Herny 
https://Monica.Ratware.lol 
https://Herny.lol
https://immutable.rip/monica_ai_fraud
https://kuropax.com/sir_herny

##### Extra archive list mirrors:
[placeholder for more links--ones below this will redirect before publishing]
https://kuropax.com/monica_ai_archives
https://URLBit.ch/monica_ai_archives
https://Immutable.RIP/monica_ai_archives
https://herny.lol/a_big_list
https://Aldrin.Ratware.lol

---

### Citations:

(This list will be revised to include full WACZ and perma.cc archives of all the sources. All above links will be replaced with updated footer citations.)

[^1]: [Tech Policy Press - Transcript: Former Exec Sarah Wynn-Williams Testifies on Facebook's Courtship of China](https://techpolicy.press/transcript-former-exec-sarah-wynnwilliams-testifies-on-facebooks-courtship-of-china)

[^2]: [U.S. Senate Judiciary Committee - Testimony of Sarah Wynn-Williams (PDF)](https://www.judiciary.senate.gov/imo/media/doc/2024-04-09_testimony_wynn-williams.pdf)

[^3]: [Focus Taiwan - Meta to boost APAC connectivity with subsea cable](https://focustaiwan.tw/sci-tech/202510070014)

[^4]: [Social Media Today - Meta Announces Investment New Subsea Cable Project Asia](https://www.socialmediatoday.com/news/meta-announces-investment-new-subsea-cable-project-asia/802158/)

[^5]: [Computer Weekly - Meta to boost APAC connectivity with subsea cable](https://www.computerweekly.com/news/366632652/Meta-to-boost-APAC-connectivity-with-subsea-cable)

[^6]: [PLDT/Converge - Bifrost and Apricot cable landing stations in Davao, Philippines; SDXCENTRAL - PLDT gains regulatory approval for cable landing stations](https://www.sdxcentral.com/news/pldt-gains-regulatory-approval-for-two-cable-landing-stations-to-host-apricot-system/)

[^7]: [Data Center Dynamics - SEA-H2X subsea cable lands in the Philippines](https://www.datacenterdynamics.com/en/news/sea-h2x-subsea-cable-lands-in-the-philippines/)

[^8]: [Diplomacy and Law - Jurisdictional Gaps in Subsea Data Cables](https://www.diplomacyandlaw.com/post/jurisdictional-gaps-in-subsea-data-cables)

[^9]: [University of Chicago Journal of International Law - How Hackers of Submarine Cables May Be Held Liable Under the Law of the Sea](https://cjil.uchicago.edu/print-archive/how-hackers-submarine-cables-may-be-held-liable-under-law-sea)

[^10]: [BBC News - Taiwan jails China captain for undersea cable sabotage](https://www.bbc.com/news/articles/cwy3zy9jvd4o)

[^11]: [Global Taiwan Institute - Taiwan's Digital Vulnerabilities](https://globaltaiwan.org/2025/06/taiwans-digital-vulnerabilities/)

[^12]: [WebProNews - Inside UNC3886: How a China-Linked Cyber Espionage Group Quietly Infiltrated Singapore's Telecom Networks](https://www.webpronews.com/inside-unc3886-how-a-china-linked-cyber-espionage-group-quietly-infiltrated-singapores-telecom-networks/)

[^13]: [Submarine Networks - US FCC Takes Further Actions to Ban China's Participation in Submarine Cables](https://www.submarinenetworks.com/en/nv/insights/us-fcc-takes-further-actions-to-ban-china-s-participation-in-submarine-cables)

[^14]: [Recorded Future / Multiple Sources - PLA researchers documented ChatBIT military AI tool built on Meta's Llama 13B; Chinese military researchers cite insufficient Western social media training data as primary limitation for intelligence-focused LLMs](https://www.recordedfuture.com)

[^15]: [CSIS / Safeguarding Subsea Cables: Protecting Cyber Infrastructure Amid Great Power Competition; reporting on Chinese AI firms collecting data on US Congress members](https://www.csis.org/analysis/safeguarding-subsea-cables-protecting-cyber-infrastructure-amid-great-power-competition)

[^16]: [National People's Congress of the PRC - National Intelligence Law of the People's Republic of China (2017), Articles 7, 10, 14](http://www.npc.gov.cn/npc/c30834/201806/483221713dac4f31bda7f9d951108912.shtml)

[^17]: [21st Century Economic Report (21jingji.com) - Beijing Red Butterfly Technology Co., Ltd. corporate registration; monica.cn Terms of Service documenting PRC national security compliance, CAC content monitoring, and Haidian District jurisdiction](https://perma.cc/CJH8-JMBZ)
