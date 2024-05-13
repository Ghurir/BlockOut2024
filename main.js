var topnav = ID("topnav");
var pages = topnav.childNodes;
var currentPageName = "";

var aboutPage = ID("About");
var sourcesPage = ID("Sources");
var toolPage = ID("BlockTool");
var trackerPage = ID("Tracker");

var contentFrame = ID("contentFrame");

oninit();

function oninit(){
	updatePage();
	addEventListener("hashchange", hashchanged);
}

function ID(id){
	return document.getElementById(id);
}

function activePage(){
	currentPageName = location.hash.replace("#","") || "About";
	
	ID(currentPageName).classList.add("active");
}

function hashchanged(event){
	updatePage();
};

function disableAllPages(){
	pages.forEach(a=>a.classList&&a.classList.remove("active"));
}

function updatePage(){
	disableAllPages();
	activePage();
	contentFrame.src = `./pages/${currentPageName}/index.html`;
}
