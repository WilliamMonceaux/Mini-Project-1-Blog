const threadTopicEntries = ['What is the best opening to learn?','Does drunk Magnus play better than sober Magnus?',"What is y'all favorite openings?",'Why are there so many bugs in this website?'];

async function userName() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=4');
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