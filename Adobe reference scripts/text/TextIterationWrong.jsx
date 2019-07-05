﻿//TextIterationWrong.jsx//An InDesign JavaScript////Shows how *not* to iterate through text.main();function main(){    mySetup();    mySnippet();    myTeardown();}function mySetup(){	//Create an example document.	var myDocument = app.documents.add();	var myPage = app.activeWindow.activePage;	//Create a text frame on the active page.	var myTextFrame = myPage.textFrames.add();	//Set the bounds of the text frame.	myTextFrame.geometricBounds = myGetBounds(myDocument, myPage);	var myString = "Paragraph 1.\rDelete this paragraph.\rParagraph 2.\rParagraph 3.\rParagraph 4.\rParagraph 5.\rDelete this paragraph.\rParagraph 6.\r";	myTextFrame.contents = myString;}function mySnippet(){	//![Text iteration wrong.]	var myDocument = app.activeDocument;	var myStory = myDocument.stories.item(0);	//The following for loop will fail to format all of the paragraphs.	for(var myParagraphCounter = 0; myParagraphCounter < myStory.paragraphs.length; myParagraphCounter ++){		if(myStory.paragraphs.item(myParagraphCounter).words.item(0).contents == "Delete"){			myStory.paragraphs.item(myParagraphCounter).remove();		}		else{			myStory.paragraphs.item(myParagraphCounter).pointSize = 24;		}	}	//![Text iteration wrong.]}function myTeardown(){}function myGetBounds(myDocument, myPage){	var myPageWidth = myDocument.documentPreferences.pageWidth;	var myPageHeight = myDocument.documentPreferences.pageHeight	if(myPage.side == PageSideOptions.leftHand){		var myX2 = myPage.marginPreferences.left;		var myX1 = myPage.marginPreferences.right;	}	else{		var myX1 = myPage.marginPreferences.left;		var myX2 = myPage.marginPreferences.right;	}	var myY1 = myPage.marginPreferences.top;	var myX2 = myPageWidth - myX2;	var myY2 = myPageHeight - myPage.marginPreferences.bottom;	return [myY1, myX1, myY2, myX2];}