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