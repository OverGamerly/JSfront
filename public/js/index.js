let list = get();

list
.then(val => {
    val.forEach(obj => {
        table(obj);
    })
});

let big_list = document.getElementById('list');

function clearRows() {
    const table = document.getElementById('list');
    const tbody = table.getElementsByTagName('tbody')[0];
    
    while(tbody.getElementsByTagName("tr").length !== 0) tbody.getElementsByTagName("tr")[0].remove(); 
};

document.getElementById('find-btn').addEventListener('click', function() {
    let input = document.getElementById('search-text').value;    
    clearRows();
    search(input);
});

async function get() {
    let response = await fetch('http://localhost:3000/list', { headers: {'Accept': 'application/json'} })
    if(response.ok) {
        let text = await response.json();
        console.log(text);
        return text;
    }
}

function search(input) {
    let i = 0;
    list
    .then(val=>{
        val.forEach(obj => {
            if(val[i].firstName === input) {
                table(obj);
            }
            i++;
        });
    })
    
}

function table(obj) {
    let id = document.createElement('td');
    id.textContent = obj.id;
    let lastName = document.createElement('td');
    lastName.textContent = obj.lastName;
    let firstName = document.createElement('td');
    firstName.textContent = obj.firstName;
    let age = document.createElement('td');
    age.textContent = obj.age;
    let gender = document.createElement('td');
    gender.textContent = obj.gender;

    let person = document.createElement('tr');
    person.append(id);
    person.append(lastName);
    person.append(firstName);
    person.append(age);
    person.append(gender);

    const table = document.getElementById('list');
    const tbody = table.getElementsByTagName('tbody')[0];

    tbody.append(person);
}

document.getElementById('clear-btn').addEventListener('click', function() {
    clearRows();
    list
    .then(val => {
        val.forEach(obj => {
            table(obj);
        })
    });
});


