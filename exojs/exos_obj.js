//exo 3 faire les tableaux

var objLitteral = {
    prop1 : function un (){
        var a = 2;
        alert(a * 100);
    },
    prop2 : function deux (){
        var b = "machin";
        alert(b + " " + "hello !");

    },
    prop3 : function trois (){
        [
            "indice0",
            "indice1",
            "indice2",
            "indice3"
    ],
    alert(trois());
    },
    prop4 : function quatre (){
        [],
    }

};

objLitteral.prop1();

objLitteral.prop2();

//exo4 faire partie 4 à 7

var enseignant = {
    age : 40,
    present : false,
    nom : "Rogue",
    prenom : "Severus",
    matiere : "defense"
};

var classe = {
    prop : [
        1,
        "magie",
        enseignant
    ],
};

var eleve1 = {
    age : 10,
    present : true,
    nom : "Potter",
    prenom : "Harry"
};

var eleve2 = {
    age : 10,
    present : true,
    nom : "Granger",
    prenom : "Hermione"
};

var eleve3 = {
    age : 10,
    present : true,
    nom : "Weasley",
    prenom : "Ron"
};

//exo 5

var robot = {
    numeroSerie : 1,
    numeroModele : 1,
    nomUsage : "",
    couleur : "",
    matiere : "",
    dureeGarantie : ""
};

//exo 6

var robot = {
    numeroSerie : 1,
    numeroModele : 1,
    nomUsage : "",
    couleur : "",
    matiere : "",
    dureeGarantie : "",
    nombreDeBonjour : 1,
    bonjour = function (){
        alert("Bonjour humain !");
    }
};

robot.bonjour();

//exo 7 faire tout 

var monObjet = {
    e:function(){
        alert(this.t);
    },
    r:true,
    t:"Ceci est un texte dans un objet"
    };
    
    var monAutreObjet = {
    e:[function(){
        alert("Vous êtes ici !");
    },true],
    r:false,
    t:function(){
        this.y = {
            e:function(){
                alert("Ou suis je ? Qui suis je ?");
            }
        };
         alert("Desormais ma propriété y contient un objet");
        }
    };

    monObjet.r();
    monAutreObjet.r();
    monAutreObjet.e();
    monAutreObjet.t();

// exo 8 presque tt

var maison = {
    adresse : "",
    chambre : null
};

var chambre = {
    lit : "matelas",
    quelEstMonAdresse : function () {}
};

chambre.lit();

   





