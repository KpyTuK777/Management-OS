# Ukrainian Product Language Guide

This guide defines the language standard for all user-facing Ukrainian
communication in Management OS. It preserves the official terminology glossary
and extends it with writing, naming, AI communication, and maintenance rules.

Source-code identifiers and internal architecture names may remain in English;
user-facing language must follow this guide.

## Official terminology

| Product concept | Official Ukrainian UI term |
| --- | --- |
| Dashboard | Панель керування; **Поточний фокус** is the current page name |
| Portfolio | Портфоліо |
| Note | Нотатка |
| Notes Inbox | Вхідні нотатки; **Вхідні** in compact contexts |
| Knowledge Base | База знань |
| Knowledge Entry | Запис бази знань |
| SOP | SOP |
| Execution | Виконання |
| Execution Review | Огляд виконання |
| Insight | Інсайт |
| Hypothesis | Гіпотеза |
| Recommendation | Рекомендація |
| Improvement Proposal | Пропозиція покращення |
| Workflow | Робочий процес |
| Current Focus | Поточний фокус |
| Needs Attention | Потребує уваги |
| Supporting / Additional Context | Додатковий контекст |
| Search | Пошук; **Глобальний пошук** for product-wide search |
| Student Mode | Навчальний режим |

## Writing style

Management OS language should be:

- **Concise:** communicate the necessary meaning with as few words as clarity
  allows.
- **Calm:** describe state and next steps without urgency that the situation does
  not justify.
- **Professional:** use precise, credible language suitable for everyday
  operational work.
- **Operational:** help the user understand what happened, what matters, or what
  they can do next.
- **Easy to scan:** put the important concept or action first and keep supporting
  explanations short.

Use natural Ukrainian syntax, sentence case, direct verbs, and concrete nouns.
Prefer familiar words over formal synonyms when both are accurate. Keep one idea
per sentence where possible.

Avoid:

- bureaucratic wording and nominalized constructions;
- unnecessary technical jargon or internal system language;
- overly emotional, celebratory, alarming, or judgmental language;
- literal machine translation and English sentence patterns expressed with
  Ukrainian words;
- filler, repetition, and explanations that do not help the user act or
  understand.

## User addressing

Address the user directly, respectfully, and consistently in Ukrainian.

- Use the respectful plural form **ви** and its corresponding verb forms when the
  user must be addressed explicitly.
- Use lowercase **ви**, except where it begins a sentence. Avoid ceremonial
  capitalization such as **Ви** in ordinary interface copy.
- Prefer a direct imperative for clear actions: **Оберіть результат**, **Збережіть
  огляд**, **Створіть перший SOP**.
- Use infinitives for compact control labels when they name an action: **Створити
  проєкт**, **Зберегти**, **Скасувати**.
- Do not alternate between formal, informal, impersonal, and conversational styles
  within the same workflow.
- Do not blame the user. Describe the state and a constructive next step.

Use direct address only when it improves clarity. Neutral operational wording is
preferable for statuses and system observations.

## Naming rules

### Page titles

- Name the product area or the user's current destination.
- Use a short noun or noun phrase in sentence case: **База знань**, **Огляди
  виконань**, **Пропозиції покращень**.
- Do not add explanatory slogans to the title itself; place supporting context in
  the page description.

### Section headings

- Describe the content or operational purpose of the section.
- Keep headings parallel within the same page.
- Prefer concrete labels such as **Очікують огляду** or **Збережені огляди** over
  generic labels such as **Інше** or **Дані**.

### Buttons and links

- Start action labels with a clear verb: **Створити**, **Зберегти**, **Відкрити**,
  **Прийняти**, **Відхилити**.
- Name the result when it prevents ambiguity: **Зберегти нотатку**, **Почати
  виконання**.
- Use the same verb for the same action across the product.
- Avoid vague labels such as **Так**, **Готово**, or **Продовжити** when the actual
  outcome can be named.

### Empty states

- State plainly that no relevant items exist yet or match the current filter.
- When useful, follow with one calm next step.
- Do not imply failure, praise inactivity, or pressure the user to create content.
- Distinguish an empty collection from an empty search result.

