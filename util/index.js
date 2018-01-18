import { extname } from 'path'

exports.platformCheck = fileName => {
  
  const extension = extname(fileName).split('.')[1]

  if (extension == 'dmg') {
    return 'dmg'
  }

  const directCache = ['exe', 'rpm', 'deb', 'AppImage']
  const index = directCache.indexOf(extension)

  if (index > -1) {
    return directCache[index]
  }

  return false
}