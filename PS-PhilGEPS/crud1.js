var selectedRow = null
function onFormSubmit(){
    var formData =  readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
        else
    updateRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["cpassword"] = document.getElementById('cpassword').value;
    return formData; 
    // formData["salutation"] = document.getElementById('salutation').value;
    // formData["fname"] = document.getElementById('fname').value;
       
}
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cpassword;
    cell5 = newRow.insertCell(4);
    // cell5 = newRow.insertCell(4);
    // cell5.innerHTML = data.salutation;
    // cell6 = newRow.insertCell(5);
    // cell6.innerHTML = data.fname;
    // cell7 = newRow.insertCell(6);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                                            <button onClick="onDelete(this)">Delete</button>`


}
function resetForm(){
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";
    // document.getElementById("salutation").value = "";
    // document.getElementById("fname").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("password").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cpassword").value = selectedRow.cells[3].innerHTML;
    // document.getElementById("salutation").value = selectedRow.cells[4].innerHTML;
    // document.getElementById("fname").value = selectedRow.cells[5].innerHTML;
    
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.cpassword;
    // selectedRow.cells[4].innerHTML = formData.salutation;
    // selectedRow.cells[5].innerHTML = formData.fname;
}
function onDelete(td){
    if(confirm('Are you sure about that?')){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}