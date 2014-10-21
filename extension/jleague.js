
$(document).ready(function (){
    var home_teamname = $('#score-l').find('[id^=score-]').attr('id').slice(6);
    var away_teamname = $('#score-r').find('[id^=score-]').attr('id').slice(6);
    var home_names = $("#sbox-gamel .playerlist-box tr");
    var away_names = $("#sbox-gamer .playerlist-box tr");


    $(home_names).find('[class^=name]').attr("id", function() {
        return home_teamname + "-" + $(this).prev().text();
    });
    $(away_names).find('[class^=name]').attr("id", function() {
        return away_teamname + "-" + $(this).prev().text();
    });
    
    loadRoster(home_teamname);
    loadRoster(away_teamname);
});

function loadRoster(teamname){
    var rosterUrl = "/club/" + teamname + "/player.html";
    var roster = [];
    var xhr = $.ajax({
        url: rosterUrl,
        dataType: 'text'
    })
    .done(function(data) {

        var elements = $("<div>").html(data).find('.playerList li a');
        $(elements).find('.enName').attr("p-id", function(){
            var rosterID = teamname + "-" + $(this).prev().prev().text();
            // console.log($(this).text() + " " + rosterID);
            $("#" + rosterID).find('a').text($(this).text());
            return rosterID;
        });
    });

}

//to add
// .picon-ball a
// .goaltime.next() a
// .goalplayer
