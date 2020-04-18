import Plugin from '../Plugin'
const regexpArray = [
  /^(.*)\swas\sshot\sby\sarrow$/,
  /^(.*)\swas\sshot\sby\s(.*)$/,
  /^(.*)\swas\sshot\sby\s(.*)\susing\s(.*)$/,
  /^(.*)\swas\spricked\sto\sdeath$/,
  /^(.*)\shugged\sa\scactus$/,
  /^(.*)\swalked\sinto\sa\scactus\swhile\strying\sto\sescape\s(.*)$/,
  /^(.*)\swas\sstabbed\sto\sdeath$/,
  /^(.*)\sdrowned$/,
  /^(.*)\sdrowned\swhilst\strying\sto\sescape\s(.*)$/,
  /^(.*)\ssuffocated\sin\sa\swall$/,
  /^(.*)\swas\ssquished\stoo\smuch$/,
  /^(.*)\sexperienced\skinetic\senergy$/,
  /^(.*)\sremoved\san\selytra\swhile\sflying$/,
  /^(.*)\sblew\sup$/,
  /^(.*)\swas\sblown\sup\sby\s(.*)$/,
  /^(.*)\swas\skilled\sby\s(.*)$/,
  /^(.*)\shit\sthe\sground\stoo\shard$/,
  /^(.*)\sfell\sfrom\sa\shigh\splace$/,
  /^(.*)\sfell\soff\sa\sladder$/,
  /^(.*)\sfell\soff\ssome\svines$/,
  /^(.*)\sfell\sout\sof\sthe\swater$/,
  /^(.*)\sfell\sinto\sa\spatch\sof\sfire$/,
  /^(.*)\sfell\sinto\sa\spatch\sof\scacti$/,
  /^(.*)\swas\sdoomed\sto\sfall\sby\s(.*)$/,
  /^(.*)\swas\sshot\soff\ssome\svines\sby\s(.*)$/,
  /^(.*)\swas\sshot\soff\sa\sladder\sby\s(.*)$/,
  /^(.*)\swas\sblown\sfrom\sa\shigh\splace\sby\s(.*)$/,
  /^(.*)\swas\ssquashed\sby\sa\sfalling\sanvil$/,
  /^(.*)\swas\ssquashed\sby\sa\sfalling\sblock$/,
  /^(.*)\swent\sup\sin\sflames$/,
  /^(.*)\sburned\sto\sdeath$/,
  /^(.*)\swas\sburnt\sto\sa\scrisp\swhilst\sfighting\s(.*)$/,
  /^(.*)\swalked\sinto\sa\sfire\swhilst\sfighting\s(.*)$/,
  /^(.*)\swent\soff\swith\sa\sbang$/,
  /^(.*)\stried\sto\sswim\sin\slava$/,
  /^(.*)\stried\sto\sswim\sin\slava\swhile\strying\sto\sescape\s(.*)$/,
  /^(.*)\swas\sstruck\sby\slightning$/,
  /^(.*)\sdiscovered\sfloor\swas\slava$/,
  /^(.*)\swas\sslain\sby\s(.*)$/,
  /^(.*)\swas\sslain\sby\s(.*)\susing\s(.*)$/,
  /^(.*)\sgot\sfinished\soff\sby\s(.*)$/,
  /^(.*)\sgot\sfinished\soff\sby\s(.*)\susing\s(.*)$/,
  /^(.*)\swas\sfireballed\sby\s(.*)$/,
  /^(.*)\swas\skilled\sby\smagic$/,
  /^(.*)\swas\skilled\sby\s(.*)\susing\smagic$/,
  /^(.*)\sstarved\sto\sdeath$/,
  /^(.*)\swas\skilled\swhile\strying\sto\shurt\s(.*)$/,
  /^(.*)\swas\simpaled\sby\s(.*)$/,
  /^(.*)\sfell\sout\sof\sthe\sworld$/,
  /^(.*)\sfell\sfrom\sa\shigh\splace\sand\sfell\sout\sof\sthe\sworld$/,
  /^(.*)\sdidn't\swant\sto\slive\sin\sthe\ssame\sworld\sas\s(.*)$/,
  /^(.*)\swithered\saway$/,
  /^(.*)\swas\spummeled\sby\s(.*)$/,
  /^(.*)\sdied$/,
]

export default new Plugin({
  async minecraft({ causedAt, level, message, sendToDiscord }) {
    if (causedAt !== 'Server thread' || level !== 'INFO') {
      return
    }

    if (regexpArray.some((regexp) => regexp.test(message)))
      await sendToDiscord(message)
  },
  discord({}) {},
})
