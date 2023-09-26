$(document).ready(function(){

   //1.Functia afiseaza imaginea completa pentru hint-ul puzzle-ului
    $('.fullView').click(function() {
        if ($('.canvas').css('display') == 'none') {
            $('.canvas').show();
            $('.puzzle').hide();
        }
        else {
            $('.canvas').hide();
            $('.puzzle').show();
            $('.info').hide();
        }
    });
    //2.Functia pentru afisarea instructiunilor
    $('.instruction').click(function() {
        if ($('.canvas').css('display') == 'none') {
            $('.canvas').show();
            $('puzzle').hide();
            $('.info').hide();
        }
        else {
            $('.canvas').hide();
            $('.info').show();
            $('.puzzle').hide();
        }
    });

     //7.Functii pentru ultimul puzzle
    var isClicked = false; //daca imaginea e selectata sau nu pentru inlocuire, initializat cu fals
    var isClickedFirst; //click pe prima imagine
    var isClickedSecond; // click pe a doua imagine
    var poztop1 = 0; //pozitia de sus a primei imagini selectate
    var pozleft1 = 0; //pozitia stanga a primei imagini selectate
    var poztop2 = 0; //pozitia de sus a imaginii 2 selectate
    var pozleft2 = 0; //pozitia stanga a imaginii 2 selectate
    $('.pieseanimatie').click(function(){ //la apasarea pe o piesa

		if(isClicked == false){  
            var id1=$(this).attr('id');
			isClickedFirst = id1 //preia id-ul primei imagini selectate
			poztop1 = parseInt($(this).css('top'));  //preia pozitia top
			pozleft1 = parseInt($(this).css('left')); //preia pozitia left
			$(this).addClass('changeImage'); //adauga efect pe imagine
			isClicked = true; //setat ca si apasat
        } 
        else{  
            var id2= $(this).attr('id');
			isClickedSecond=id2 //preia id-ul celei de-a doua imagini
			poztop2 = parseInt($(this).css('top')); //preia pozitia top
			pozleft2 = parseInt($(this).css('left')); //preia pozitia left
            //schimba pozitia primei imagini cu a celei de-a doua
            $('#' + isClickedFirst).css({'top' : + poztop2 + 'px'})
            $('#' + isClickedFirst).css({'left' : + pozleft2 + 'px'})
            //schimba pozitia celei de-a doua imagini cu prima
            $('#' + isClickedSecond).css({'top' : + poztop1 + 'px'})
            $('#' + isClickedSecond).css({'left' : + pozleft1 + 'px'})
			$('.pieseanimatie').removeClass('changeImage'); //sterge efectul de marire 
			isClicked = false; //setare inapoi in faza initiala
		}
	}); 
});

    //3.Functia de zoom pe imagine
    function zoomIn(){
    var img = document.getElementById("puzzle");
    var width = img.clientWidth; //latimea imaginii
    var height=img.clientHeight; //inaltimea imaginii
    if(width == 1500) return false; //verificare daca imaginea se afla deja la o dimensiune marita
     else{
	   var wmi=(width+100)+"px"; //concatenare cu unitate de masura
	   var hmi=(height+100)+"px"; //concatenare cu unitate de masura
       img.style.width = wmi; 
       img.style.height= hmi;
        } 
    }

    //4.Functia de zoomout pe imagine
    function zoomOut(){
        var img = document.getElementById("puzzle");
        var width = img.clientWidth;
        var height=img.clientHeight;
        if(width == 1500) return false;
         else{
		   var wmo=(width-100)+"px"; 
		   var hmo=(height-100)+"px"; 
           img.style.width = wmo;
           img.style.height=hmo;
        } 
    }

    var img=[{src:"./media/puzzle.png"}];

    window.onload=function(){
        amestecaPiese();	
        var dim=document.getElementsByName('lvl').checked;
        document.getElementById("nivel").style.display='inline-block';
        this.impartireImagine(dim,img);	
    }
  
    
    //numar generat random pentru amestec imagini in intervalul [1,4]
    var randomnumber = Math.floor((Math.random() * 4) + 1); 
    //pozitiile pieselor daca nu ar fi amestecate
    //linia 1: [0,0]   [0,160]   [0,320]
    //linia 2: [160,0] [160,160] [160,320]
    //linia 3: [320,0] [320,160] [320,320]
    function amestecaPiese(){
    if(randomnumber == 1){
        $('#piesa1').css({top: 320, left: 320});
        $('#piesa2').css({top: 0, left: 160});
        $('#piesa3').css({top: 0, left: 320});
        $('#piesa4').css({top: 160, left: 320});
        $('#piesa5').css({top: 160, left: 160});
        $('#piesa6').css({top:320, left: 160});
        $('#piesa7').css({top: 320, left: 0});
        $('#piesa8').css({top: 0, left: 0});
        $('#piesa9').css({top: 160, left: 0});
    } 
    else if(randomnumber==2)
    {
        $('#piesa1').css({top: 0, left: 160});
        $('#piesa2').css({top: 0, left: 320});
        $('#piesa3').css({top: 0, left: 0});
        $('#piesa4').css({top:320, left: 160});
        $('#piesa5').css({top: 160, left: 160});
        $('#piesa6').css({top: 160, left: 320});
        $('#piesa7').css({top: 320, left: 0});
        $('#piesa8').css({top: 160, left: 0});
        $('#piesa9').css({top: 320, left: 320});
    }
    else if(randomnumber==3)
    {
        $('#piesa1').css({top: 320, left: 320});
        $('#piesa2').css({top: 0, left: 160});
        $('#piesa3').css({top: 0, left: 320});
        $('#piesa4').css({top: 160, left: 0});
        $('#piesa5').css({top: 0, left: 0});
        $('#piesa6').css({top: 160, left: 320});
        $('#piesa7').css({top: 320, left: 0});
        $('#piesa8').css({top: 320, left: 160});
        $('#piesa9').css({top: 160, left: 160});
    }
    else if(randomnumber==4)
    {
        $('#piesa1').css({top: 0, left: 160});
        $('#piesa2').css({top: 160, left: 320});
        $('#piesa3').css({top: 0, left: 320});
        $('#piesa4').css({top: 160, left: 0});
        $('#piesa5').css({top:320, left: 160});
        $('#piesa6').css({top: 320, left: 320});
        $('#piesa7').css({top:0, left:0});
        $('#piesa8').css({top: 320, left: 0});
        $('#piesa9').css({top: 160, left: 160});
    }
}
    //5.Functiile pentru impartire imagine
    function myFunc(dim,img){
        this.impartireImagine(dim,img);
        amestecare('pieces');
    }

    //dimensiunea este initializata cu valoarea din primul input in caz ca nu se va selecta alta valoare
    function impartireImagine(dim=2,img){
        var images=img[0]; 
        var nrPiese=dim*dim; //nr de piese existente va fi dim^2
        var procentaj=(97*2)/dim; //procent de scalare pentru fiecare piesa
        document.getElementById("pieces").innerHTML='';
        for(var i=0; i<nrPiese ;i++){
            var pozx=((i%dim)*procentaj)+'%'; //setare pozitie pe verticala si orizontala pentru fiecare piesa
            var pozy=(Math.floor(i/dim)*procentaj)+'%'; 
            let li=document.createElement('li'); //creare listitem pentru fiecare piesa si setare id
            li.id=i;
            li.setAttribute('data-value',i); //setare atribut cu valoarea id pentru fiecare elem
            li.style.backgroundSize=(dim*97)+'%';
            li.style.backgroundPosition=pozx+' '+pozy;
            li.style.backgroundImage = 'url(' + images.src + ')';
            var dimens= 400/ dim + 'px';
            li.style.width =dimens;
            li.style.height =dimens;
            li.setAttribute('draggable','true'); //fiecare elem din lista se poate prelua prin drag&drop
            li.setAttribute('dragstart', 'true');
            li.ondragstart=(e)=>e.dataTransfer.setData('data',e.target.id);
            li.ondragover=(e)=>e.preventDefault();
            li.ondrop=(e)=>{
                let srs=create(e.dataTransfer.getData('data'));
                let dest=create(e.target.id);
                let parent=dest.parentNode;

                if(srs&&dest&&parent){ //interschimbarea sursei cu a destinatiei pe evenimentul de drop
                    let temp=dest.nextSibling; 
                    parent.insertBefore(dest,srs);
                    parent.insertBefore(srs,temp);
                    if(sorted(values=Array.from(create('pieces').children).map(item=>item.id)))  //verifica corectitudinea amplasarii imaginilor
                    {
                      alert('CONGRATS! SOLVED');
                    }
                }
            };
            document.getElementById('pieces').appendChild(li); //adaugare copil in parinte pentru fiecare configurare
        }
       amestecare('pieces'); //amestecare piese la incarcare
    }

//functie pentru amestecare piese si lipire in parinte
function amestecare(id){
    var ul = document.getElementById(id);
    for (var i = ul.children.length; i >= 0; i--) { //parcurgere piese de puzzle rezultate din lista
        ul.appendChild(ul.children[0+Math.random()*i]); 
    }
 }

//functie pentru verificarea sortarii
sorted = (pieces) => pieces.every((elem, poz) => { return elem == poz; });

//functie care returneaza un element dupa id daca exista, altfel creaza un element
function create(id){
    if(id)
    {
        return document.getElementById(id);
    }
    else
    {
        document.createElement("div");
    }
}

  //6.Preluare elemente audio
  var soundrop=new Audio()
  soundrop.src="./media/clickdrop.mp3"

  var soundrag=new Audio()
  soundrag.src="./media/clickdrag.mp3"

  var soundchose=new Audio()
  soundchose.src="./media/push.mp3"
  
