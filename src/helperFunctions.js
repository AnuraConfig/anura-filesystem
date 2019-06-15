
import * as filesConst from './consts'

export function getFileName(baseName) {
    return baseName
}
export function getNameFromFile(filename) {
    return filename
}
export function getConfigVersion(filename) {
    return parseInt(filename.slice(filesConst.CONFIG_PREFIX.length, filename.length))
}