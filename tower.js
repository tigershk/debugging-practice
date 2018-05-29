 
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: input is empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' ) {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  const starsOutput = towerBuilder(addend1);
  label.textContent = "Your "+addend1+"* tower: " + starsOutput;
}
function getNumber1() {
   return parseInt(inputs[0].value);
}
function towerBuilder(nFloors) {
  let towerArr=[];
  let stringLength=nFloors+(nFloors-1);
  let starString="*";
  let towerString=" ";
  let stars=stringLength;
  let spaces=0;
  
  for (i=0; i<nFloors; i++){
    towerString=towerString.repeat(spaces)+(starString.repeat(stars))+towerString.repeat(spaces);
    towerArr.unshift(towerString);//add to array
    stars-=2;
    towerString=" ";
    spaces= (stringLength-stars)/2;
  }
  return towerArr;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
