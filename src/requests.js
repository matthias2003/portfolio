import axios from 'axios';

export const getGitHubRepos = async () => {
    const { data } = await axios.get(`https://api.github.com/users/matthias2003/repos`);
    return data;
}

export const getGithubImages = async ( repo ) => {
    const img = await axios.get(`https://raw.githubusercontent.com/matthias2003/${repo}/master/README.md`);
    const regex = new RegExp('!\\[\\w+\\]\\(https://github.com/matthias2003/.+\\)');
    if (regex.exec(img.data)) {
        return regex.exec(img.data)[0]
    } else {
        return null;
    }
}

