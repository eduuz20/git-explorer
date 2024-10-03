import { githubApi } from "../../services/axios/github-api"

const getUserDetails = async (username) => {
 try {
  const response = await githubApi.get(`/users/${username}`)
  return response.data
 } catch (error) {
  console.error(error.message)
 }
}

export { getUserDetails }