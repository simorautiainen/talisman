const endings = [{
    name: 'The Dragon King',
    url: 'https://cf.geekdo-images.com/imagepage/img/iLRwAZxsD79tDK8zuQf0mo3bvys=/fit-in/900x600/filters:no_upscale()/pic613496.jpg',
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
    url: 'https://uc1d68121a4b0777bcb0241defbe.previews.dropboxusercontent.com/p/thumb/AA7tthMGo3EhoqOhKul1I3AeSssSboXfoGEjfdydUKzExkwRfwLZB_y7jqtlTg_wZHYZFdZl8c2rYgF9qxCp3xYRZccZhlRrPbnIhv2lD_TqmmeZjXYTataHAvrAk_13bn4QTnYCKpyxPuwW3cA1Cb_xknyN6BVyKwsGVsFurwq9WWLpF80-UlerFEhIZzz926gUBsYUvtiBmmRF87YjOR_desvXhjh13x5uRcugGNJ8GWy9tnU0Qwzx25FtUTM-7Yv6KOTOvBp4-tF3scvZsn8LG9Oa01C7VtQ-3-1NKqmLVFatrU0JY8e-5EMqFZpEaMKTnUuYG7wLM67ui5HQ7h9o8XZwASRMaVGxALMLaZrvJ9izURaqeJnALGo-uVhnt6ehgicbrQBDi6UqMK7R4jW4/p.jpeg',
    rules: ''
  }, {
    name: 'Endless Darkness',
    url: 'https://previews.dropbox.com/p/thumb/AA4t-jU_UatCJkyc-Zx16yJ9cNHRgj_uWeAaKfc5vwc8l3XJHQOafIZZCC_wKiOhD3oJseUO76MfuzO5cU_VTO8mskALxUOi1o4p42HJz2-tFjzATKokj1_SvqZjfYa1RKuwYsLU1dDSf6ns-1CNB1lM0YqNiDA1P1cH7WadbBZN7xaPcBfE4MQfBZTzDZxMHFxPMxjJw87xx4brEkzkVFB08xwdiGdS4Pskf7rJV-16XOHRLWQ3fO47nc9mqXNYperjiZ8YlMmE2lJZkfR4lP6x-kZ925xrS0K_apseskDDbCaItbgTFqq6HcSh7fpACOzf1e2xQXoRdUspDwnSZcL90kpaQ6fwtsHcoaEzfIS9QQ/p.jpeg',
    rules: ''
  }, {
    name: 'Dragon King',
    url: 'https://previews.dropbox.com/p/thumb/AA4hRVttAogz0k6khPkawCEy16QKt9AmGAULoyzW8eSek2S32GyE1Tw5xYdKr0xKSP1YU5s4p5GfbdwXGbR5mBuRFlFgHJJT_vzERklxMUA0AAoHVnW5MeIsBdDahWBOG6qQeeUuAU9VpZRP_ucVHJVp6lCBy4kypj0n6Ykg-P7EFg-8R57ZkEahVwPBajvsLrMb9Nmjkb5LtSKvhLLFDPcdugXeFhn8I47XkC1FzSfQl27_rvNlGCFQSIz9SKP2EKvU5idFO5fslZjk6GiIIXxJ8w12HTksMxRrCacqbP4XsIsuE4rXtY4zV-xFCruwxE4b_Lk5PYnIG_40UjOwejm8Du_w8Qf8n1YywMBBt5TxzQ/p.jpeg',
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
    url: 'https://previews.dropbox.com/p/thumb/AA4DfBtCEvcIvdH4H_u9lAO9LvFfZnenkjis0n_s4SuRJ-LUtJ4nAAyGpMJVFHkgEWJmn0YwoV-MbxOXBLyqZyyX9WFzhqedApNltgG8mHYXIzIxHss7KImQT65geJJUZwMGYqlfoN6QWy9xj_EJoK4r-JAKYjpzmH_iMfWNOI606paaOi5LZFweoqcAyJPE--PiGgZjZoUo_Kcfm8x2BiqKnq_HR_I4fH2F20RkK4SUm4AuPb3bUHAReZU9zpYU6R8jz2FF9EO55MGx8xo2Z5HAQcSJGqbgCnXQ05KW7rI-y7iFznCsf1cAqoUycrWYBLVmHWttHgSq2kpGTvH7aiepEFrtkPhOMZgWzXCE7nZspA/p.jpeg',
    rules: ''
  }, {
    name: 'Demon Lord',
    url: 'https://previews.dropbox.com/p/thumb/AA4yYe9Q7sLrf-vBH5TEyfSgnAW1gCgSeUgZAXEKMdmT_ip9MXpUOxNmJf2eK9PBcwiaDyJ5qEGH9DDL74PbMclCgdJ6jdysyFPxNZcTWLyD4a1pmkwerkZBM0cSNrWciAmLj-0DFN61J3EWfbUIQGQXZqkBisYISexwIUnlaOLTiFXtmv5miaRKjNDICEXTINfCsvJpTexQOwQqCouW5go7J-y-A2SKNWl-mXrrQQdSA5HvcubRLXTmgTZ6rTtnrhoso6yYVBuUlXBYMcuLNnB396M3wlYCgZ4aGY4CuEkRSWB70q9MrkPtiQ5QCzrugJ1dvfLSb-3rIR6VaYrIUP1ipT0tI1hVJJDKtSXdz0Rezw/p.jpeg',
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
    url: 'https://previews.dropbox.com/p/thumb/AA53FyKIfvZ8sGwN2m9FrTnqGKEJtvaXqiHYqz8XftIV6xR7sNKUtYuBpjdEeIe-KqISJw3-PmFYhzBq67CM1U8CCLZxbGg61iAyZdcI9znMc8h1CE7iTY13FFMK-Sy7xCslSQFD0yQNOhXFwNQ0vcWOMsDQjhT7sxdhIVXlC8G38j0c2qFUfj62xtLBrv_Fpan5KkX2VOE134HezT_IuC41L5j6yX3N2hWq3GzP-IY3fCAp39bHuZGjJ2BKN5UAIk-Fs_yrEbnP3PbzFNdpgKWMb2drI29gBEr6FLBxUmt6oPpfaL-PRYhqgBkQ-NFx063-ICJs3YxMqLjsB2qKr-spbZZs-41lO1kruzP3ufjIuA/p.jpeg',
    rules: ''
  }

]
export default endings