import Plugin from '../Plugin'

const regexpArray = [/^(.*)\sjoined\sthe\sgame$/, /^(.*)\sleft\sthe\sgame$/]

export default new Plugin({
  async minecraft({ causedAt, level, message, sendToDiscord }) {
    if (causedAt !== 'Server thread' || level !== 'INFO') return

    if (regexpArray.some((regexp) => regexp.test(message)))
      await sendToDiscord(message)
  },
  discord({}) {},
})
