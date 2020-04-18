import Replacers from '../Replacers'
import Plugin from '../Plugin'

const replacers = new Replacers()
  .add(
    /^(.*)\sjoined\sthe\sgame$/,
    (message, player) => `${player} がログインしたみたい。`
  )
  .add(
    /^(.*)\sleft\sthe\sgame$/,
    (message, player) => `${player} がログアウトしたみたい。`
  )

export default new Plugin({
  async minecraft({ causedAt, level, message, sendToDiscord }) {
    if (causedAt !== 'Server thread' || level !== 'INFO') return

    const newMessage = replacers.replace(message)
    if (newMessage !== false) await sendToDiscord(newMessage)
  },
  discord({}) {},
})
