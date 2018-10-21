var btnid = 0;
var divid = 1;
function myday(){
    var counter = 0;
    var gettitle = JSON.parse(localStorage.getItem("alltitle"));
    var getdescription = JSON.parse(localStorage.getItem('alldescription'));
    var getlocation = JSON.parse(localStorage.getItem('alllocation'));
    var getdate = JSON.parse(localStorage.getItem('alldate'));
   var len = getdate.length;
        for (var i = 0; i <len; i++) {
             
        var ndate = new Date();
        var dndate = ndate.getDate();
        var mndate = ndate.getMonth();
        var yndate = ndate.getFullYear();

            var newdate = new Date(getdate[i]);
        var dnewdate = newdate.getDate();
        var mnewdate = newdate.getMonth();
        var ynewdate = newdate.getFullYear();
        var calcD = dnewdate - dndate;
        var calcM = mnewdate - mndate;
        var calcY = ynewdate - yndate;
        if (calcD == 0 && calcM == 0 && calcY == 0)
        {
           var ti =  gettitle[i];
            var di = getdescription[i];
            var lo = getlocation[i];
            var da = getdate[i];


            //sadjksdhkjashd
            var title = localStorage.getItem('alltitle');
            var description = localStorage.getItem('alldescription');
            var location = localStorage.getItem('alllocation');
            var date = localStorage.getItem('alldate');
            var a = JSON.parse(title);
            var b = JSON.parse(description);
            var c = JSON.parse(location);
            var d = JSON.parse(date);
            var len = a.length;
            
                // creating new div
                var div = document.createElement('div');
                div.id = divid;

                // creating button div
                var btndiv = document.createElement("div");
                btndiv.classList.add("btnDiv");
                btndiv.id = i + 2;
                btndiv.onclick = detail;
                // adding classes to div
                div.classList.add("teal");
                div.classList.add('style');
                // creating delete button
                var btn = document.createElement("button");
                btn.id = i;
                btn.onclick = del;
                btn.classList.add('btn');
                btn.classList.add('right');
            btn.classList.add('hov');
                btn.classList.add('custombutton')
                btn.classList.add('waves-effect');
                btn.classList.add('waves-lighten-2');
                var text = document.createTextNode('Delete');
                btn.appendChild(text);
                // creating update button
                var btn1 = document.createElement("button");
                btn1.id = i ;
                btn1.onclick = up;
                btn1.classList.add('btn');
                btn1.classList.add('custombutton')
                btn1.classList.add('right');
                btn1.classList.add('waves-effect');
                btn1.classList.add('waves-lighten-2');
                var text1 = document.createTextNode('Update');
                btn1.appendChild(text1);

                var e = document.getElementById('show').appendChild(div);
                // creating paragraph
                var g = document.createElement("p");
                g.classList.add('paragraph')
                var f = document.createTextNode(ti);
                g.appendChild(f);
                btndiv.appendChild(g);
                e.appendChild(btndiv);
                e.appendChild(btn);
                e.appendChild(btn1);
                //e.appendChild(g);
                divid += 1;
                btnid += 1;
counter++;
        
    }
        }
    if (counter == 0) {
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "No Task in MyDay";
    }
    }
// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");
    location.href = "alltodos.html";

}

// delete button function
function del() {
    var val = document.getElementById(this.id);
    val.parentNode.remove();
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescription'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var date = JSON.parse(localStorage.getItem('alldate'));
    title.splice(this.id, 1);
    description.splice(this.id, 1);
    location.splice(this.id, 1);
    date.splice(this.id, 1);
    localStorage.setItem("alltitle", JSON.stringify(title));
    localStorage.setItem('alldescription', JSON.stringify(description));
    localStorage.setItem('alllocation', JSON.stringify(location));
    localStorage.setItem('alldate', JSON.stringify(date));
    window.location.reload();

}
// up function for directing to new page
function up() {

    alert(this.id)
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "update.html";
}
// detail dunction
function detail() {
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "detail.html";
}
