const members = [];

document.getElementById('memberSetUp').onsubmit = (e) => {
    e.preventDefault();
    const member = {
        name: document.getElementById('memberName').value
    };
    members.push(member);
    console.log(members);
    members.forEach(member => {
        const memberOption = document.createElement('option');
        memberOption.innerHTML = member.name;
        memberOption.value = member.name;
        document.getElementById('members').appendChild(memberOption);
    });
};

