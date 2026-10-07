let projects = [
    {
        id: 1,
        name: "PeopleForce",
        country: "Ukraine",
        teamSize: 20,
        duration: 12,
        cost: 150000 
    },

    {
        id: 2,
        name: "The Nova Build",
        country: "Ukraine",
        teamSize: 45,
        duration: 36,
        cost: 20000000
    },

    {
        id: 3,
        name: "Von Dutch",
        country: "The Netherlands",
        teamSize: 12,
        duration: 6,
        cost: 50000
    },

    {
        id: 4,
        name: "My Innovation Box",
        country: "Ukraine",
        teamSize: 19,
        duration: 12,
        cost: 1000000
    },

    {
        id: 5,
        name: "The New Atlantics",
        country: "Australia",
        teamSize: 30,
        duration: 24,
        cost: 12000000
    },

    {
        id: 6,
        name: "Wei Lu",
        country: "Taiwan",
        teamSize: 7,
        duration: 12,
        cost: 500000
    },

    {
        id: 7,
        name: "Nordmanner",
        country: "Norway",
        teamSize: 11,
        duration: 6,
        cost: 450000
    },

    {
        id: 8,
        name: "The Vast Horizon",
        country: "Canada",
        teamSize: 25,
        duration: 24,
        cost: 5000000
    },

    {
        id: 9,
        name: "Der Spiegel",
        country: "Germany",
        teamSize: 20,
        duration: 36,
        cost: 3000000
    },

    {
        id: 10,
        name: "Atarashii Nippon",
        country: "Japan",
        teamSize: 25,
        duration: 18,
        cost: 2000000
    }
];


let sortedByCountry = [...projects].sort((a, b) => {
    if (a.country < b.country) return -1;
    if (a.country > b. country) return 1;
    return 0;
});
console.log(sortedByCountry);


let teamStats = {};
projects.forEach(project => {
    if (!teamStats[project.teamSize]) {
        teamStats[project.teamSize] = { total: 0, count: 0};
    }
    teamStats[project.teamSize].total += project.cost;
    teamStats[project.teamSize].count += 1;
});

for (let size in teamStats) {
    teamStats[size].average = teamStats[size].total / teamStats[size].count;
}
console.log(teamStats);


let sortedByMembersNum = [...projects].sort((a, b) => b.teamSize - a.teamSize);
let sortedMaxTeam = sortedByMembersNum[0];
console.log("Project with the largest team size:", sortedMaxTeam.id);


let requiredFields = ["id", "name", "country", "teamSize", "duration", "cost"];

function isProjectComplete(project) {
    for (let i = 0; i < requiredFields.length; i++) {
        let field = requiredFields[i];
        if (project[field] === undefined || project[field] === null || project[field] === "") {
            return false;
        }
    }
    return true;
}

function addProject(project) {
    if(!isProjectComplete(project)) {
        projects.push(project);
        console.log("Project is incomplete. Added to the end of the list.");
        return;
    }

    let insertIndex = projects.length;
    for (let i = 0; i < projects.length; i++) {
        if (project.cost < projects[i].cost){
            insertIndex = i;
            break;
        }
    }  

    projects.splice(insertIndex, 0, project);
    console.log("Project added successfully.");
}


let continents = {
    "Ukraine": "Europe",
    "The Netherlands": "Europe",
    "Germany": "Europe",
    "Norway": "Europe",
    "Spain": "Europe",
    "Italy": "Europe",
    "Japan": "Asia",
    "Taiwan": "Asia",
    "Australia": "Oceania",
    "Canada": "North America"
};

function calculateNewcost(project, allProjects) {
    let otherProjects = allProjects.filter(p => p.id !== project.id);
    let myContinent = continents[project.country];

    let conditionA = otherProjects.some(p =>
        continents[p.country] === myContinent && 
        p.teamSize > project.teamSize && 
        p.cost < project.cost
    );
    if (conditionA) return project.cost * 1.4;

    let conditionB = otherProjects.some(p =>
        continents[p.country] !== myContinent &&
        p.teamSize > project.teamSize &&
        p.cost < project.cost
    );
    if (conditionB) return project.cost * 1.6;

    let conditionC = otherProjects.some(p =>
        continents[p.country] !== myContinent &&
        p.teamSize > project.teamSize &&
        p.cost > project.cost
    );
    if (conditionC) return project.cost * 2;

    let conditionD = otherProjects.some(p =>
        p.country === project.country &&
        p.cost < project.cost
    );
    if (conditionD) return project.cost * 0.8;

    return project.cost;
}

let updatedProjects = projects.map(project => ({
    name: project.name,
    newCost: calculateNewcost(project, projects)
}));
console.log(updatedProjects);


