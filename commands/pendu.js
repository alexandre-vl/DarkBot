var motATrouver = "";
var motTrouve = "";
var inGame = false;
var erreur = 0;
var nbEssais = 0;
var lettreTest = "";
var listemot = [
        "CAROTTE",
        "PATATE",
        "FROMAGE",
        "ROBLOCHON",
        "ORDINATEUR",
        "GUITARE",
        "CLARINETTE",
        "SAXOPHONE",
        "LINUX",
        "UNIX",
        "WINDOWS",
        "APPLE",
        "PYTHON",
        "POTIRON",
        "PENDU",
        "CUCURBITACEES",
        "COUSCOUS",
        "COURGETTE",
        "PATATE",
        "VERRE",
        "LETTRE",
        "ECONOMIE",
        "ALGORITHMIQUE",
        "MICRO"
    ];


function genChaineCherche(pChaine) {
    /*
    genChaineCherche : fonction : str :
      Retourne la chaine contenant les - et la premiere/derniere lettre (au choix)
    Peremetre:
    pChaine : str : la chaine d'entree
    Retour:
    chaineSortie : str : chaine renvoyee, contenant des _
    */
    var chaineSortie = "";
    chaineSortie = chaineSortie + pChaine.charAt(0);
    for (var i = 0; i < pChaine.length-2; i++) {//-2
      chaineSortie = chaineSortie + "-";
    }
    chaineSortie = chaineSortie + pChaine.charAt(pChaine.length-1);
    return chaineSortie;
}
function modifyMotTrouve(pMotTrouve, pMot, pChar) {
    /*
    modifyMotTrouve : fonction : str :
    Remplace les - dans le motTrouve par la lettre entree
    Parametres:
    pMotTrouve : str : chaine de caractere contenant les lettres deja trouvees
      dans le mot
    pMot : str : le mot entree par l'utilisateur
    pChar : char : le caractere entree par l'utilisateur
    Retour:
    chaineSortie : str : la chaine de sortie
    */
    var chaineSortie = "";
    for (var i = 0; i < pMot.length; i++) {
        if (pChar == pMot.charAt(i)) {
            chaineSortie = chaineSortie + pChar;
        } else {
            chaineSortie = chaineSortie + pMotTrouve.charAt(i);
        }
    }
    return chaineSortie;
}
function affPendu(pErreur) {
    /*
    affPendu : procedure :
    Affichage du pendu à differents stades en fonction de pErreur
    Parametre:
    pErreur : int : le nombre d'erreur de l'utilisateur
    Retour:
    chaineSortie : str : la chaine de sortie
    */
    if (pErreur === 0) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃\n ┃\n ┃\n━┻━```";
    } else if (pErreur === 1) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃     O\n ┃\n ┃\n━┻━```";
    } else if (pErreur === 2) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃     O\n ┃     X\n ┃\n━┻━```";
    } else if (pErreur === 3) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O\n ┃     X\n ┃\n━┻━```";
    } else if (pErreur === 4) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃\n━┻━```";
    } else if (pErreur === 5) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃    /\n━┻━```";
    } else if (pErreur === 6) {
        var chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃    / \\\n━┻━```";
    }
    return chaineSortie;
}
function randint(pMax) {
    /*
    randint : fonction : int :
    Renvoit un entier aléatoire entre 0 et pMax
    Parametre:
    pMax : int : la borne superieur de l'aléatoire
    */
    return Math.floor(Math.random() * Math.floor(pMax));
}
function choixMotRandom() {
    /*
    choixMotRandom : fonction :
    Choisis un mot au hazard dans le fichier mots.json
    Local:
    rndValue : int : une valeur aléatoire choisis entre 0 et la taille du tableau
    Retour:
    motChoisis : str : le mot choisis aléatoirement
    */
    var rndValue = randint(listemot.length);
    return listemot[rndValue];
}
function occurence(pMot, pChar) {
    /*
    occurence : fonction : bool :
    Renvoit True si le caractere pChar est dans la chaine pMot, False sinon
    Parametre:
    pMot : str : le mot a tester
    pChar : char : le caractere a tester
    Local:
    i : int : boucle de repetition
    Retour:
    dedans : bool : True si le caractere et dedans False sinon
    */
    var i = 0;
    var dedans = false;
    while (i < pMot.length && dedans === false) {
        if (pMot.charAt(i) === pChar) {
            dedans = true;
        }
        i = i + 1;
    }
    return dedans;
}
function testLettre(pListe, pLettre) {
    /*
    testLettre : fonction : str :
    Envoit la liste des lettres deja essayes
    Parametres:
    pListe : str : la liste de lettres deja trouvees
    pLettre : str : la lettre a ajouter
    Local:
    chaineSortie : str : la chaine de sortie
    */
    if (occurence(pListe, pLettre)) {
        var chaineSortie = pListe;
    } else {
        var chaineSortie = pListe + pLettre;
      }
    return chaineSortie;
}
function removeParam(pTable, pIndex) {
    var local_table = [];
    for (var i=0; i < pTable.length; i++) {
        if (pIndex!=i) {
            local_table.push(pTable[i]);
        }
    }
    return local_table;
}

exports.run = (client, message) => {
    var Discord = require("discord.js");
    // /start difficulty [word]
    // /try letter/word
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    const args = message.content.split(/[ ]+/);
    //const args = message.content.slice(prefix.length).split(/ +/);
    
    if (!args[1] || args[1] === "help"){
        const embed = new Discord.MessageEmbed()
            .setTitle('Pendu')
            .setColor('#32a87f')
            .addField("`/pendu help`", "Affiche ce message")
            .addField("`/pendu start`", "Lance une partie de pendu")
            .addField("`/pendu try <lettre|mot>`", "Répond au pendu")
            .addField("`/pendu close`", "Ferme la partie de pendu");
        message.channel.send(embed);
    }
    
    ///////////////////////////////////////////////////////////////////////////////////
    
    if (args[1] === "start"){
        if (inGame === false) {
            message.delete();
            nbEssais = 0;
            if (args[2]) {
                motATrouver = args[2].toUpperCase();
            } else {
                motATrouver = choixMotRandom();
            }
            motTrouve = genChaineCherche(motATrouver);
            inGame = true;
            erreur = 0;
            lettreTest = "";
            const embed = new Discord.MessageEmbed()
                .setTitle('`Nouvelle partie`')
                .setColor('#32a87f')
                .setDescription("Utilisez **/pendu try <lettre/mot>** pour proposer des lettres ou des mots !\n\n```" + motTrouve + "```");
            message.channel.send(embed);
        } else {
            const droit = new Discord.MessageEmbed()
                .setColor("#E74C3C")
                .setDescription(`<a:uncheckmoove:740634696198914070> **Veulliez patienter. Une partie est déjà en cours.**`);
            message.channel.send(droit);
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////////////
    
    if (args[1] === "try"){
        if (inGame === true) {
            if (args[2] !== null) {
                nbEssais = nbEssais + 1;
                if (args[2].length === 1) {
                    lettreTest = testLettre(lettreTest, args[2].toUpperCase());
                    if (occurence(motATrouver, args[2].toUpperCase()) === false) {
                        erreur = erreur + 1;
                        if (erreur === 7) {
                            var win = false;
                            inGame = false;
                        }
                    } else {
                        motTrouve = modifyMotTrouve(motTrouve, motATrouver, args[2].toUpperCase());
                    }
                    if (motTrouve === motATrouver) {
                        var win = true;
                        inGame = false;
                    }
                    if (inGame === false) {
                        if (win === true) {
                            const embed = new Discord.MessageEmbed()
                                .setTitle(':green_circle: `Victoire !`')
                                .setDescription(affPendu(erreur) + "Vous avez trouvé le mot `" + motATrouver + "` avec **" + erreur + "** erreurs et **" + nbEssais + "** essais !");
                            message.channel.send(embed);
                        } else {
                            const embed = new Discord.MessageEmbed()
                                .setTitle(':red_circle: `Défaite !`')
                                .setDescription(affPendu(6) + "Vous avez perdu ! Le mot à trouver était `" + motATrouver + "`");
                            message.channel.send(embed);
                        }
                    } else {
                        const embed = new Discord.MessageEmbed()
                            .setTitle("**" + motTrouve + "**")
                            .addField("Erreurs", erreur + "/6", true)
                            .addField("Essais", nbEssais, true)
                            .addField("Lettres", lettreTest, true)
                            .setDescription(affPendu(erreur));
                        message.channel.send(embed);
                    }
                } else {
                    if (args[2].toUpperCase() === motATrouver) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle(':green_circle: `Victoire !`')
                            .setDescription(affPendu(erreur) + "Vous avez trouvé le mot `" + motATrouver + "` avec **" + erreur + "** erreurs et **" + nbEssais + "** essais !");
                        message.channel.send(embed);
                        win = false;
                        inGame = false;
                    } else {
                        erreur = erreur + 1;
                        if (erreur === 7) {
                            var win = false;
                            inGame = false;
                            const embed = new Discord.MessageEmbed()
                                .setTitle(':red_circle: `Défaite !`')
                                .setDescription(affPendu(6) + "Vous avez perdu ! Le mot à trouver était `" + motATrouver + "`");
                            message.channel.send(embed);
                        } else {
                            const embed = new Discord.MessageEmbed()
                                .setTitle("**" + motTrouve + "**")
                                .addField("Erreurs", erreur + "/6", true)
                                .addField("Essais", nbEssais, true)
                                .addField("Lettres", lettreTest, true)
                                .setDescription(affPendu(erreur));
                            message.channel.send(embed);
                        }
                    }
                }
            } else {
                const droit = new Discord.MessageEmbed()
                    .setColor("#E74C3C")
                    .setDescription("<a:uncheckmoove:740634696198914070> **Veuillez preciser `/pendu try <lettre|mot>`**");
                message.channel.send(droit);
            }
        } else {
            const droit = new Discord.MessageEmbed()
                .setColor("#E74C3C")
                .setDescription("<a:uncheckmoove:740634696198914070> **Aucune partie n'est lancée**");
            message.channel.send(droit);
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////////////
    
    if (args[1] === "close"){
        message.delete();
        if (message.member.hasPermission('ADMINISTRATOR')) {
            inGame = false;
            win = false;
            message.reply("La partie a bien été annulée.");
        }
    }
};