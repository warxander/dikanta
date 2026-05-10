#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
set -a
source $SCRIPT_DIR/llama.env
set +a

$DIKANTA_LLAMA_PATH/build/bin/llama-server \
-hf $DIKANTA_HF_MODEL \
-ctk $DIKANTA_CTK -ctv $DIKANTA_CTV \
-fitc $DIKANTA_CONTEXT_SIZE -ngl 99 -cmoe --no-mmap \
-np 1 --spec-type draft-mtp --spec-draft-n-max 2 \
--temp 0.6 --top-p 0.95 --top-k 20 --min-p 0 \
--jinja --chat-template-kwargs '{"preserve_thinking":true}'
