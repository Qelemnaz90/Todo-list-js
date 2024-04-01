
let input =document.querySelector('#toDoInput')
let button = document.querySelector('#addButton')
let list = document.querySelector('#toDoList')


let arr = []
input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let a = input.value
        input.value = ''
        arr.push(a)
    renderList()}
})

function renderList() {
    list.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${arr[i]}<button class="delete">Delete</button>`;
        listItem.querySelector('.delete').addEventListener('click', function() {
            arr.splice(i, 1);
            renderList()
        });
        list.appendChild(listItem);
    }
    console.log(arr);
}


