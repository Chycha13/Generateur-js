function btn(){
    var str_personnes = document.getElementById("personne").value;
    var nbTeam = document.getElementById("team").value;
    var teams = document.getElementById("Teams");
        while (teams.firstChild) {
            teams.removeChild(teams.firstChild);
            }

    var tableau = [];
    tableau = str_personnes.split(/(\r\n|\r|\n)/);
    tableau = tableau.filter(p => /[a-z]/i.test(p));

    shuffle(tableau);

    for (i = 1; i <= nbTeam; i++) {
        const team = document.createElement("p");
        team.innerHTML = "Team " + i + " : ";
        teams.appendChild(team);
    }
    var curTeam = 0;
    var booleen = false ;
    
    for ( i = 0 ; i < tableau.length ; i++) {
        const newTeam = document.getElementById("Teams").getElementsByTagName("p")[curTeam];
       if (booleen) {
            var playerText = document.createTextNode(", " + tableau[i]);

      } else {
            var playerText = document.createTextNode(tableau[i]);
      } 
     
     
        newTeam.appendChild(playerText);

        if (curTeam < nbTeam-1) {
            curTeam ++ ;
          } else {
            curTeam = 0;
            booleen = true ;
          }
    }    
}
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }