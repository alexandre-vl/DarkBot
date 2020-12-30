const sentences = [
	"Le monde n'est ni joyeux ni cruel. Il est simplement aléatoire.",
	"Anesthésie : Sommeil garanti, réveil aléatoire.",
    "Le sourire que tu envoies revient vers toi.",
    "Un être ne se sent obligé que s'il est libre, et chaque obligation, prise à part, implique la liberté.",
    "Marche en avant de toi-même, comme le chameau qui guide la caravane.",
    "Le ridicule ne tue pas. Ce qui ne tue pas rend plus fort. Donc le ridicule rend plus fort !",
    "L'avantage c'est qu'il n'y a pas d'inconvénient.",
    "Mieux vaut un coca cola au glaçon qu'un caca colé au caleçon.",
    "La vie c'est comme un jeu vidéo où on aurait droit à une seule partie.",
    "Une femme doit coucher pour réussir, un homme doit réussir pour coucher.",
    "Dieu est un geek qui joue aux Sims à longueur de temps.",
    "La honte n'est pas d'être inférieur à l'adversaire c'est d'être inférieur à soi-même.",
    "Heureux l'étudiant qui comme la rivière suit son cours sans quitter son lit.",
    "Laisse aux cons le soin de faire la guerre et aux intelligents le soin de la commenter.",
    "Qui viole un oeuf, viole un boeuf. Qui viole un boeuf, est vachement costaud.",
    "Dieu est le seul être qui, pour régner, n'ait même pas besoin d'exister.",
    "La plus grande découverte de ma génération est que les êtres humains peuvent changer leur vie en modifiant leurs attitudes d’esprit.",
    "Si vous devez être abattu au cours d'un combat, soyez résolu à l'être face à l'ennemi.",
    "S'il veut vous demander conseil, c'est qu'il a déjà choisi la réponse.",
    "Jamais une haute civilisation n'est si proche de son terme que lorsqu'elle a atteint son apogée."
];
const difficulties = ['easy', 'facile', 'moyen', 'dur', 'extreme', 'impossible'];
const times = {
	easy: 60000,
	facile: 25000,
	moyen: 20000,
	dur: 15000,
	extreme: 10000,
	impossible: 5000
};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// /dactylo <difficulty>
exports.run = async(client, message, args) => {
    var Discord = require("discord.js");
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    if(!args[0]) args[0] = 'moyen';
    if(difficulties.includes(args[0]) === false) args[0] = 'moyen';
    const time = times[args[0]];
    message.channel.send('A vos claviers ?!');
    await sleep(750);
    message.channel.send('Prêts ?!');
    await sleep(750);
    message.channel.send('__Partez !!!__');
    await sleep(300);
    message.reply(`**Vous avez ${time / 1000} secondes pour écrire cette phrase **__(merci d'être fairplay)__** :** \n\n` + "``" + sentence + "``");
    const now = Date.now();
    const msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, { max: 1, time });
    if (!msgs.size) return message.reply("Perdu, vous n'avez pas été assez rapide");
    if (msgs.first().content !== sentence) return message.reply("Perdu, une faute s'est glissée dans votre phrase");
    if((Date.now() - now) < 8000){
        const droit = new Discord.MessageEmbed()
            .setDescription(`<@!${message.author.id}> a triché au jeu 🤬 !`);
        return message.channel.send(droit);
    }
    const Enmap = require("enmap"); 
    const exp = new Enmap({name: "points"});
    exp.math(`${message.guild.id}-${message.author.id}`, "+", 8, "points");
    return message.reply(`**Bien joué !!! 10/10, sans fautes 👌 !** (Temps : ${(Date.now() - now) / 1000} secondes | + 8 xp)`);
};