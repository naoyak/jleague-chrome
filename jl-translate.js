var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function (){
    var team1 = $("#sbox-gamel .playerlist-box tr").map(function() {
        var $row = $(this);
        return {
            posi: $row.find('[class^=posi]').text(),
            num: $row.find('[class^=num]').text(),
            name: $row.find('[class^=name]').text()
        };
    }).get();
    /* var team1_bench = $("#sbox-gamel .playerlist-box tr").map(function() {
        var $row = $(this);
        return {
            posi: $row.find('.posi-reserve').text(),
            num: $row.find('.num-reserve').text(),
            name: $row.find('.name-reserve').text()
        };
    }).get(); */
    team1.shift();
    team1.splice(11, 1);
    for (var i = 0; i < 18; i++)
    {
        console.log(team1[i].posi + " " + team1[i].num + " " + team1[i].name);
    }
    var teamname = $('#score-l').find('[id^=score-]').attr('id').slice(6);
    console.log(teamname);
    loadRoster(teamname);


    // team1_bench.shift();
    // alert(team1[0].posi + team1[0].num + team1[0].name);
    // alert(team1_bench[5].posi + team1_bench[5].num + team1_bench[5].name);
});

function loadRoster(team){
    var rosterUrl = "http://www.j-league.or.jp/club/" + team + "/player.html";
    //"/club/" + team + "/player.html";
    var roster;
    $.ajax({
        url: rosterUrl,
        dataType: 'html',
        done: function(data) {
            roster = $(".playerList li a span").map(function() {
                var $row = $(this);
                return {
                    posi: $row.find('.pos').text(),
                    num: $row.find('.number').text(),
                    name: $row.find('.name').text()
               // enName: $row.find('.enName').text()
           };
       }).get();
        }
    });
    console.log(roster[2].posi);
}
