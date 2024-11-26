import { File } from '@cdktf/provider-local/lib/file'
import { LocalProvider } from '@cdktf/provider-local/lib/provider'
import { TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { DataJsConst } from '../.gen/providers/js/data-js-const'
import { DataJsFunctionCall } from '../.gen/providers/js/data-js-function-call'
import { DataJsProgram } from '../.gen/providers/js/data-js-program'
import { JsProvider } from '../.gen/providers/js/provider'

export class Stack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new JsProvider(this, 'provider')

    const message = new DataJsConst(this, 'message', {
      name: 'message',
      value: 'Hello, world!' as any,
    })

    const helloWorld = new DataJsFunctionCall(this, 'hello-world', {
      caller: 'console',
      function: 'log',
      args: [],
    })
    helloWorld.addOverride('args', [message.id])

    const fromCDKTF = new DataJsFunctionCall(this, 'from-cdktf', {
      caller: 'console',
      function: 'log',
      args: [],
    })
    fromCDKTF.addOverride('args', ['from CDK for Terraform!'])

    const main = new DataJsProgram(this, 'main', {
      statements: [
        message.statement,
        helloWorld.statement,
        fromCDKTF.statement,
      ],
    })

    new LocalProvider(this, 'local')

    new File(this, 'main.js', {
      filename: 'main.js',
      content: main.content,
    })
  }
}
