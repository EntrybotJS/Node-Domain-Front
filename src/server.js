/**
 * Script d'amorçage du sevreur
 * 2017-11-25
*/

import express from 'express'
import fs from 'fs'
import net from 'net'
import path from 'path'

const info = JSON.parse(fs.readFileSync(path.resolve("dist/config.json")))

console.log(info.server.domain)
