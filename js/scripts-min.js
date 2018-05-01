$(document).ready(function () {
    $('#sticky').scrollToFixed();
});

function wait(ms)
{
var d1 = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d1 < ms);
}

function move() {
    var elem = document.getElementById("loadingBar");   
    var width = 1;
    var id = setInterval(frame, 35);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
    return('done');
  }

$('#form').submit(function(e) {
    e.preventDefault();
    $("#loader").slideDown("fast");
    move();
    setTimeout( function() {
        const modal = document.getElementById('modal');
        modal.classList.add('modal-active');
    }, 4000);     
});



document.getElementById('modal-close').addEventListener("click", modalClose);

function modalClose() {
    const closeButton = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    modal.classList.remove('modal-active');
}

const continent = [
    {countryCode: "AD", countryText: "Europe"},
    {countryCode: "AE", countryText: "Asia"},
    {countryCode: "AF", countryText: "Asia"},
    {countryCode: "AG", countryText: "North America"},
    {countryCode: "AI", countryText: "North America"},
    {countryCode: "AL", countryText: "Europe"},
    {countryCode: "AM", countryText: "Asia"},
    {countryCode: "AN", countryText: "North America"},
    {countryCode: "AO", countryText: "Africa"},
    {countryCode: "AQ", countryText: "Antarctica"},
    {countryCode: "AR", countryText: "Argentinian"},
    {countryCode: "AS", countryText: "Australia"},
    {countryCode: "AT", countryText: "Austrian"},
    {countryCode: "AU", countryText: "Australian"},
    {countryCode: "AW", countryText: "North America"},
    {countryCode: "AZ", countryText: "Asia"},
    {countryCode: "BA", countryText: "Europe"},
    {countryCode: "BB", countryText: "North America"},
    {countryCode: "BD", countryText: "Asia"},
    {countryCode: "BE", countryText: "Belgian"},
    {countryCode: "BF", countryText: "Africa"},
    {countryCode: "BG", countryText: "Bulgarian"},
    {countryCode: "BH", countryText: "Asia"},
    {countryCode: "BI", countryText: "Africa"},
    {countryCode: "BJ", countryText: "Africa"},
    {countryCode: "BM", countryText: "North America"},
    {countryCode: "BN", countryText: "Asia"},
    {countryCode: "BO", countryText: "Bolivian"},
    {countryCode: "BR", countryText: "Brazilian"},
    {countryCode: "BS", countryText: "North America"},
    {countryCode: "BT", countryText: "Asia"},
    {countryCode: "BW", countryText: "Africa"},
    {countryCode: "BY", countryText: "Europe"},
    {countryCode: "BZ", countryText: "North America"},
    {countryCode: "CA", countryText: "Canadians"},
    {countryCode: "CC", countryText: "Asia"},
    {countryCode: "CD", countryText: "Africa"},
    {countryCode: "CF", countryText: "Africa"},
    {countryCode: "CG", countryText: "Africa"},
    {countryCode: "CH", countryText: "Swiss"},
    {countryCode: "CI", countryText: "Africa"},
    {countryCode: "CK", countryText: "Australia"},
    {countryCode: "CL", countryText: "Chilean"},
    {countryCode: "CM", countryText: "Africa"},
    {countryCode: "CN", countryText: "Chinese"},
    {countryCode: "CO", countryText: "Colombian"},
    {countryCode: "CR", countryText: "Costa Rican"},
    {countryCode: "CU", countryText: "North America"},
    {countryCode: "CV", countryText: "Africa"},
    {countryCode: "CX", countryText: "Asia"},
    {countryCode: "CY", countryText: "Asia"},
    {countryCode: "CZ", countryText: "Czech"},
    {countryCode: "DE", countryText: "German"},
    {countryCode: "DJ", countryText: "Africa"},
    {countryCode: "DK", countryText: "Danish"},
    {countryCode: "DM", countryText: "North America"},
    {countryCode: "DO", countryText: "North America"},
    {countryCode: "DZ", countryText: "Africa"},
    {countryCode: "EC", countryText: "Ecuadorian"},
    {countryCode: "EE", countryText: "Europe"},
    {countryCode: "EG", countryText: "Africa"},
    {countryCode: "EH", countryText: "Africa"},
    {countryCode: "ER", countryText: "Africa"},
    {countryCode: "ES", countryText: "Spanish"},
    {countryCode: "ET", countryText: "Africa"},
    {countryCode: "FI", countryText: "Finnish"},
    {countryCode: "FJ", countryText: "Australia"},
    {countryCode: "FK", countryText: "South America"},
    {countryCode: "FM", countryText: "Australia"},
    {countryCode: "FO", countryText: "Europe"},
    {countryCode: "FR", countryText: "French"},
    {countryCode: "GA", countryText: "Africa"},
    {countryCode: "GB", countryText: "British"},
    {countryCode: "GD", countryText: "North America"},
    {countryCode: "GE", countryText: "Asia"},
    {countryCode: "GF", countryText: "South America"},
    {countryCode: "GG", countryText: "Europe"},
    {countryCode: "GH", countryText: "Africa"},
    {countryCode: "GI", countryText: "Europe"},
    {countryCode: "GL", countryText: "North America"},
    {countryCode: "GM", countryText: "Africa"},
    {countryCode: "GN", countryText: "Africa"},
    {countryCode: "GP", countryText: "North America"},
    {countryCode: "GQ", countryText: "Africa"},
    {countryCode: "GR", countryText: "Greek"},
    {countryCode: "GS", countryText: "Antarctica"},
    {countryCode: "GT", countryText: "North America"},
    {countryCode: "GU", countryText: "Australia"},
    {countryCode: "GW", countryText: "Africa"},
    {countryCode: "GY", countryText: "South America"},
    {countryCode: "HK", countryText: "Asia"},
    {countryCode: "HN", countryText: "North America"},
    {countryCode: "HR", countryText: "Croatian"},
    {countryCode: "HT", countryText: "North America"},
    {countryCode: "HU", countryText: "Hungarian"},
    {countryCode: "ID", countryText: "Indonesian"},
    {countryCode: "IE", countryText: "Irish"},
    {countryCode: "IL", countryText: "Israeli"},
    {countryCode: "IM", countryText: "Europe"},
    {countryCode: "IN", countryText: "Indian"},
    {countryCode: "IO", countryText: "Asia"},
    {countryCode: "IQ", countryText: "Asia"},
    {countryCode: "IR", countryText: "Asia"},
    {countryCode: "IS", countryText: "Europe"},
    {countryCode: "IT", countryText: "Italian"},
    {countryCode: "JE", countryText: "Europe"},
    {countryCode: "JM", countryText: "North America"},
    {countryCode: "JO", countryText: "Asia"},
    {countryCode: "JP", countryText: "Japanese"},
    {countryCode: "KE", countryText: "Africa"},
    {countryCode: "KG", countryText: "Asia"},
    {countryCode: "KH", countryText: "Asia"},
    {countryCode: "KI", countryText: "Australia"},
    {countryCode: "KM", countryText: "Africa"},
    {countryCode: "KN", countryText: "North America"},
    {countryCode: "KP", countryText: "Asia"},
    {countryCode: "KR", countryText: "Asia"},
    {countryCode: "KW", countryText: "Asia"},
    {countryCode: "KY", countryText: "North America"},
    {countryCode: "KZ", countryText: "Asia"},
    {countryCode: "LA", countryText: "Asia"},
    {countryCode: "LB", countryText: "Asia"},
    {countryCode: "LC", countryText: "North America"},
    {countryCode: "LI", countryText: "Europe"},
    {countryCode: "LK", countryText: "Asia"},
    {countryCode: "LR", countryText: "Africa"},
    {countryCode: "LS", countryText: "Africa"},
    {countryCode: "LT", countryText: "Lithuanian"},
    {countryCode: "LU", countryText: "Europe"},
    {countryCode: "LV", countryText: "Europe"},
    {countryCode: "LY", countryText: "Africa"},
    {countryCode: "MA", countryText: "Africa"},
    {countryCode: "MC", countryText: "Europe"},
    {countryCode: "MD", countryText: "Europe"},
    {countryCode: "ME", countryText: "Europe"},
    {countryCode: "MG", countryText: "Africa"},
    {countryCode: "MH", countryText: "Australia"},
    {countryCode: "MK", countryText: "Europe"},
    {countryCode: "ML", countryText: "Africa"},
    {countryCode: "MM", countryText: "Asia"},
    {countryCode: "MN", countryText: "Asia"},
    {countryCode: "MO", countryText: "Asia"},
    {countryCode: "MP", countryText: "Australia"},
    {countryCode: "MQ", countryText: "North America"},
    {countryCode: "MR", countryText: "Africa"},
    {countryCode: "MS", countryText: "North America"},
    {countryCode: "MT", countryText: "Europe"},
    {countryCode: "MU", countryText: "Africa"},
    {countryCode: "MV", countryText: "Asia"},
    {countryCode: "MW", countryText: "Africa"},
    {countryCode: "MX", countryText: "Mexican"},
    {countryCode: "MY", countryText: "Malaysian"},
    {countryCode: "MZ", countryText: "Africa"},
    {countryCode: "NA", countryText: "Africa"},
    {countryCode: "NC", countryText: "Australia"},
    {countryCode: "NE", countryText: "Africa"},
    {countryCode: "NF", countryText: "Australia"},
    {countryCode: "NG", countryText: "Africa"},
    {countryCode: "NI", countryText: "North America"},
    {countryCode: "NL", countryText: "Europe"},
    {countryCode: "NO", countryText: "Norwegians"},
    {countryCode: "NP", countryText: "Asia"},
    {countryCode: "NR", countryText: "Australian"},
    {countryCode: "NU", countryText: "Australian"},
    {countryCode: "NZ", countryText: "New Zealanders"},
    {countryCode: "OM", countryText: "Asia"},
    {countryCode: "PA", countryText: "North Americans"},
    {countryCode: "PE", countryText: "Peruvians"},
    {countryCode: "PF", countryText: "Australians"},
    {countryCode: "PG", countryText: "Australians"},
    {countryCode: "PH", countryText: "Philippinos"},
    {countryCode: "PK", countryText: "Pakistanis"},
    {countryCode: "PL", countryText: "Polish"},
    {countryCode: "PM", countryText: "North American"},
    {countryCode: "PN", countryText: "Australian"},
    {countryCode: "PR", countryText: "Puertocan"},
    {countryCode: "PS", countryText: "Asian"},
    {countryCode: "PT", countryText: "Portuguese"},
    {countryCode: "PW", countryText: "Australian"},
    {countryCode: "PY", countryText: "South American"},
    {countryCode: "QA", countryText: "Asia"},
    {countryCode: "RE", countryText: "Africa"},
    {countryCode: "RO", countryText: "Romanian"},
    {countryCode: "RS", countryText: "Europe"},
    {countryCode: "RU", countryText: "Russian"},
    {countryCode: "RW", countryText: "Africa"},
    {countryCode: "SA", countryText: "Asia"},
    {countryCode: "SB", countryText: "Australian"},
    {countryCode: "SC", countryText: "Africa"},
    {countryCode: "SD", countryText: "Africa"},
    {countryCode: "SE", countryText: "Swedish"},
    {countryCode: "SG", countryText: "Asia"},
    {countryCode: "SH", countryText: "Africa"},
    {countryCode: "SI", countryText: "Europe"},
    {countryCode: "SJ", countryText: "Europe"},
    {countryCode: "SK", countryText: "Europe"},
    {countryCode: "SL", countryText: "Africa"},
    {countryCode: "SM", countryText: "Europe"},
    {countryCode: "SN", countryText: "Africa"},
    {countryCode: "SO", countryText: "Africa"},
    {countryCode: "SR", countryText: "South America"},
    {countryCode: "ST", countryText: "Africa"},
    {countryCode: "SV", countryText: "North America"},
    {countryCode: "SY", countryText: "Asia"},
    {countryCode: "SZ", countryText: "Africa"},
    {countryCode: "TC", countryText: "North America"},
    {countryCode: "TD", countryText: "Africa"},
    {countryCode: "TF", countryText: "Antarctica"},
    {countryCode: "TG", countryText: "Africa"},
    {countryCode: "TH", countryText: "Thai"},
    {countryCode: "TJ", countryText: "Asia"},
    {countryCode: "TK", countryText: "Australia"},
    {countryCode: "TM", countryText: "Asia"},
    {countryCode: "TN", countryText: "Africa"},
    {countryCode: "TO", countryText: "Australia"},
    {countryCode: "TR", countryText: "Turkish"},
    {countryCode: "TT", countryText: "North America"},
    {countryCode: "TV", countryText: "Australia"},
    {countryCode: "TW", countryText: "Asia"},
    {countryCode: "TZ", countryText: "Africa"},
    {countryCode: "UA", countryText: "Europe"},
    {countryCode: "UG", countryText: "Africa"},
    {countryCode: "US", countryText: "Americans"},
    {countryCode: "UY", countryText: "South America"},
    {countryCode: "UZ", countryText: "Asia"},
    {countryCode: "VC", countryText: "North America"},
    {countryCode: "VE", countryText: "Venezuelan"},
    {countryCode: "VG", countryText: "North America"},
    {countryCode: "VI", countryText: "North America"},
    {countryCode: "VN", countryText: "Vietnamese"},
    {countryCode: "VU", countryText: "Australia"},
    {countryCode: "WF", countryText: "Australia"},
    {countryCode: "WS", countryText: "Australia"},
    {countryCode: "YE", countryText: "Asia"},
    {countryCode: "YT", countryText: "Africa"},
    {countryCode: "ZA", countryText: "South African"},
    {countryCode: "ZM", countryText: "Africa"},
    {countryCode: "ZW", countryText: "Africa"}
];

const currentGeo = geoplugin_countryCode();
const geoText = continent.find( text => text.countryCode === currentGeo);

$(document).ready(function() {
    $('#dynamicGeo').text(geoText.countryText);
});


