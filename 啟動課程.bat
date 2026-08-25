@echo off
cd /d "%~dp0"

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm were not found.
  echo Install Node.js LTS, then double-click this file again.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo First launch: installing required packages...
  call npm.cmd install
  if errorlevel 1 (
    echo Package installation failed. Keep this window open to read the error.
    pause
    exit /b 1
  )
)

start "" cmd.exe /c "timeout /t 2 /nobreak >nul & start http://127.0.0.1:5173/"
echo Starting Agent Path. Keep this window open while using the course.
call npm.cmd run dev -- --host 127.0.0.1
