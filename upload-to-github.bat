@echo off
setlocal
cd /d "%~dp0upload-work2"
echo Uploading SUNO website to GitHub...
echo Repository: https://github.com/yangaopeng0502-png/Suno1
echo.
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if errorlevel 1 (
  echo Upload failed. If a browser login window appears, finish login and run this file again.
) else (
  echo Upload complete.
)
pause
