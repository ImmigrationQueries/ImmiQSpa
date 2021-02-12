## Build Status

| Workflow                     | Status                                                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Build and Deploy to Firebase | ![Build Status](https://github.com/ImmigrationQueries/ImmiQSpa/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg?branch=main) |

## ImmiQ Front End Overview

This repository contains the front end code for the ImmiQ Web App. ImmiQ's mission is to keep Australian Permanent Residency hopefuls informed about the status of their application and where they stand among other applicants. We source our data from [Department of Home Affair's Expression of Interest API](https://api.dynamic.reports.employment.gov.au/anonap/extensions/hSKLS02_SkillSelect_EOI_Data/hSKLS02_SkillSelect_EOI_Data.html).

## Development Setup

# Prerequisites

-   [nodejs](https://nodejs.org/en/download/) (LTS is fine)

## Node installation on Windows

-   Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.

## Installation Steps

-   git clone https://github.com/ImmigrationQueries/ImmiQSpa.git
-   cd ImmiQSpa
-   npm install

## Start & watch

-   npm start

## Simple build for production

-   npm run build

## Contribution Instruction

-   Create new branch from your code editor
    git checkout -b <branch> <remote>/<branch>
-   Submit a pull request or a draft pull request in Github and assign it to the senior dev to check and approve.

## Features already added

This Skeleton comes with extra development features such as:

-   TypeScript (Refer to tsconfig.json)
-   ESLint for linting
-   Prettier for formatting
-   VSCode editor settings (Change to suit your development needs)

## Features to be added

-   Precommit husky
