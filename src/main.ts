import * as github from '@actions/github'
import * as core from '@actions/core'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token', { required: true })
    const tag = core.getInput('tag', { required: true })
    const sha =
      core.getInput('commit-sha', { required: false }) || github.context.sha

    const client = github.getOctokit(token)

    core.debug(`tagging #${sha} with tag ${tag}`)

    await client.rest.git.createRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: `refs/tags/${tag}`,
      sha
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
