import { default as AntdNotification } from 'antd/lib/notification'
import capitalize from './capitalize'
const MESSAGE_DURATION = 3

const triggerNotification = (
  type,
  description = '[ no description ]',
  message = capitalize(type),
  duration = MESSAGE_DURATION,
  icon = null
) => {
  if (typeof window !== 'undefined') {
    return AntdNotification[type]({ description, message, duration, icon })
  } else {
    // eslint-disable-next-line
    return console.log(description)
  }
}

const error = (content) => triggerNotification('error', content)
const info = (content) => triggerNotification('info', content)
const success = (content, title) =>
  triggerNotification('success', content, title)

export { error, info, success }
