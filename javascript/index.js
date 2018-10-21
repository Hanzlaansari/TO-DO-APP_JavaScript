 function check(){
    var title = document.getElementById("title").value;
     var description = document.getElementById("description").value;
     var location = document.getElementById('location').value;
     var date = document.getElementById("date").value;
   
     if (title == "" || description == "" || location == "" || date == ""){
          var cls = document.getElementById('op');
     cls.classList.add("show2");
     var cls2 = document.getElementById('btn5');
     cls2.style.cursor = "pointer";
        
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }
    else{
        document.getElementById("message").innerHTML = "Task Created Succesfully";
        var utitle = localStorage.getItem('alltitle');
        var udescription = localStorage.getItem('alldescription');
        var udate = localStorage.getItem('alldate');
        var ulocation = localStorage.getItem('alllocation');
        // storing title in localstorage
        if (utitle == null) {
            altitle = [];
        }
        else {
            altitle = JSON.parse(utitle);
        }

        altitle.push(title);

        localStorage.setItem('alltitle', JSON.stringify(altitle));
        // storing the description in localstorage
        if (udescription == null) {
            aludescription = [];
        }
        else {
            aludescription = JSON.parse(udescription);
        }
        aludescription.push(description);
        localStorage.setItem('alldescription', JSON.stringify(aludescription));
        //storing location iin localstorage
        if (ulocation == null) {
            allocation = [];
        }
        else {
            allocation = JSON.parse(ulocation);
        }
        allocation.push(location);
        localStorage.setItem('alllocation', JSON.stringify(allocation));
        // storinng date in localstorage
        if (udate == null) {
            aludate = [];
        }
        else {
            aludate = JSON.parse(udate);
        }
        aludate.push(date);
        localStorage.setItem('alldate', JSON.stringify(aludate));
        return true; 
        

    }
   
}


// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}
