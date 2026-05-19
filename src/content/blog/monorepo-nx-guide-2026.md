---
title: "Monorepo with Nx: A Practical Guide with Examples"
description: "Learn how to build and scale a monorepo with Nx — covering project setup, computation caching, dependency graph, affected commands, code generators, and CI optimisation with real-world examples."
date: 2026-05-19
tags: ["nx", "monorepo", "devtools", "typescript", "build-tools"]
draft: false
---

A monorepo is a single repository that holds multiple applications and libraries. Nx is a build system with first-class monorepo support — it understands your project graph, caches computation, and runs only what's affected by a change. This post walks through practical examples so you can adopt Nx incrementally, whether you're starting fresh or migrating an existing codebase.

## Why Nx over a plain monorepo

A folder with packages/ and a few npm workspaces gives you shared version management, but it doesn't understand dependencies between packages. Nx builds a **project graph**, which unlocks:

- **Computation caching** — rebuild only what changed
- **Affected commands** — test/lint/build only projects affected by a PR
- **Task orchestration** — run tasks in topological order, parallelise where safe
- **Code generation** — scaffold new libraries, components, or configurations consistently

## Setting up an Nx workspace

Create a new Nx workspace with your preferred stack:

```shell
npx create-nx-workspace@latest my-org --preset react
cd my-org
```

You get a structure like:

```
my-org/
├── apps/
│   └── my-app/          # React application
├── libs/
│   └── shared-ui/       # shared UI library
├── nx.json              # Nx configuration
├── package.json
└── ...
```

To add a Node.js backend:

```shell
nx g @nx/node:app api
```

## Adding libraries and establishing dependency boundaries

Libraries let you share code across apps. Generate one:

```shell
nx g @nx/js:lib shared/data-access
```

Seed it with a simple module:

```typescript
// libs/shared/data-access/src/lib/useAuth.ts
import { createContext, useContext } from 'react';

interface AuthUser {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

const AuthContext = createContext<AuthUser | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}
```

Import it from your app:

```typescript
// apps/my-app/src/app.tsx
import { useAuth } from '@my-org/shared/data-access';
```

Nx tags (`nx.json`) let you enforce boundaries — e.g., prevent `data-access` libraries from importing UI components:

```json
{
  "projects": {
    "shared-data-access": { "tags": ["type:data-access"] },
    "shared-ui": { "tags": ["type:ui"] }
  }
}
```

Then add an ESLint rule in `.eslintrc.json`:

```json
{
  "@nx/enforce-module-boundaries": [
    "error",
    {
      "depConstraints": [
        { "sourceTag": "type:ui", "onlyDependOnLibsWithTags": ["type:ui", "type:data-access"] },
        { "sourceTag": "type:data-access", "onlyDependOnLibsWithTags": ["type:data-access"] }
      ]
    }
  ]
}
```

Run lint to verify:

```shell
npx nx lint shared-data-access
```

## Computation caching

Nx caches the output of every task. The first `nx build my-app` runs from scratch; the second is instant:

```shell
npx nx build my-app   # ~30s first run
npx nx build my-app   # ~300ms (cache hit)
```

Cache keys include source files, environment variables, dependencies, and configuration. Invalidate the cache for a single project:

```shell
npx nx reset shared-data-access
```

To share caches across your team or CI, configure a remote cache:

```shell
npx nx connect
```

This stores build artefacts in Nx Cloud (or a self-hosted cache). CI pipelines across branches share the same cache — a PR that touches one library reuses cached output for all unaffected projects.

## Affected commands — run only what matters

In CI, running every task on every commit wastes time. Nx computes which projects are affected by a change and runs only those:

```shell
npx nx affected:test --base=main
npx nx affected:build --base=main
```

Compare against a specific branch or commit:

```shell
npx nx affected:lint --base=origin/main --head=HEAD
```

Under the hood, Nx diffs the project graph between `base` and `head`, then schedules only the affected tasks in topological order. A PR that changes only `shared-ui` will skip rebuilding the API server entirely.

## Dependency graph visualisation

See every project and its dependencies:

