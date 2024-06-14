document.getElementById('fetch-users-btn').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `${user.first_name} ${user.last_name}`;
        avatar.className = 'user-avatar';

        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        const name = document.createElement('h2');
        name.textContent = `${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = user.email;

        userInfo.appendChild(name);
        userInfo.appendChild(email);

        userCard.appendChild(avatar);
        userCard.appendChild(userInfo);

        usersContainer.appendChild(userCard);
    });
}
