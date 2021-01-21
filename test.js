let form = document.getElementById('addForm');
let itemList = document.getElementById('items');



//add item
form.addEventListener('submit',addItem);

//remove item
itemList.addEventListener('click',removeItem);



//add item function
function addItem(e)
{
    //prent form submition
    e.preventDefault();

    
    //getting value
    var text = document.getElementById('item').value;

    //adding item
    var li = document.createElement('li');

    //adding classname
    li.className ='list-group-item';

    //adding text item

    li.appendChild(document.createTextNode(text));

    //button adding
    var btn = document.createElement('button');

    //adding class name
    btn.className = 'btn btn-danger btn-sm float-right delete';

    //appentding to btn

    btn.appendChild(document.createTextNode("X"));

    //appending to li

    li.appendChild(btn);

    //adding to dom
    itemList.appendChild(li);

    form.reset();
    
}

function removeItem(e)
{
    //checks if it contains classList delete
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            itemList.removeChild(e.target.parentElement);
        }
    }
}