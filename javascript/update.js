// update function fetching values from localstorage
function update(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescription'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var date = JSON.parse(localStorage.getItem('alldate'));

    var updatetitle = title.slice(sumid, sumid + 1);

    var updatedescription = description.slice(sumid, sumid + 1);
    var updatelocation = location.slice(sumid, sumid + 1);
    var updatedate = date.slice(sumid, sumid + 1);
    document.getElementById('title').value = updatetitle;
    document.getElementById('description').value = updatedescription;
    document.getElementById('location').value = updatelocation;
    document.getElementById('date').value = updatedate;
}
// updating values inlocalstprage
function updatee(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;

    if (title == "" || description == "" || location == "" || date == "") {
        // absolute div
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }

   else{
        document.getElementById("message").innerHTML = "Task Updated Succesfully";
        var sumid = localStorage.getItem('idd');
        var gettitle = JSON.parse(localStorage.getItem("alltitle"));
        var getdescription = JSON.parse(localStorage.getItem('alldescription'));
        var getlocation = JSON.parse(localStorage.getItem('alllocation'));
        var getdate = JSON.parse(localStorage.getItem('alldate'));
        gettitle.splice(sumid, 1, title);
        getdescription.splice(sumid, 1, description);
        getlocation.splice(sumid, 1, location);
        getdate.splice(sumid, 1, date);
        localStorage.setItem('alltitle', JSON.stringify(gettitle))
        localStorage.setItem('alldescription', JSON.stringify(getdescription))
        localStorage.setItem('alllocation', JSON.stringify(getlocation))
        localStorage.setItem('alldate', JSON.stringify(getdate))
        return true;
   }
}

// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}