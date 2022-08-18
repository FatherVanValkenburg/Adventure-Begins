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
  
  const random = Math.floor(Math.random() * names.length);
  const Namesmath = Math.floor(Math.random() * names.length);

  function displayMessage(){
    document.getElementById("msg").innerHTML = "Ah yes we see it now! you have an adventurers heart! from now on you shall be known as " + (Namesmath, names[random]) + " hold tight to your friends, for you never know how many helping hands you are from oblivion!";
  }
  var url = "https://www.dnd5eapi.co/api/";
url += '?' + $.param({
  'api-key': "11111111111111111111111"
});
$.ajax({
  url: "url",
  method: 'GET',
  dataType: 'JSON',
  success: function(data) {
    console.log(data)
  },
  error: function(err) {
    console.log('error:' + err)
  }
})
var classes = [url];
const rado = Math.floor(Math.random() * classes.length);
const classesmath = Math.floor(Math.random() * classes.length);
function display(){
  document.getElementById("nxt").innerHTML = "you have been imbued with the power of the " + (classesmath, classes[random]) + " may you use it well " + (Namesmath, names[random]) + ".";
  }
