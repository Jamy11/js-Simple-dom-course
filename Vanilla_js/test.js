let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filte = document.getElementById('filter');

//add item
form.addEventListener('submit',addItem);

//removing item from dom
itemList.addEventListener('click',removeItem);

//filter search
filter.addEventListener('keydown',filterCheck);


//add item function
function addItem(e)
{
    e.preventDefault();
    
    //get value
    let item = document.getElementById('item').value;

    //creating li element or tag
    let li = document.createElement('li');

    //class name
    li.className = 'list-group-item';

    //append to li
    li.appendChild(document.createTextNode(item));

    //crat button 
    let btn = document.createElement('button');

    //adding class
    btn.className = "btn btn-danger btn-sm float-right delete";

    //appendint to btn

    btn.appendChild(document.createTextNode("X"));

    //appnedin btn to li
    li.appendChild(btn);

    //appending to dom
    itemList.appendChild(li);

    form.reset();

}

//removeItem functiion
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            itemList.removeChild(e.target.parentElement); 
        }
    }
}

// filtercheck function
function filterCheck(e)
{
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByClassName('list-group-item');

    Array.from(items).forEach(item =>{
        
        let itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
    
    // let items = itemList.querySelectorAll('.list-group-item');

    // console.log(items);

    // items.forEach(item=>{
    //     let itemName = item.firstChild.textContent;

    //     if(itemName.toLowerCase().indexOf(text) != -1)
    //     {
    //         item.style.display = 'block';
    //     }
    //     else{
    //         item.style.display = 'none';
    //     }
    // });
}