import { githubHttpClient } from '@app/api/github/http-client'
import { GithubUserData } from '@app/models/github-user'

export type GetGithubUsersResponseDTO = GithubUserData[]

export const getItems = () =>
  githubHttpClient<GetGithubUsersResponseDTO>({
    url: '/users'
  })
