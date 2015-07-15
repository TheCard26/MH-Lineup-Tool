// ==UserScript==
// @name         MutHead Lineup Creator
// @version      0.1
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @require    http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @description  Creates a lineup based on user input with MutHead.com's lineup tool.
// @author       TheCard
// @match        http://www.muthead.com/15/lineups/create
// ==/UserScript==

//We need the JQuery UI Stylesheet
$("head").append (
    '<link '
  + 'href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css" '
  + 'rel="stylesheet" type="text/css">'
);

$(document).ready(function(){
    $('#controls').append('<button id="lineupBuilder" style="background-color: #006bb2; color: white; height: 26px; width: 75px; padding-left: 5px; position: relative; font-size: 15px; border:none;">Build</button><div id="playerInput"></div>');
    
    $('#lineupBuilder').click(function(){
        $("#playerInput").html("What's your budget? <input type='number' id='budget' min='10000'><br>Do you prefer a more offensive or defensive based team? <select id='off-def'><option value='offense'>Offense</option><option value='defense'>Defense</option><option value='balanced'>Balanced</option>");
        
        $("#playerInput").dialog({
            resizable: false,
            title: "Choose Your Preferences:",
            modal: true,
            width: 1000,
            beforeClose: function() {
                //Save Input Values
                var budget = $('#budget').val();
                var offDef = $('#off-def').val();
            }
        });
    });
});
