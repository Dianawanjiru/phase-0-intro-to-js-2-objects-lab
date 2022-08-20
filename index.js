// Write your solution in this file!
const employee = {
    name: "Diana",
   streetAdress : "12 Philadelphia",
}

function updateEmployeeWithKeyAndValue (employee, key,value){
    return {...employee,[key]: value,};
    
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key,value){
    employee [key]= value;
    return employee;
}
 
function deleteFromEmployeeByKey (employee,key){
     
    let newWord = {...employee};
    delete newWord[key];
    return newWord;
}
function destructivelyDeleteFromEmployeeByKey (employee, key, value){
    
    let newObj = employee;
    delete newObj[key];
    return newObj;

}