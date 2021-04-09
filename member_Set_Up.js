document.getElementById('memberSetUpLink').onclick = () => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('setUp').style.display = 'block';
};

document.getElementById('homeLink').onclick = () => {
    document.getElementById('setUp').style.display = 'none';
    document.getElementById('home').style.display = 'block';    
};

document.getElementById('memberSetUpForm').onsubmit = (e) => {
    e.preventDefault();
    const member = {
        name: document.getElementById('memberName').value
    };
    const memberOption = document.createElement('option');
    memberOption.innerHTML = member.name;
    memberOption.value = member.name;
    document.getElementById('membersList').appendChild(memberOption);
};

