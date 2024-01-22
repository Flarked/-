const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');


myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    // element.classList - add or delete classes for element
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    // Add button for delete element of list
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';

    // Delete element of list
    deleteButton.addEventListener('click', () => {
        // parent.removeChild(element) - удаляет указанный элемент (element) из родителя (parent)
        list.removeChild(newItem);
    })

    // Добавить кнопку в элемент списка
    // Метод parent.appendChild(element) позволяет вставить в конец элемента (parent) 
    // какой-либо другой элемент (element)
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    // Очистка поля
    nameInput.value = '';
})