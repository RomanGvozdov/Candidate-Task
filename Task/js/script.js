"use strict";
let data = JSON.parse(properties);

 function setData(id){
   let set = document.getElementById(id);
   set.innerHTML = data[id];
 }

 function setArrData(id, number){
   let set = document.getElementById(id);
   set.innerHTML = data[id][number];
 }

setData("name");
setData("address");
setArrData("property_class", 1);
setArrData("property_type", 1);
setData("floors");
setData("tenancy");
setData("total_building_area");
setData("no_of_tenant");
setData("year_built");
setData("website");
setData("description");

function addRow(id, propNumber, optionSetNumber){
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.classList.add("height", "bordertr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerHTML = data.availability[propNumber].unit_name_number;
    td2.innerHTML = data.availability[propNumber].record_type[optionSetNumber];
    td3.innerHTML = data.availability[propNumber].available_area + " sf";
    td1.classList.add("item1");
    td2.classList.add("item2");
    td3.classList.add("item3");
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tbody.appendChild(row);
  }

addRow("availabilities", 0, 0);
addRow("availabilities", 1, 1);
addRow("availabilities", 2, 1);
addRow("availabilities", 3, 1);

function setRecords(id){
   let table = document.getElementById("availabilities");
   let quantity = table.rows.length - 1;
   let records = document.getElementById(id);
   records.innerHTML = quantity + " records";

}
setRecords("records");
