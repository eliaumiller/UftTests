'updated 16/05/18 10:15
SystemUtil.Run "C:\Users\millere\AppData\Local\Microsoft\Windows\WinX\Group2\5 - Task Manager.lnk","","","open",10
Window("GUITest05_4").WinObject("Items View").WinList("Items View").Select "Items View" @@ hightlight id_;_2047473904_;_script infofile_;_ZIP::ssf1.xml_;_


Window("MINGW64:/c/dev").Restore
Window("MINGW64:/c/dev").Close
Window("Notepad").WinEditor("Edit").SetCaretPos 0,0 @@ hightlight id_;_18556872_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Notepad").WinEditor("Edit").Type "aaaaaaaaaaaaaaa" @@ hightlight id_;_18556872_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Notepad").WinMenu("Menu").Select "File;Save As...	Ctrl+Shift+S"
Window("Notepad").Dialog("Save As").WinEdit("File name:").Set "dummy" @@ hightlight id_;_792266_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Notepad").Dialog("Save As").WinButton("Save").Click @@ hightlight id_;_131392_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Notepad").WinMenu("Menu").Select "File;Exit"
