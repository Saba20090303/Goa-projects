const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// ფუნქცია, რომ დაამატოს ნივთი სიაში
function addItem() {
    const itemText = itemInput.value.trim();  // წაშლის ცარიელ ადგილებს
    if (itemText !== "") {
        // შექმენით სიაში ახალი ელემენტი
        const li = document.createElement('li');
        li.textContent = itemText;

        // დაამატეთ "წაშლის" ღილაკი
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "წაშლა";
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        itemList.appendChild(li);

        itemInput.value = "";
    } else {
        alert("გთხოვთ შეიყვანოთ ტექსტი!");
    }
}

addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});