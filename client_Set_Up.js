document.getElementById('clientSetUpForm').onsubmit = (e) => {
    e.preventDefault();
    const client = {
        name: document.getElementById('clientName').value
    };
    const clientOption = document.createElement('option');
    clientOption.innerHTML = client.name;
    clientOption.value = client.name;
    document.getElementById('clientsList').appendChild(clientOption);
};

