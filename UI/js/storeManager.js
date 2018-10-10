
function addToCart(){
    document.getElementById('order_record').style.visibility = 'visible';
    let prod = document.getElementById('productList').value;
    let quant = document.getElementById('quantity').value;
    let table = document.getElementById('tb').getElementsByTagName('tbody')[0];
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = prod;
    cell2.innerHTML = 'Ksh 20.00';
    cell3.innerHTML = quant;
    //document.getElementById('order_record').style.visibility = visible;
    return false;
    //
}