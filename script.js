var input = document.getElementsByClassName("input")[0];
var display = document.getElementsByClassName("display-wrapper")[0];

var addNewItem = function() {
    var div = document.createElement('div');
    div.className = 'listElement';
    div.appendChild(document.createTextNode(input.value));
    var icon = document.createElement('i');
    icon.className = 'fas fa-times';
    var delButton = document.createElement('button');
    delButton.className = 'delete';
    delButton.appendChild(icon);
    //delButton.onclick = deleteItem;
    delButton.addEventListener('click', deleteItem);
    div.append(delButton);
    display.append(div);
    //console.log(delButton.parentElement);
    input.value = "";
}

var deleteItem = function(event) {
    console.log(event.target);
    console.log(event.target.parentElement);
    console.log(event.target.parentElement.parentElement);
    event.target.parentElement.parentElement.remove();
}

var toggleComplete = function(element) {
    console.log(element.target);
    if (element.target.tagName == 'DIV') {
        element.target.classList.toggle('done');
    }
}

var addOnEnter = function(event) {
    //keycode and which are depricated
    if (event.code == "Enter" && input.value.length != 0) {
        addNewItem();
    }
}

display.addEventListener("click", toggleComplete);
input.addEventListener("keydown", addOnEnter);