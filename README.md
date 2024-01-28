# Create a GitHub Action Using TypeScript

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

### This package is an updated version of https://github.com/tvdias/github-tagger

Tags the commit with a given text

Getting Started
To use, create a workflow (eg: .github/workflows/label.yml see Creating a Workflow file) and add a step like 'Tag commit' on the below sample. A token will be needed so the workflow can make calls to GitHub's rest API.

```yaml
name: "My workflow"

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Tag commit
      uses: pxpm/github-tag-action@v0.0.1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        tag: "my_tag"


# An optional commit sha can be specified to override the default
    steps:
    - name: Tag commit
      uses: pxpm/github-tag-action@v0.0.1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        tag: "my_tag"
        commit-sha: abc123efgesd
```
