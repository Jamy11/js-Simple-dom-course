let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//Form submit event

form.addEventListener('submit',addItem);

//remove item

itemList.addEventListener('click',removeItem);

//search item
filter.addEventListener('keyup',filterItems);

function addItem(e)
{
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    //console.log(newItem);

    //create new item

    var li = document.createElement('li');;

    //adding class name
    li.className = 'list-group-item';

    //creating text node and adding to li
    //var item = document.createTextNode(newItem);

 //adding to html
    li.appendChild(document.createTextNode(newItem));

    
    
    //crreate delete button element
    var deleteBtn = document.createElement('button');

    //add class name
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //add text node

    deleteBtn.appendChild(document.createTextNode('X'));

    //appending button to li

    li.appendChild(deleteBtn);

    
    
    itemList.appendChild(li);
}


//remove item
function removeItem(e)
{
    //console.log(e.target.classList);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            //console.log(1);
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//search item
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
  //  console.log(text);
    var items = itemList.getElementsByTagName('li');
    // var ites = itemList.querySelectorAll('li').textContent;
    // console.log(items);
    //convert to array
    Array.from(items).forEach(function(item){
        
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}
// Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });