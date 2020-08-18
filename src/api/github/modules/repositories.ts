import { githubHttpClient } from '@app/api/github/http-client'
import { GithubRepositoryData } from '@app/models/github-repository'

export type GetGithubRepositoriesResponseDTO = GithubRepositoryData[]

export const getItems = () =>
  githubHttpClient<GetGithubRepositoriesResponseDTO>({
    url: '/repositories'
  })
