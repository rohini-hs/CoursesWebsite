window.onload = function(){

   populatetable();

}
function populatetable(){

    //get table id : 
    let tableId = document.getElementById("myTable")

    fetch("http://localhost:8081/api/courses")
    .then(Response => Response.json())
    .then(data =>{
        for(let i=0; i<data.length; i++) {
            let row = tableId.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = data[i].courseName;
            cell2.innerHTML = data[i].courseNum;
            cell3.innerHTML = data[i].dept;
            const detailsCell = row.insertCell();

            let anchor = document.createElement("a");
            anchor.href = "detail.html?cid=" + data[i].id;
            //anchor.href = "detail.html?cid=3" ;
            anchor.text = "See details";  
            detailsCell.appendChild(anchor);
            

    }

})

}