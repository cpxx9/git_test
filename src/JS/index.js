import '../CSS/styles.css';

async function showAvatar() {
  const user = { name: 'cpxx9' };
  const githubResponse = await fetch(
    `https://api.github.com/users/${user.name}`
  );
  const githubUser = githubResponse.json();
}

showAvatar();
