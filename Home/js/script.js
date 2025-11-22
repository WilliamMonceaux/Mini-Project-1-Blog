const userNames = [];

async function getUserName() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');

        if(!response.ok) {
            throw new Error(`HTTP ERROR! status ${response.status}`);
        }

        const users = await response.json();

        const fNames =  users.results.map(user => {
            return user.name.first;
        })

        userNames.push(fNames);
        console.log(userNames);

    } catch (error) {
        console.error("Couldn't retrieve data:", error);
    }
};

getUserName();