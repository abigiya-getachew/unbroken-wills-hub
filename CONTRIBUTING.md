# Contributing to Unbroken Wills

Thanks for improving Unbroken Wills with code! For profiles, resources, and other non-code contributions, follow the instructions in the [README](README.md).

## Good First Issues

A **good first issue** is a small, clearly scoped task that a newcomer can complete without needing extensive project context. It should have an understandable goal, acceptance criteria, and enough pointers to help someone get started. Examples include fixing a small UI issue, improving a README section, or adding a focused test.

Maintainers use the [`good first issue`](https://github.com/abigiya-getachew/unbroken-wills-hub/labels/good%20first%20issue) label for tasks that meet this bar. Issues that need broader community help but may require more context can also receive the [`help wanted`](https://github.com/abigiya-getachew/unbroken-wills-hub/labels/help%20wanted) label. If an issue is unclear, ask a question before starting; maintainers can clarify the scope or suggest a first step.

## Step-by-Step Pull Request Workflow

1. **Fork the repository** on GitHub using the **Fork** button.
2. **Clone your fork** and add the original repository as `upstream`:

   Replace `YOUR_GITHUB_USERNAME` with your GitHub username:

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/unbroken-wills-hub.git
   cd unbroken-wills-hub
   git remote add upstream https://github.com/abigiya-getachew/unbroken-wills-hub.git
   ```

3. **Create a branch** with a short, lowercase, hyphenated name:

   ```bash
   # Choose the prefix that matches your change:
   git switch -c feature/short-description
   # Or: git switch -c fix/short-description
   # Or: git switch -c docs/short-description
   ```

4. **Install dependencies**, make your changes, then run both checks from the repository root:

   ```bash
   npm install
   npm run lint
   npm run build
   ```

   Please fix any failures before opening your PR.

5. **Review and commit your changes**, replacing the example path and message with your own:

   ```bash
   git status
   git add path/to/changed-file
   git commit -m "Describe your change"
   ```

6. **Push your branch** (replace the branch name if you chose a different prefix):

   ```bash
   git push -u origin feature/short-description
   ```

7. **Open a pull request** on GitHub from your fork's branch into `abigiya-getachew/unbroken-wills-hub`'s `main` branch. Explain what changed and why, link any related issue, report the lint/build results, and add screenshots for user-facing changes.

### Pull request expectations

- Keep each PR focused and reasonably sized.
- Add or update tests when appropriate.
- Be respectful and responsive to review feedback.

Maintainers aim to acknowledge PRs within **5 business days**. Complex reviews may take longer.
