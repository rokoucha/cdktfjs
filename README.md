# CDKTFJS

Time to write HCL is a waste of time in life, so let's use CDK for Terraform.

Inspired from [【JavaScript × Terraform】次世代のモダン AltJS「JS.tf」の紹介](https://zenn.dev/terraform_jp/articles/jstf-introduction).

## How to build

- `git clone https://github.com/rokoucha/cdktfjs.git`
- `cd cdktfjs`
- `pnpm i`
- `pnpm run diff`
- `pnpm run deploy`
  - JS file generated in `cdktf.out/stacks/jstf/main.js`
- `pnpm run exec`
  - Run generated JS with Node.js

## License

CC0
