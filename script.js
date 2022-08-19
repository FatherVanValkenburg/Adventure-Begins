  const names = [
    "Logen Ninefingers",
"al'Lan Mandragoran",
"Jessica Atréides",
"Anomander Rake",	
"Jasnah Kholin",
"Beric Dondarrion",
"Emhyr var Emreis",
"Celebrimbor Alfelf",
"Tattersail The Mighty",
"Granny Weatherwax",
"Lydan Amana",
"Syrin Barlowe",
"Ptorik Caddel",
"Joz Bay tree",
"Varog Fox",
"Gethrod Free",
"Hezra Francis",
"Feron Hart",
"Ophni Hendri", 
"Colborn Katz",
"Fintis Laurier", 
"Gatlin Little dog",
"Jinto Madden",
"Hagalbar Viotto",
"Krinn Sai",
"Lenox Villarreal",
"Abraham	Revvyn",
"Hodus Boone",
"Dimian Ashford",
"Paskel Good",
"Kontas Elrod",	
"Weston Fredericks",
"Azamarr Hale",
"Jather Langston",	
"Tekren Levisay",
"Jareth McElfresh", 
"Adon Trevino",
" Viotto Whitlock",	
"Yarbrough Beergut",
"Hemm Gentar",
"Sarkin Lustros",
"Blaiz Zenner",
"Talon Dagrod",
"Agro Baashar",
"Zagaroth Feston",
"Turrek Esdel"
  ]
  const dave = ["paladin/","ranger/","cleric/","warlock/","fighter/","wizard/","barbarian/","bard/","druid/","monk/","rogue/","sorcerer/"]
  const daveradom = Math.floor(Math.random() * dave.length);
  const classesmath = Math.floor(Math.random() * dave.length);

  const random = Math.floor(Math.random() * names.length);
  const Namesmath = Math.floor(Math.random() * names.length);

  function displayMessage(){
    document.getElementById("msg").innerHTML = "Ah yes we see it now! you have an adventurers heart! from now on you shall be known as " + (Namesmath, names[random]) + " hold tight to your friends, for you never know how many helping hands you are from oblivion!";
  }

  var url = "https://www.dnd5eapi.co/api/classes/" + dave[daveradom]
url += '?' + $.param({
  'api-key': "11111111111111111111112"
});
 $.ajax({
  url: url,
  method: 'GET',
  dataType: 'JSON',
  success: function(data) {
    n = []
  $.map(["item1","item2","item3"], function(n){
    var li = document.createElement ( 'li' );
    li.innerHTML = n;
    ul.appendChild ( li );
    return li;
    console.log(n)
});

  },
  error: function(err) {
    console.log('error:' + err)
  }
  
})

function display(){
  document.getElementById("nxt").innerHTML = "You have been imbued with the power of the " + (dave[daveradom]) + " may you use it well " + (Namesmath, names[random]) + ".";
  }

  const weapons = Math.floor(Math.random() * names.length);
  const weaponsmath = Math.floor(Math.random() * names.length);

  function give(){
    document.getElementById("tnt").innerHTML = "This is all I have to give you for now, but maybe return back every once in awhile, I have heard of people changing into strange forms....";
  }

