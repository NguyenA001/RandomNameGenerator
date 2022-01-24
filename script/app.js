import creatingElements from './gettingElements.js'
import {createListElement, generatingRANDOM, SaveToLocalStorageByINPUT, byGroupGENERATOR, byPeopleGENERATOR, ClearLocalStorage, SaveToLocalStorage, RemoveFromLocalStorage, GetLocalStorage, randomList} from './creatingList.js'

creatingElements();
GetLocalStorage();

addToListBtn.addEventListener("click", function() {
    SaveToLocalStorageByINPUT(addToListINPUT.value);
    createListElement(addToListINPUT.value);
});

randomizeBTN.addEventListener('click', function(){
    generatingRANDOM();
});

numberOFGROUPS.addEventListener('click', function(){
    byGroupGENERATOR(parseInt(numberOFGROUPSINPUT.value));
});

numberOFPeople.addEventListener('click', function(){
    byPeopleGENERATOR(parseInt(numberOFPeopleINPUT.value));
});

clearBTN.addEventListener('click', function(){
    ClearLocalStorage();
});
