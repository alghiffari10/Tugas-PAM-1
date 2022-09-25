let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

let value = [];
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = 'No.';
let heading_2 = document.createElement('th');
heading_2.innerHTML = 'Name';
let heading_3 = document.createElement('th');
heading_3.innerHTML = 'NIM';
let heading_4 = document.createElement('th');
heading_4.innerHTML = 'Nilai';
let heading_5 = document.createElement('th');
heading_5.innerHTML = 'grade';

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = '1.';
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = 'Raihan';
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = '005';
let row_2_data_4 = document.createElement('td');
value.push(90);
row_2_data_4.innerHTML = value[0];
let row_2_data_5 = document.createElement('td');
if (value[0] >= 80) {
  row_2_data_5.innerHTML = 'A';
} else if (value[0] >= 70 && value[0] < 80) {
  row_2_data_5.innerHTML = 'AB';
} else if (value[0] >= 60 && value[0] < 70) {
  row_2_data_5.innerHTML = 'B';
} else if (value[0] >= 50 && value[0] < 60) {
  row_2_data_5.innerHTML = 'BC';
} else if (value[0] >= 40 && value[0] < 50) {
  row_2_data_5.innerHTML = 'C';
} else if (value[0] >= 10 && value[0] < 40) {
  row_2_data_5.innerHTML = 'D';
} else if (value[0] < 10) {
  row_2_data_5.innerHTML = 'E';
}

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = '2.';
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = 'Samsudin';
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = '120';
let row_3_data_4 = document.createElement('td');
value.push(60);
row_3_data_4.innerHTML = value[1];
let row_3_data_5 = document.createElement('td');

if (value[1] >= 80) {
  row_3_data_5.innerHTML = 'A';
} else if (value[1] >= 70 && value[1] < 80) {
  row_3_data_5.innerHTML = 'AB';
} else if (value[1] >= 60 && value[1] < 70) {
  row_3_data_5.innerHTML = 'B';
} else if (value[1] >= 50 && value[1] < 60) {
  row_3_data_5.innerHTML = 'BC';
} else if (value[1] >= 40 && value[1] < 50) {
  row_3_data_5.innerHTML = 'C';
} else if (value[1] >= 10 && value[1] < 40) {
  row_3_data_5.innerHTML = 'D';
} else if (value[1] < 10) {
  row_3_data_5.innerHTML = 'E';
}

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = '3.';
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = 'Udin';
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = '223';
let row_4_data_4 = document.createElement('td');
value.push(40);
row_4_data_4.innerHTML = value[2];
let row_4_data_5 = document.createElement('td');

if (value[2] >= 80) {
  row_4_data_5.innerHTML = 'A';
} else if (value[2] >= 70 && value[2] < 80) {
  row_4_data_5.innerHTML = 'AB';
} else if (value[2] >= 60 && value[2] < 70) {
  row_4_data_5.innerHTML = 'B';
} else if (value[2] >= 50 && value[2] < 60) {
  row_4_data_5.innerHTML = 'BC';
} else if (value[2] >= 40 && value[2] < 50) {
  row_4_data_5.innerHTML = 'C';
} else if (value[2] >= 10 && value[2] < 40) {
  row_4_data_5.innerHTML = 'D';
} else if (value[2] < 10) {
  row_4_data_5.innerHTML = 'E';
}

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = '4.';
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = 'Pesulap Kuning';
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = '334';
let row_5_data_4 = document.createElement('td');
value.push(60);
row_5_data_4.innerHTML = value[3];
let row_5_data_5 = document.createElement('td');

if (value[3] >= 80) {
  row_5_data_5.innerHTML = 'A';
} else if (value[3] >= 70 && value[3] < 80) {
  row_5_data_5.innerHTML = 'AB';
} else if (value[3] >= 60 && value[3] < 70) {
  row_5_data_5.innerHTML = 'B';
} else if (value[3] >= 50 && value[3] < 60) {
  row_5_data_5.innerHTML = 'BC';
} else if (value[3] >= 40 && value[3] < 50) {
  row_5_data_5.innerHTML = 'C';
} else if (value[3] >= 10 && value[3] < 40) {
  row_5_data_5.innerHTML = 'D';
} else if (value[3] < 10) {
  row_5_data_5.innerHTML = 'E';
}

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
row_5.appendChild(row_5_data_5);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = '5.';
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = 'Windah';
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = '127';
let row_6_data_4 = document.createElement('td');
value.push(100);
row_6_data_4.innerHTML = value[4];
let row_6_data_5 = document.createElement('td');

if (value[4] >= 80) {
  row_6_data_5.innerHTML = 'A';
} else if (value[4] >= 70 && value[4] < 80) {
  row_6_data_5.innerHTML = 'AB';
} else if (value[4] >= 60 && value[4] < 70) {
  row_6_data_5.innerHTML = 'B';
} else if (value[4] >= 50 && value[4] < 60) {
  row_6_data_5.innerHTML = 'BC';
} else if (value[4] >= 40 && value[4] < 50) {
  row_6_data_5.innerHTML = 'C';
} else if (value[4] >= 10 && value[4] < 40) {
  row_6_data_5.innerHTML = 'D';
} else if (value[4] < 10) {
  row_6_data_5.innerHTML = 'E';
}

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
row_6.appendChild(row_6_data_5);
tbody.appendChild(row_6);
