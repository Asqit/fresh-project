# Fresh Project

Template repository for creating projects with `fresh`, but instead of using `twind`, using the original `Tailwind Css`.

## Before Development

**Warning:** before you start doing anything, it is **required** to have deno runtime installed. For macOS and Linux users I have `install.sh`script, that automatically installs everything. Windows users and others (like BSD), you have to prepare the env. on your own. 

if you have the `deno` env. prepared and ready, you can continue by obtainig copy of [tailwind-cli](https://github.com/tailwindlabs/tailwindcss/releases). Mac OS and Linux can skip this process by simply running the `install.sh` script. Once you have to binary file, you should rename it to `tailwindcss` as that is specified in the `deno.json > task > start`

## Deploying

The repository contains github action specialized for deployments. It is recomended to use the action to make optimized builds. 
**Warning,** to use the deploy action, you have to update it a little to match your needs. (project title...)
