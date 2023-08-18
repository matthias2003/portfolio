import axios from 'axios';

export const getGitHubRepos = async () => {
    const { data } = await axios.get(`https://api.github.com/users/matthias2003/repos`);
    return data;
}