### Search placeholders

- Use the pattern **Пошук + родовий відмінок множини**: **Пошук нотаток…**,
  **Пошук гіпотез…**.
- Use an ellipsis character where the interface convention calls for one.
- Do not place instructions or long examples in search placeholders.

### Status labels

- Use short, stable labels that describe the current state: **Активний**, **На
  паузі**, **Завершений**, **Відкрита**, **Прийнята**, **Відхилена**.
- Match grammatical gender and number to the concept being described.
- Do not use multiple synonyms for the same stored or displayed state.
- Do not depend on color alone to communicate status.

### Workflow messages

- Explain what happened and, when relevant, the next available action.
- Keep observed state, interpretation, proposal, and approved change linguistically
  distinct.
- Describe unavailable relationships neutrally: **Пов’язаний SOP недоступний**.
- Before consequential actions, state the consequence rather than using a generic
  warning.

## Technical terminology

The product retains internationally recognized terms when translation would reduce
clarity or professional familiarity: Management OS, SOP, AI, KPI, UX, UI, Lean,
Kaizen, Agile, Scrum, Kanban, Git, GitHub, API, Markdown, HTML, CSS, and Frontend.

Keep an English term when at least one of the following is true:

- it is the established professional form used by the intended audience;
- its Ukrainian translation would be less precise or less recognizable;
- it is a proper name, product name, standard, acronym, or methodology;
- translating it would create inconsistency with external tools or professional
  practice.

Do not preserve English merely because it exists in source code. Translate general
interface concepts when Ukrainian is natural and clear: **Dashboard → Панель
керування**, **Knowledge Base → База знань**, **Workflow → Робочий процес**.

When an international term is retained, use one spelling and capitalization
consistently. Add a short Ukrainian explanation on first use only when the audience
may not reasonably know the term.

## Future AI communication

Message roles, capability and limitation claims, uncertainty, temporary-state
language, recommendations, approvals, confirmations, failures, and interruption
behavior follow the canonical
[AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md). This section
continues to govern general writing and official Ukrainian language without
duplicating that communication architecture.

Future AI-generated content must follow the same product language as authored UI
copy. The AI should:

- remain professional, calm, concise, and operational;
- explain recommendations in clear Ukrainian and name the evidence behind them;
- distinguish observed facts from interpretations, hypotheses, suggestions, and
  approved changes;
- communicate uncertainty explicitly and avoid presenting likelihood as fact;
- avoid unnecessary verbosity, repetition, and management jargon;
- express operational confidence without sounding authoritarian;
- offer bounded next steps without implying that the user has already approved
  them;
- adapt explanation depth to the user's preferences without changing official
  product terminology.

Prefer formulations such as **Це може свідчити про…** or **На основі трьох
виконань система пропонує…** when evidence is limited. Avoid absolute claims such
as **Це точно означає…**, commands disguised as recommendations, or language that
assigns motives to the user.

AI communication remains subject to the Learning Decision Pipeline: facts,
evidence, insights, hypotheses, recommendations, approval, and change must remain
clearly distinguishable in language.

## Maintenance rules

Every new feature and every revision of user-facing copy must follow:

- [Design System](DESIGN_SYSTEM.md) for presentation and component conventions;
- this [Product Language Guide](PRODUCT_LANGUAGE.md);
- [Product Vision](PRODUCT_VISION.md) for product principles and conceptual
  boundaries.
- [Documentation Map](DOCUMENTATION_MAP.md) for document ownership and authority.

Before introducing a label, check the official terminology table. No feature may
introduce a new word for an existing product concept. If a genuinely new concept
requires a term, define it here before or alongside its first user-facing use.

When terminology changes:

1. update the official term and its usage rule in this guide;
2. audit all user-facing occurrences for consistency;
3. synchronize Product Vision, Architecture, Systems, and Design System references
   where the term carries product meaning;
4. preserve internal identifiers unless a separate architectural change is
   explicitly approved.

Language review is part of feature completion, not a later translation pass.

## Document scope

This document is the canonical Product Language Guide for Management OS. It
governs official terminology and all future user-facing product communication.
