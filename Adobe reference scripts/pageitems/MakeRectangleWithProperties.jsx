﻿//MakeRectangleWithProperties.jsx//An InDesign JavaScript////Shows how to create a rectangle at a specific size and location.main();function main(){	mySetup();	mySnippet();	myTeardown();}function mySetup(){	var myDocument = app.documents.add();	myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;	myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;}function mySnippet(){	var myDocument = app.documents.item(0);	var myPage = myDocument.pages.item(0);	//![Make rectangle with properties.]	//Given a page "myPage", create a new rectangle and specify its size and location...	var myRectangle = myPage.rectangles.add({geometricBounds:[72, 72, 144, 144]});	//![Make rectangle with properties.]}function myTeardown(){}