```shell
npx nx graph
```

This opens an interactive browser view. Focus on a single project and its transitive dependencies:

```shell
npx nx graph --focus=my-app
```

Export the graph as a static JSON for documentation or analysis:

```shell
npx nx graph --file=graph.json
```

## Code generators — scaffold consistently

Nx generators replace copy-paste. Create a custom generator for your team's React component pattern:

```shell
nx g @nx/react:component --name=Button --project=shared-ui
```

Generate a library with a specific directory structure:

```shell
nx g @nx/js:lib --directory=shared/validation --buildable --publishable
```

You can write your own generator using the Nx Devkit:

```typescript
// tools/generators/my-gen/index.ts
import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';

export default async function (tree: Tree, schema: { name: string }) {
  const substitutions = names(schema.name);
  generateFiles(tree, path.join(__dirname, 'files'), 'libs/' + schema.name, substitutions);
  await formatFiles(tree);
}
```

Run it:

```shell
nx g @my-org/my-gen:generator my-feature-lib
```

## Incremental migration — adopt Nx without a rewrite

You don't need to start from scratch. Add Nx to an existing npm/Yarn workspace:

```shell
npx nx@latest init
```

This analyses your existing structure, creates `nx.json`, and generates a project graph from your `package.json` workspaces. After initialisation, you get caching and affected commands without moving files.

For a Lerna or Turborepo migration, Nx provides a dedicated migration generator:

```shell
npx nx g @nx/workspace:move --project existing-pkg --destination libs/shared/existing-pkg
```

## Task pipelines and parallelisation

Define task dependencies in `nx.json` so Nx knows which tasks to run before others:

```json
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    },
    "test": {
      "dependsOn": ["build"]
    }
  }
}
```

This tells Nx:
- **build** of a project waits for the **build** of its dependencies (`^build`)
- **test** waits for **build** of the same project

Run everything in parallel respecting the dependency graph:

```shell
npx nx run-many -t build test lint
```

Nx schedules as many tasks as possible in parallel while honouring the defined pipeline.

## Environment variables and configuration per project

Each project can have its own environment files. Define variables at the project level:

```shell
# apps/api/.env
DATABASE_URL=postgres://localhost:5432/myapp
PORT=4000
```

Or define inferred targets that load environment from a specific file:

```json
{
  "targets": {
    "serve": {
      "options": {
        "envFile": "apps/api/.env"
      }
    }
  }
}
```

For shared environment variables across projects, use a root `.env` or Nx's `inputs` to include env files in cache keys:

```json
{
  "targetDefaults": {
    "build": {
      "inputs": ["{projectRoot}/**/*", "{workspaceRoot}/.env"]
    }
  }
}
```

## CI optimisation example

A typical GitHub Actions workflow that leverages Nx caching and affected commands:

```yaml
name: CI
on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci

      - uses: nrwl/nx-set-shas@v4

      - run: npx nx affected:lint --base=$NX_BASE
      - run: npx nx affected:test --base=$NX_BASE
      - run: npx nx affected:build --base=$NX_BASE
```

The `nx-set-shas` action derives the base and head SHAs so `affected` works correctly. With remote caching, even the first CI run for a small PR can finish in under a minute.

## Putting it all together — a real workflow

1. Developer creates a new library: `nx g @nx/js:lib shared/forms`
2. Develops a custom `useForm` hook in the library
3. Imports it in both `my-app` and `admin-app` — both pass their builds
4. Runs `nx affected:test --base=main` — only `shared-forms` and its consumers are tested
5. Opens `nx graph --focus=shared-forms` to verify the dependency tree before merging
6. PR merges; CI runs `affected:build` and deploys only changed apps

The result: a CI pipeline that scales with your repository size rather than slowing down as you add more code.

## Conclusion

Nx turns a monorepo from a folder of packages into a platform with intelligent caching, task orchestration, and dependency-aware tooling. The examples above cover the most impactful features — start with `npx create-nx-workspace` or `npx nx init` on an existing repo, add a few libraries, and let affected commands and caching do the rest.
