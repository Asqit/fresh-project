#!/usr/bin/bash
# Author: Ondřej Tuček
# Date: 6.7.2023
# Description: shell script, that prepares envinroment

function fetch_deno {
    echo "Fetching deno install script"
    curl -fsSL https://deno.land/x/install/install.sh | sh

    deno_path='export DENO_INSTALL="/home/andrew/.deno"'
    final_path='export PATH="$DENO_INSTALL/bin:$PATH"'

    if [ $SHELL == "/usr/bin/zsh" ]; then
        echo "Updating path for zsh"
        echo $deno_path >> ~/.zshrc
        echo $final_path >> ~/.zshrc
    else
        echo "Updating path for bash"
        echo $deno_path >> ~/.bashrc
        echo $final_path >> ~/.bashrc
    fi
}

if ! [ -x "$(command -v deno)" ]; then
    echo "Installing deno runtime"
    fetch_deno
fi

sh fetch_tailwind.sh

