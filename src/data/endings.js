const endings = [{
    name: 'The Dragon King',
    url: 'https://www.dropbox.com/s/dhq8zkjfvuemgrb/dragon%20king.jpg?raw=1',
    rules: ''
  }, {
    name: 'The Eternal Crown',
    url: 'https://cf.geekdo-images.com/medium/img/vW3kH1yRrka8SWhMbt1G122_eb0=/fit-in/500x500/filters:no_upscale()/pic3900742.png',
    rules: `If a character is on the Crown of Command and no other characters are present, he must cast the Command Spell at the start of each of his turns by rolling 1 die and consulting the chart below:\n
    1) Lose 1 life.\n
    2) All characters lose 1 life.\n
    3-5) All other characters lose 1 life.\n
    6) All other characters with the lowest life are killed.\n
    If a character is on the Crown of Command and there is another character present, he must encounter the other character instead of casting the Command Spell.`
  }, {
    name: 'Battle Royale',
    url: 'https://cf.geekdo-images.com/imagepage/img/UOHM53kwDefC4Ij22ZZGtNKCGbE=/fit-in/900x600/filters:no_upscale()/pic1259645.jpg',
    rules: `All characters that do not have a Talisman, except for the character who first entered the Crown of Command, lose the game. All characters that have a Talisman are immediately placed on the Crown of Command.\n
    The character who first entered the Crown of Command must choose a character to attack. The winner of the attack must force the loser to lose a life; he cannot choose to take an Object or gold instead. The winner of the attack then chooses any other character to attack (the loser cannot be chosen unless he is the only other character remaining). If the attack is a stand-off, the same characters fight again.\n
    Characters must continue attacking each other in this manner until only one character remains. The last character remaining wins the game!\n
    When a character attacks, he may choose to fight in battle or psychic combat. He may not choose when he is attacked by another character.\n`
  }, {
    name: 'Chernabog',
    url: 'http://2.bp.blogspot.com/-v-kPHEXOBmc/VaxFDmZrpHI/AAAAAAAAJuk/PXCjuRDDc2c/s1600/TalismouseEndingChernabog.jpg',
    rules: ''
  }, {
    name: 'Hand of doom',
    url: 'https://cf.geekdo-images.com/imagepage/img/PsL0Bvz5oVHDHdaSRITR5fOiIDw=/fit-in/900x600/filters:no_upscale()/pic1259382.png',
    rules: `A character on the Crown of Command must roll 1 die for the Hand of Doom during each of his turns:\n
    1) All characters are killed, – all players lose the game.\n
    2-3) Lose 1 life.\n
    4-5) Choose one character; that character is killed. If all other characters are killed, you win the game!\n
    6) All other characters are killed – you win the game!\n
    Characters on the Crown of Command cannot encounter each other; they must roll 1 die for the Hand of Doom instead.`
  }, {
    name: 'Seven trials',
    url: 'https://www.dropbox.com/s/s5fszldvyyfjney/seven%20trials.jpg?raw=1',
    rules: ''
  }, {
    name: 'Endless Darkness',
    url: 'https://www.dropbox.com/s/bn02mgg59gpqcp5/endless%20darkness.jpg?raw=1',
    rules: ''
  }, {
    name: 'Judgement Day',
    url: 'https://images-cdn.fantasyflightgames.com/ffg_content/Talisman/the-sacred-pool/preview3/sacred-pool-judgement-day.png',
    rules: `Starting with the character who entered the Crown of Command and continuing clockwise, each character must take 1 fate from the stockpile and place it on this card (when a character places his fate, he must choose if the token reveals its light or dark side). Then the character who entered the Crown of Command rolls 1 die. Add 1 to the result for each light fate and subtract 1 from the result for each dark fate (to a minimum of 1):\n
    1) No character is deemed worthy; discard this card and encounter the Crown of Command normally.\n
    2-3) You are deemed unworthy; you are killed!\n
    4-5) All characters with the same alignment as you are judged worthy and win the game!\n
    6+) You have been judged worthy; you win the game!`
  }, {
    name: 'Wizards Curse',
    url: 'https://www.dropbox.com/s/jx4sj4s35yb45bp/wizards-curse.jpg?raw=1',
    rules: ''
  }, {
    name: 'Demon Lord',
    url: 'https://www.dropbox.com/s/ypu3gcfuq2gizrh/demon%20lord.jpg?raw=1',
    rules: ''
  }, {
    name: 'Eagle King',
    url: 'https://cf.geekdo-images.com/imagepage/img/D3PUaX18WFdRawEX81ooGVjFGfI=/fit-in/900x600/filters:no_upscale()/pic1259655.jpg',
    rules: `A character on the Crown of Command must choose whether to attack the Eagle King using Strength or Craft. Each time he defeats the Eagle King, he must remove one of the Eagle King’s lives and immediately attack him again. If a character has a stand-off or is defeated, his turn ends and he must immediately move to the Crags.\n
    If a character removes the Eagle King’s last life, he wins the game!\n
    If there are no characters on the Crown of Command, the Eagle King heals all his lives.
    Strength: 12
    Craft: 12
    Life: 4`
  }, {
    name: 'Chosen By The Gods',
    url: 'https://www.dropbox.com/s/ss6k3c7xp7x81hx/chosen%20by%20the%20gods.jpg?raw=1',
    rules: ''
  }

]
export default endings