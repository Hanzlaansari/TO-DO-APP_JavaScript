function det(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescription'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var date = JSON.parse(localStorage.getItem('alldate'));

    var updatetitle = title.slice(sumid-2, sumid-1);
    var updatedescription = description.slice(sumid-2, sumid - 1);
    var updatelocation = location.slice(sumid-2, sumid - 1);
    var updatedate = date.slice(sumid-2, sumid - 1);
    document.getElementById('title').innerHTML = updatetitle;
    document.getElementById('description').innerHTML = updatedescription;
    document.getElementById('location').innerHTML = updatelocation;
    document.getElementById('date').innerHTML = updatedate;
}
// task done
done.onclick = function(){
    var sumid = + localStorage.getItem('idd');
    
    // task done
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescription'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var date = JSON.parse(localStorage.getItem('alldate'));
    var updatetitle = title.splice(sumid - 2, 1);
    var a = updatetitle[0];
    var updatedescription = description.splice(sumid - 2, 1);
    var updatelocation = location.splice(sumid - 2, 1);
    var updatedate = date.splice(sumid - 2, 1);
    localStorage.setItem('alltitle', JSON.stringify(title));
    localStorage.setItem('alldescription', JSON.stringify(description));
    localStorage.setItem('alllocation', JSON.stringify(location));
    localStorage.setItem('alldate', JSON.stringify(date));

    // creating new localstorage values
    var tasktitlee = localStorage.getItem('tasktitle');// 'allnames' in to 'alltitle
   
    // storing title in localstorage
    if (tasktitlee == null) {
        task = [];
    }
    else {
        task = JSON.parse(tasktitlee);
    }
    task.push(a);

    localStorage.setItem('tasktitle', JSON.stringify(task));
   
    window.location.href = "alltodos.html";
}