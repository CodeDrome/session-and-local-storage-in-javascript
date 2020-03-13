window.onload = function()
{
    localStorage.clear();

    showSize();

    addItems();

    showSize();

    showItems();

    removeItems();

    showSize();

    dotNotation();

    bracketNotation();
}

function showSize()
{
    writeToConsole(`Number of items: ${localStorage.length}<br /><br />`, "console");
}

function addItems()
{
    const inventory = [{name: "Paper", stock: 28},
                       {name: "Staplers", stock: 32},
                       {name: "TableLamps", stock: 6}];

    for(item of inventory)
    {
        localStorage.setItem(item.name, item.stock);
    }

    writeToConsole("Items added<br/><br />", "console");
}

function showItems()
{
    for(let i = 0, l = localStorage.length; i < l; i++)
    {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        writeToConsole(`Key:&nbsp;&nbsp;${key}<br />Value: ${value}<br />Type:&nbsp; ${typeof(value)}<br /><br />`, "console");
    }

    writeToConsole("<br />", "console");
}

function removeItems()
{
    const inventory = [{name: "Paper", stock: 28},
                       {name: "Staplers", stock: 32},
                       {name: "TableLamps", stock: 6}];

    for(item of inventory)
    {
        localStorage.removeItem(item.name);
    }

    writeToConsole("Items removed<br/><br />", "console");
}

function dotNotation()
{
    localStorage.bananas = 560;

    writeToConsole(`bananas: ${localStorage.bananas}<br/><br />`, "console");
}

function bracketNotation()
{
    localStorage.apples = 1098;

    writeToConsole(`apples: ${localStorage.apples}<br/><br />`, "console");
}
