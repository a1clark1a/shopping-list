$(function()
{
   addItem();
   deleteItem();
   checkItem();

});

function addItem()
{
    $('#js-shopping-list-form').submit(function(e)
    {
        if(!$(this).find('input[name="shopping-list-entry"]').val())
        {
            alert("need input");
        }
        else
        {
            e.preventDefault();
            $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${$(this).find('input[name="shopping-list-entry"]').val()}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`);
        }
    })
};

function checkItem()
{
    $('.shopping-list').on('click', ".shopping-item-toggle", function(e)
    {
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
 
    });

};

function deleteItem()
{
    $('.shopping-list').on('click', ".shopping-item-delete", function(e)
    {
        $(this).closest('li').remove();
    });
};