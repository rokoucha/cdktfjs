import { App } from 'cdktf'
import { Stack } from './stack'

const app = new App()

new Stack(app, 'jstf')

app.synth()
