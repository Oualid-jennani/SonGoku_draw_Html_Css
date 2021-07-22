
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function(){
    document.documentElement.style.setProperty('--bg-face-color', "#ffe9dc");
    document.documentElement.style.setProperty('--bg-face2-color', "#b49079");
    document.documentElement.style.setProperty('--bg-face3-color', "#b49079");
    
    document.documentElement.style.setProperty('--bg-hair-color', "#fbc127");
    document.documentElement.style.setProperty('--bg-hair2-color', "#d4811b");
    document.documentElement.style.setProperty('--bg-hair3-color', "#fffcc8");
    
    document.documentElement.style.setProperty('--bg-shadow-color', "yellow");
    
    document.documentElement.style.setProperty('--bg-e-color', "#468e54");
}



btn2.onclick = function(){
    document.documentElement.style.setProperty('--bg-face-color', "#ffe9dc");
    document.documentElement.style.setProperty('--bg-face2-color', "#b49079");
    document.documentElement.style.setProperty('--bg-face3-color', "#b49079");
    
    document.documentElement.style.setProperty('--bg-hair-color', "#27cafb");
    document.documentElement.style.setProperty('--bg-hair2-color', "#1b8bd4");
    document.documentElement.style.setProperty('--bg-hair3-color', "#c8fbff");
    
    document.documentElement.style.setProperty('--bg-shadow-color', "#fff");
    
    document.documentElement.style.setProperty('--bg-e-color', "#000");
}


