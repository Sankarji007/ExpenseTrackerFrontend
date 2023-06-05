@echo off

set "source_folder=E:\Personal Project\FrontEnd\expense-tracker"
set "destination_folder=E:\Personal Project\ExpenseTracker\src\main\resources\public"

nodemon --watch "%source_folder%" --ext jsx --exec "npm run build && xcopy /E /Y \"%source_folder%\build\" \"%destination_folder%\""

choice /c YN /M "Do you want to run the script again? (Y/N)"
if errorlevel 2 goto end
if errorlevel 1 goto run_script

:end
