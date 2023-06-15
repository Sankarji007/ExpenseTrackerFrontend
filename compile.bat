@echo off

set "source_folder=E:\Personal Project\ExpenseTrackerFrontend"
set "destination_folder=E:\Personal Project\ExpenseTracker\src\main\resources"
set "project_folder=E:\Personal Project\ExpenseTracker"

:run_script
cd /d "%source_folder%"
call npm run build
xcopy /E /Y "%source_folder%\build" "%destination_folder%\public"
xcopy /Y "%source_folder%\build\index.html" "%destination_folder%\templates\index.html"
cd /d "%project_folder%"
call mvn clean install
taskkill /f /im java.exe
start java -jar "E:\Personal Project\ExpenseTracker\target\SpringJWT-0.0.1-SNAPSHOT.jar"

choice /c YN /M "Do you want to run the script again? (Y/N)"
if errorlevel 2 goto end
if errorlevel 1 goto run_script

:end
