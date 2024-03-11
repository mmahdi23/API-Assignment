document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    const apiUrl = 'https://www.balldontlie.io/api/v1/teams';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayTeams(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayTeams(teams) {
    const dataContainer = document.getElementById('dataContainer');

    if (teams && teams.length > 0) {
        // Display each team in a card format
        teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('teamCard');

            const teamName = document.createElement('div');
            teamName.classList.add('teamName');
            teamName.textContent = team.full_name;

            const teamAbbreviation = document.createElement('div');
            teamAbbreviation.classList.add('teamAbbreviation');
            teamAbbreviation.textContent = `Abbreviation: ${team.abbreviation}`;

            teamCard.appendChild(teamName);
            teamCard.appendChild(teamAbbreviation);

            dataContainer.appendChild(teamCard);
        });
    } else {
        dataContainer.innerHTML = '<p>No teams data available</p>';
    }
}
