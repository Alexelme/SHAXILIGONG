@echo off
cd /d "%~dp0"
"D:\codex\nodejs\node.exe" serve-static.mjs >> "output-server.log" 2>> "output-server-error.log"
