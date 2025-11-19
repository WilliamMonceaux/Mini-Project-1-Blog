async function userName() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        console.log(response);

        if(!response.ok) {
            throw new Error(`HTTP ERROR! status ${response.status}`);
        }

        const users = await response.json();
        console.log(users);

    } catch (error) {
        console.error("Couldn't retrieve data:", error);
    }
};

userName();