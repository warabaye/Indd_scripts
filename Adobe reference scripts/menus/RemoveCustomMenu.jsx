﻿//RemoveCustomMenu.jsx//An InDesign JavaScript////Shows how to remove the menu customization applied by CustomMenu.jsx.//You might have to force InDesign to redraw the menu (by switching//out of the application and back again) to make the menu item disappear.//![Remove custom menu.]var myMainMenu = app.menus.item("$ID/Main");try{	var mySpecialFontMenu = myMainMenu.submenus.item("Kozuka Mincho Pro");	mySpecialFontMenu.remove();}catch(myError){}//![Remove custom menu.]