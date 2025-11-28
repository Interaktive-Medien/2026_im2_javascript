const friends = [
    {
        id: 0,
        name: 'Antonia',
        wohnort: 'Oerlikon',
        alter: 28,
        hobbies: ['Tanzen', 'Fussball', 'Party'],
        gemeinsame_freunde: [5,8]
    },
    {
        id: 1,
        name: 'Lena',
        wohnort: 'Winterthur',
        alter: 28,
        hobbies: ['Fussball', 'Joggen', 'Party'],
        gemeinsame_freunde: [3,2,6,8],
    },
    {
        id: 2,
        name: 'David',
        wohnort: 'Zürich',
        alter: 31,
        hobbies: ['Fussball', 'Musik', 'Brunchen', 'Politik'],
        gemeinsame_freunde: [1,3,7],
    },
    {
        id: 3,
        name: 'Celia',
        wohnort: 'St. Gallen',
        alter: 28,
        hobbies: ['Fussball', 'Party', 'Brunchen'],
        gemeinsame_freunde: [1,2,8],
    },
    {
        id: 4,
        name: 'Tobias',
        wohnort: 'Winterthur',
        alter: 31,
        hobbies: ['Arbeit', 'Brunchen', 'Party'],
        gemeinsame_freunde: []
    },
    {
        id: 5,
        name: 'Zoe',
        wohnort: 'Zürich',
        alter: 26,
        hobbies: ['Arbeit', 'Joggen'],
        gemeinsame_freunde: [6,0,8]
    },
    {
        id: 6,
        name: 'Alice',
        wohnort: 'St. Gallen',
        alter: 27,
        hobbies: ['Musik', 'Joggen', 'Arbeit'],
        gemeinsame_freunde: [5,7,8]
    },
    {
        id: 7,
        name: 'Gina',
        wohnort: 'Zürich',
        alter: 26,
        hobbies: ['Gamen', 'Brunchen'],
        gemeinsame_freunde: [6,2]
    },
    {
        id: 8,
        name: 'Angela',
        wohnort: 'Uzwil',
        alter: 28,
        hobbies: ['Fussball', 'Arbeit', 'Brunchen'],
        gemeinsame_freunde: [0,1,3,5,6]
    },
];

const friends_ct = document.querySelector('#friends');
const filters = document.querySelectorAll('#filter > button');

filters.forEach((filter) => {
    filter.addEventListener('click', function(event) {
        const id = event.target.id;
        let filtered_friends = [];
        switch (id) {
            case 'all':
                filtered_friends = friends;
                break;
            case 'winti':
                filtered_friends = friends.filter(friend => friend.wohnort === 'Winterthur');
                break;
            case 'soccer':
                filtered_friends = friends.filter(friend => friend.hobbies.includes('Fussball'));
                break;
            case 'a':
                filtered_friends = friends.filter(friend => friend.name.startsWith('A'));
                break;
            case 'lena':
                filtered_friends = friends.filter(friend => {
                    const id_lena = friends.find(friend => friend.name === 'Lena')?.id;
                    return friend.gemeinsame_freunde.includes(id_lena);
                });
                break;
            case 'u30':
                filtered_friends = friends.filter(friend => {
                    return friend.alter < 30 && friend.hobbies.includes('Party');
                });
                break;
        }
        showFriends(filtered_friends)
    })
})

function showFriends(filtered_friends) {
    friends_ct.innerHTML = '';
    filtered_friends.forEach((friend) => {
        const item = document.createElement('div');
        item.innerText = friend.name;
        friends_ct.appendChild(item);
    });
}
