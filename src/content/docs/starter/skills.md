---
title: Skills Catalog
description: Available skills, rules, and workflows in the Forge Skills Starter.
---

## Skills

| Skill           | Version | Type         | Description                                                           |
| --------------- | ------- | ------------ | --------------------------------------------------------------------- |
| `/drawio`       | 1.0.0   | utility      | Generate draw.io diagrams as native XML files with PNG/SVG/PDF export |
| `/detect-stack` | 1.0.0   | utility      | Classify project type, language, framework, and build tools           |
| `/review-pr`    | 1.0.0   | orchestrator | Review pull request changes for quality, style, and correctness       |
| `/document`     | 1.0.0   | orchestrator | Generate project documentation with architecture diagrams             |

### /drawio

Generates draw.io diagrams as native `.drawio` XML files. Supports export to PNG, SVG, and PDF.

### /detect-stack

Classifies a project's technology stack: language, framework, build tools, and project type. Used by other skills to adapt their behavior.

### /review-pr

Orchestrator skill that reviews pull request changes. Checks for code quality, style consistency, and correctness issues.

### /document

Orchestrator skill that generates comprehensive project documentation including architecture diagrams (via `/drawio`).

## Rules

| Rule                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `drawio-conventions`      | Standards for clean, readable draw.io diagrams      |
| `code-style`              | General coding conventions and best practices       |
| `documentation-standards` | Documentation quality and completeness requirements |

## Workflows

| Workflow           | Purpose                                                             |
| ------------------ | ------------------------------------------------------------------- |
| `document-project` | End-to-end project documentation using `/document` skill and drawio |

## Meta-skills (platform only)

These stay in the starter repo and are not delivered to consumers.

![Meta-skills Architecture](https://github.com/crucibledx/assets/raw/main/platform/diagrams/light/meta-resources-architecture.svg)

| Meta-skill          | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `/create-resource`  | Orchestrator: idea → design → develop → test → release |
| `/design-resource`  | Phase 1: creates design.md + architecture diagrams     |
| `/develop-resource` | Phase 2: scaffolds and implements from design          |
| `/test-resource`    | Phase 3: type-aware testing against specimens          |
