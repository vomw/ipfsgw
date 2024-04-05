import { Workbox } from 'workbox-window'
import gateways from '../gateways.json'
import { Checker } from './Checker'
import { Log } from './Log'
import { loadCountly } from './metrics'

const wb = new Workbox('/sw.js')
void wb.register()

loadCountly()
const log = new Log('App index')

window.checker = new Checker()

window.checker.checkGateways(gateways).catch((err) => {
  log.error('Unexpected error')
  log.error(err)
})
