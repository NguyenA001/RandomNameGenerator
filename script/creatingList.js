import creatingElements from './gettingElements.js'
creatingElements();

let randomList = [];

export function SaveToLocalStorageByINPUT(Name)
{
    randomList.push(Name);
    localStorage.setItem('RANDOM LIST OF NAMES',JSON.stringify(randomList));
}
export function SaveToLocalStorage(){
    localStorage.setItem('RANDOM LIST OF NAMES',JSON.stringify(randomList));
    return randomList;
}

export function GetLocalStorage(){
    let localStorageData = localStorage.getItem('RANDOM LIST OF NAMES');
    if(localStorage.getItem('RANDOM LIST OF NAMES'))
    {
        randomList = JSON.parse(localStorageData);
    }
    else
    {
        SaveToLocalStorage();
    }
    resfresh(randomList);
    return randomList;
}


export function RemoveFromLocalStorage(Name){
    let nameINDEX = randomList.indexOf(Name);
    randomList.splice(nameINDEX,1);
    SaveToLocalStorage();
}

export function ClearLocalStorage(){
    localStorage.clear();
    injectHere.remove();
    location.reload();
}

function resfresh(x)
{
    for(let i =0; i<x.length; i++)
    {
        createListElement(x[i]);
    }
}


function createListElement(newName)
{
    let ul = document.createElement("ul");
    ul.className = "list-group";
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newName;
    li.id = newName;
    ul.appendChild(li);
    injectHere.appendChild(ul);

    let clickToRemove = document.getElementById(newName);
    clickToRemove.addEventListener('click',function(){
        clickToRemove.remove();
        RemoveFromLocalStorage(newName);
    });
}

function generatingRANDOM(){
    let randomGenerated = Math.floor(Math.random()*randomList.length);
        let x = document.getElementById(randomList[randomGenerated]);
        console.log(randomList[randomGenerated])
        x.className = "list-group-item active";
        creatingCardGroups(randomList[randomGenerated]);
}

export function byGroupGENERATOR(numberINPUT)
{
    let numberOFGROUPS = Math.floor(randomList.length / numberINPUT);
    if(numberOFGROUPS * numberINPUT == randomList.length)
    {
        let tempList = [];
        for(let i =0; i<numberINPUT; i++)
        {
            tempList[i] = [];
            for(let j =0; j<numberOFGROUPS; j++)
            {
                let randomize = Math.floor(Math.random() * randomList.length);
                tempList[i][j] = randomList[randomize];
                console.log(randomList[randomize]);
                randomList.splice(randomize,1);
            }
        }
        let text ="";
        for(let i =0;i<numberINPUT;i++)
        {
            text += "Group " + (i+1) + ": ";
            for(let j=0; j< numberOFGROUPS; j++)
            {
                if(j != 0)
                {
                    text += ", ";
                }
                text += tempList[i][j];
            }
            text += "\n";
        }
        console.log(text);
        creatingCardGroups(text);
    }
}

export function byPeopleGENERATOR(numberINPUT){
    let tempList = [];
    for(let i = randomList.length-1; i>0; i--)
    {
        const randomize = Math.floor(Math.random() * (i +1));
        [randomList[i], randomList[randomize]] = [randomList[randomize], randomList[i]];
    }
    for (let i = 0; i<randomList.length; i+=numberINPUT)
    {
        tempList.push(randomList.slice(i, i+numberINPUT));
    }

    let text = "";
    for(let i = 0; i<randomList.length; i++)
    {
        text += "Group " + (i+1) + ": " + tempList[i] + " --- ";
        console.log(tempList[i])
    }
    creatingCardGroups(text);
    return tempList;
}

function creatingCardGroups(x){
    let outerDIV = document.createElement("div");
    outerDIV.className = "card mt-5";
    let innerDIV = document.createElement('div');
    innerDIV.className = "card-body";
    let h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.textContent = x;
    innerDIV.appendChild(h5);
    outerDIV.appendChild(innerDIV);
    injectGroups.appendChild(outerDIV);
}

export {createListElement, generatingRANDOM, randomList}