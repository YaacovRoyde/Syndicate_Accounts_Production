const clients = [1];

document.getElementById('clientSetUp').onsubmit = (e) => {
    e.preventDefault();
    const client = {
        name: document.getElementById('clientName').value
    };
    clients.push(client);
    console.log(clients);
    clients.forEach(client => {
        const clientOption = document.createElement('option');
        clientOption.innerHTML = client.name;
        clientOption.value = client.name;
        document.getElementById('clients').appendChild(clientOption);
    });
};

