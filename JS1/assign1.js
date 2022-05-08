(function () {
    var c = 0;
    const array = [
      ["Name", "Age", "DOB", "Email", "Company"],
      ["Aparna Singh", 20, "02/05/2002", "aparna@gmail.com", "Gemini"],
      ["Aastha Singh", 22, "05/09/2000", "aastha@gmail.com", "Gemini"],
      ["Aarti sharma", 21, "23/03/2001", "aarti@gmail.com", "Vidhya Analytics"],
      ["Madhu Agarwal", 19, "27/11/2003", "madhu@gmail.com", "CapeGemini"],
      ["Chanchal Bansal", 22, "20/12/2000","chanchal@gmail.com", "Microsoft"],
    ];

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    var tHead = document.createElement("thead");
    tHead.setAttribute("class", "table-primary");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var text1 = document.createTextNode(array[0][0]);
    var text2 = document.createTextNode(array[0][1]);
    var text3 = document.createTextNode(array[0][2]);
    var text4 = document.createTextNode(array[0][3]);
    var text5 = document.createTextNode(array[0][4]);
    th1.appendChild(text1);
    th2.appendChild(text2);
    th3.appendChild(text3);
    th4.appendChild(text4);
    th5.appendChild(text5);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tHead.appendChild(tr);
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    for (var i = 1; i < 6; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var text1 = document.createTextNode(array[i][0]);
      var text2 = document.createTextNode(array[i][1]);
      var text3 = document.createTextNode(array[i][2]);
      var text4 = document.createTextNode(array[i][3]);
      var text5 = document.createTextNode(array[i][4]);
      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      td4.appendChild(text4);
      td5.appendChild(text5);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tBody.appendChild(tr);
      table.appendChild(tBody);
    }
    document.body.appendChild(table);
    tbl.setAttribute("border", "2");
  })();