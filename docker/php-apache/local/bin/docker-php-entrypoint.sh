#!/bin/sh
set -e

# ---------- setup start ----------
# ---------- setup end ------------

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
	set -- apache2-foreground "$@"
fi

exec "$@"
