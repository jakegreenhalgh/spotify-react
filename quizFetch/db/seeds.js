const fetch = require('node-fetch')

const trialCountryId = {
  
"AD" : null,


"AE" : "37i9dQZEVXbM4UZuIrvHvA",


"AF" : null,


"AG" : null,


"AI" : null,


"AL" : null,


"AM" : null,


"AO" : null,


"AQ" : null,


"AR" : "37i9dQZEVXbMMy2roB9myp",


"AS" : null,


"AT" : "37i9dQZEVXbKMzVsSGQ49S",


"AU" : "37i9dQZEVXbJPcfkRz0wJ0",


"AW" : null,


"AX" : null,


"AZ" : null,


//B


"BA" : null,


"BB" : null,


"BD" : null,


"BE" : "37i9dQZEVXbJNSeeHswcKB",


"BF" : null,


"BG" : "37i9dQZEVXbNfM2w2mq1B8",


"BH" : null,


"BI" : null,


"BJ" : null,


"BL" : null,


"BM" : null,


"BN" : null,


"BO" : "37i9dQZEVXbJqfMFK4d691",


"BQ" : null,


"BR" : "37i9dQZEVXbMXbN3EUUhlg",


"BS" : null,


"BT" : null,


"BV" : null,


"BW" : null,


"BY" : "37i9dQZEVXbIYfjSLbWr4V",


"BZ" : null,


//C


"CA" : "37i9dQZEVXbKj23U1GF4IR",


"CC" : null,


"CD" : null,


"CF" : null,


"CG" : null,


"CH" : "37i9dQZEVXbJiyhoAPEfMK",


"CI" : null,


"CK" : null,


"CL" : "37i9dQZEVXbL0GavIqMTeb",


"CM" : null,


"CN" : null,


"CO" : "37i9dQZEVXbOa2lmxNORXQ",


"CR" : "37i9dQZEVXbMZAjGMynsQX",


"CU" : null,


"CV" : null,


"CW" : null,


"CX" : null,


"CY" : null,


"CZ" : "37i9dQZEVXbIP3c3fqVrJY",


//D


"DE" : "37i9dQZEVXbJiZcmkrIHGU",


"DJ" : null,


"DK" : "37i9dQZEVXbL3J0k32lWnN",


"DM" : null,


"DO" : "37i9dQZEVXbKAbrMR8uuf7",


"DZ" : null,


//E


"EC" : "37i9dQZEVXbJlM6nvL1nD1",


"EE" : "37i9dQZEVXbLesry2Qw2xS",


"EG" : "37i9dQZEVXbLn7RQmT5Xv2",


"EH" : null,


"ER" : null,


"ES" : "37i9dQZEVXbNFJfN1Vw8d9",


"ET" : null,


//F


"FI" : "37i9dQZEVXbMxcczTSoGwZ",


"FJ" : null,


"FK" : null,

"FM" : null,


"FO" : null,


"FR" : "37i9dQZEVXbIPWwFssbupI",


//G


"GA" : null,


"GB" : "37i9dQZEVXbLnolsZ8PSNw",


"GD" : null,


"GE" : null,


"GF" : null,


"GG" : null,


"GH" : null,


"GI" : null,


"GL" : null,


"GM" : null,


"GN" : null,


"GP" : null,


"GQ" : null,


"GR" : "37i9dQZEVXbJqdarpmTJDL",


"GS" : null,


"GT" : "37i9dQZEVXbLy5tBFyQvd4",


"GU" : null,


"GW" : null,


"GY" : null,


//H


"HK" : "37i9dQZEVXbLwpL8TjsxOG",


"HM" : null,


"HN" : "37i9dQZEVXbJp9wcIM9Eo5",


"HR" : null,


"HT" : null,


"HU" : "37i9dQZEVXbNHwMxAkvmF8",


//I


"ID" : "37i9dQZEVXbObFQZ3JLcXt",


"IE" : "37i9dQZEVXbKM896FDX8L1",


"IL" : "37i9dQZEVXbJ6IpvItkve3",


"IM" : null,


"IN" : "37i9dQZEVXbLZ52XmnySJg",


"IO" : null,


"IQ" : null,


"IR" : null,


"IS" : "37i9dQZEVXbKMzVsSGQ49S",


"IT" : "37i9dQZEVXbIQnj7RRhdSX",


//J


"JE" : null,


"JM" : null,


"JO" : null,


"JP" : "37i9dQZEVXbKXQ4mDTEBXq",


//K


"KE" : null,


"KG" : null,


"KH" : null,


"KI" : null,


"KM" : null,


"KN" : null,


"KP" : null,


"KR" : "37i9dQZEVXbNxXF4SkHj9F",


"KW" : null,


"KY" : null,


"KZ" : "37i9dQZEVXbM472oKPNKzS",


//L


"LA" : null,


"LB" : null,


"LC" : null,


"LI" : null,


"LK" : null,


"LR" : null,


"LS" : null,


"LT" : "37i9dQZEVXbMx56Rdq5lwc",


"LU" : "37i9dQZEVXbKGcyg6TFGx6",


"LV" : "37i9dQZEVXbJWuzDrTxbKS",


//M


"MA" : "37i9dQZEVXbJU9eQpX8gPT",


"MC" : null,


"MD" : null,


"ME" : null,


"MF" : null,


"MG" : null,


"MH" : null,


"MK" : null,


"ML" : null,


"MM" : null,


"MN" : null,


"MO" : null,


"MP" : null,


"MQ" : null,


"MR" : null,


"MS" : null,


"MT" : null,


"MU" : null,


"MV" : null,


"MW" : null,


"MX" : "37i9dQZEVXbO3qyFxbkOE1",


"MY" : "37i9dQZEVXbJlfUljuZExa",


"MZ" : null,


//N


"NA" : null,


"NC" : null,


"NE" : null,


"NF" : null,


"NG" : "37i9dQZEVXbKY7jLzlJ11V",


"NI" : "37i9dQZEVXbISk8kxnzfCq",


"NL" : "37i9dQZEVXbKCF6dqVpDkS",


"NO" : "37i9dQZEVXbJvfa0Yxg7E7",


"NP" : null,


"NR" : null,


"NU" : null,


"NZ" : "37i9dQZEVXbM8SIrkERIYl",


//O


"OM" : null,


//P


"PA" : "37i9dQZEVXbKypXHVwk1f0",


"PE" : "37i9dQZEVXbJfdy5b0KP7W",


"PF" : null,


"PG" : null,


"PH" : "37i9dQZEVXbNBz9cRCSFkY",


"PK" : "37i9dQZEVXbJkgIdfsJyTw",


"PL" : "37i9dQZEVXbN6itCcaL3Tt",


"PM" : null,


"PN" : null,


"PR" : null,


"PS" : null,


"PT" : "37i9dQZEVXbKyJS56d1pgi",


"PW" : null,


"PY" : "37i9dQZEVXbNOUPGj7tW6T",


//Q


"QA" : null,


//R


"RE" : null,


"RO" : "37i9dQZEVXbNZbJ6TZelCq",


"RS" : null,


"RU" : null,


"RW" : null,


//S


"SA" : "37i9dQZEVXbLrQBcXqUtaC",


"SB" : null,


"SC" : null,


"SD" : null,


"SE" : "37i9dQZEVXbLoATJ81JYXz",


"SG" : "37i9dQZEVXbK4gjvS1FjPY",


"SH" : null,


"SI" : null,


"SJ" : null,


"SK" : "37i9dQZEVXbMwW10JmAnzE",


"SL" : null,


"SM" : null,


"SN" : null,


"SO" : null,


"SR" : null,


"SS" : null,


"ST" : null,


"SV" : "37i9dQZEVXbLxoIml4MYkT",


"SX" : null,


"SY" : null,


"SZ" : null,


//T


"TC" : null,


"TD" : null,


"TF" : null,


"TG" : null,


"TH" : "37i9dQZEVXbMnz8KIWsvf9",


"TJ" : null,


"TK" : null,


"TL" : null,


"TM" : null,


"TN" : null,


"TO" : null,


"TR" : "37i9dQZEVXbIVYVBNw9D5K",


"TT" : null,


"TW" : "37i9dQZEVXbMnZEatlMSiu",


"TZ" : null,


//U


"UA" : "37i9dQZEVXbKkidEfWYRuD",


"UG" : null,


"UM" : null,


"US" : "37i9dQZEVXbLRQDuF5jeBp",


"UY" : "37i9dQZEVXbMJJi3wgRbAy",


"UZ" : null,


//V


"VA" : null,


"VC" : null,


"VE" : "37i9dQZEVXbNvXzC8A6ysJ",


"VG" : null,


"VI" : null,


"VN" : "37i9dQZEVXbLdGSmz6xilI",


"VU" : null,


//W


"WF" : null,


"WS" : null,


//Y


"YE" : null,


"YT" : null,


//Z


"ZA" : "37i9dQZEVXbMH2jvi6jvjk",


"ZM" : null,


"ZW" : null
}

const emptyCountryChart = {
  
  "AD" : null,
  
  
  "AE" : null,
  
  
  "AF" : null,
  
  
  "AG" : null,
  
  
  "AI" : null,
  
  
  "AL" : null,
  
  
  "AM" : null,
  
  
  "AO" : null,
  
  
  "AQ" : null,
  
  
  "AR" : null,
  
  
  "AS" : null,
  
  
  "AT" : null,
  
  
  "AU" : null,
  
  "AW" : null,
  
  
  "AX" : null,
  
  
  "AZ" : null,
  
  
  //B
  
  
  "BA" : null,
  
  
  "BB" : null,
  
  
  "BD" : null,
  
  
  "BE" : null,
  
  
  "BF" : null,
  
  
  "BG" : null,
  
  
  "BH" : null,
  
  
  "BI" : null,
  
  
  "BJ" : null,
  
  
  "BL" : null,
  
  
  "BM" : null,
  
  
  "BN" : null,
  
  
  "BO" : null,
  
  
  "BQ" : null,
  
  
  "BR" : null,
  
  
  "BS" : null,
  
  
  "BT" : null,
  
  
  "BV" : null,
  
  
  "BW" : null,
  
  
  "BY" : null,
  
  
  "BZ" : null,
  
  
  //C
  
  
  "CA" : null,
  
  
  "CC" : null,
  
  
  "CD" : null,
  
  
  "CF" : null,
  
  
  "CG" : null,
  
  
  "CH" : null,
  
  
  "CI" : null,
  
  
  "CK" : null,
  
  
  "CL" : null,
  
  
  "CM" : null,
  
  
  "CN" : null,
  
  
  "CO" : null,
  
  
  "CR" : null,
  
  
  "CU" : null,
  
  
  "CV" : null,
  
  
  "CW" : null,
  
  
  "CX" : null,
  
  
  "CY" : null,
  
  
  "CZ" : null,
  
  
  //D
  
  
  "DE" : null,
  
  
  "DJ" : null,
  
  
  "DK" : null,
  
  
  "DM" : null,
  
  
  "DO" : null,
  
  
  "DZ" : null,
  
  
  //E
  
  
  "EC" : null,
  
  
  "EE" : null,
  
  
  "EG" : null,
  
  
  "EH" : null,
  
  
  "ER" : null,
  
  
  "ES" : null,
  
  
  "ET" : null,
  
  
  //F
  
  
  "FI" : null,
  
  
  "FJ" : null,
  
  
  "FK" : null,
  
  "FM" : null,
  
  
  "FO" : null,
  
  
  "FR" : null,
  
  
  //G
  
  
  "GA" : null,
  
  
  "GB" : null,
  
  
  "GD" : null,
  
  
  "GE" : null,
  
  
  "GF" : null,
  
  
  "GG" : null,
  
  
  "GH" : null,
  
  
  "GI" : null,
  
  
  "GL" : null,
  
  
  "GM" : null,
  
  
  "GN" : null,
  
  
  "GP" : null,
  
  
  "GQ" : null,
  
  
  "GR" : null,
  
  
  "GS" : null,
  
  
  "GT" : null,
  
  
  "GU" : null,
  
  
  "GW" : null,
  
  
  "GY" : null,
  
  
  //H
  
  
  "HK" : null,
  
  
  "HM" : null,
  
  
  "HN" : null,
  
  
  "HR" : null,
  
  
  "HT" : null,
  
  
  "HU" : null,
  
  
  //I
  
  
  "ID" : null,
  
  
  "IE" : null,
  
  
  "IL" : null,
  
  
  "IM" : null,
  
  
  "IN" : null,
  
  
  "IO" : null,
  
  
  "IQ" : null,
  
  
  "IR" : null,
  
  
  "IS" : null,
  
  
  "IT" : null,
  
  
  //J
  
  
  "JE" : null,
  
  
  "JM" : null,
  
  
  "JO" : null,
  
  
  "JP" : null,
  
  
  //K
  
  
  "KE" : null,
  
  
  "KG" : null,
  
  
  "KH" : null,
  
  
  "KI" : null,
  
  
  "KM" : null,
  
  
  "KN" : null,
  
  
  "KP" : null,
  
  
  "KR" : null,
  
  
  "KW" : null,
  
  
  "KY" : null,
  
  
  "KZ" : null,
  
  
  //L
  
  
  "LA" : null,
  
  
  "LB" : null,
  
  
  "LC" : null,
  
  
  "LI" : null,
  
  
  "LK" : null,
  
  
  "LR" : null,
  
  
  "LS" : null,
  
  
  "LT" : null,
  
  "LU" : null,
  
  
  "LV" : null,
  
  
  //M
  
  
  "MA" : null,
  
  
  "MC" : null,
  
  
  "MD" : null,
  
  
  "ME" : null,
  
  
  "MF" : null,
  
  
  "MG" : null,
  
  
  "MH" : null,
  
  
  "MK" : null,
  
  
  "ML" : null,
  
  
  "MM" : null,
  
  
  "MN" : null,
  
  
  "MO" : null,
  
  
  "MP" : null,
  
  
  "MQ" : null,
  
  
  "MR" : null,
  
  
  "MS" : null,
  
  
  "MT" : null,
  
  
  "MU" : null,
  
  
  "MV" : null,
  
  
  "MW" : null,
  
  
  "MX" : null,
  
  
  "MY" : null,
  
  
  "MZ" : null,
  
  
  //N
  
  
  "NA" : null,
  
  
  "NC" : null,
  
  
  "NE" : null,
  
  
  "NF" : null,
  
  
  "NG" : null,
  
  
  "NI" : null,
  
  
  "NL" : null,
  
  
  "NO" : null,
  
  
  "NP" : null,
  
  
  "NR" : null,
  
  
  "NU" : null,
  
  
  "NZ" : null,
  
  
  //O
  
  
  "OM" : null,
  
  
  //P
  
  
  "PA" : null,
  
  
  "PE" : null,
  
  
  "PF" : null,
  
  
  "PG" : null,
  
  
  "PH" : null,
  
  
  "PK" : null,
  
  
  "PL" : null,
  
  
  "PM" : null,
  
  
  "PN" : null,
  
  
  "PR" : null,
  
  
  "PS" : null,
  
  
  "PT" : null,
  
  
  "PW" : null,
  
  
  "PY" : null,
  
  
  //Q
  
  
  "QA" : null,
  
  
  //R
  
  
  "RE" : null,
  
  
  "RO" : null,
  
  
  "RS" : null,
  
  
  "RU" : null,
  
  
  "RW" : null,
  
  
  //S
  
  
  "SA" : null,
  
  
  "SB" : null,
  
  
  "SC" : null,
  
  
  "SD" : null,
  
  
  "SE" : null,
  
  
  "SG" : null,
  
  
  "SH" : null,
  
  
  "SI" : null,
  
  
  "SJ" : null,
  
  
  "SK" : null,
  
  
  "SL" : null,
  
  
  "SM" : null,
  
  
  "SN" : null,
  
  
  "SO" : null,
  
  
  "SR" : null,
  
  
  "SS" : null,
  
  
  "ST" : null,
  
  
  "SV" : null,
  
  
  "SX" : null,
  
  
  "SY" : null,
  
  
  "SZ" : null,
  
  
  //T
  
  
  "TC" : null,
  
  
  "TD" : null,
  
  
  "TF" : null,
  
  
  "TG" : null,
  
  
  "TH" : null,
  
  
  "TJ" : null,
  
  
  "TK" : null,
  
  
  "TL" : null,
  
  
  "TM" : null,
  
  
  "TN" : null,
  
  
  "TO" : null,
  
  
  "TR" : null,
  
  
  "TT" : null,
  
  
  "TW" : null,
  
  
  "TZ" : null,
  
  
  //U
  
  
  "UA" : null,
  
  
  "UG" : null,
  
  
  "UM" : null,
  
  
  "US" : null,
  
  
  "UY" : null,
  
  
  "UZ" : null,
  
  
  //V
  
  
  "VA" : null,
  
  
  "VC" : null,
  
  
  "VE" : null,
  
  
  "VG" : null,
  
  
  "VI" : null,
  
  
  "VN" : null,
  
  
  "VU" : null,
  
  
  //W
  
  
  "WF" : null,
  
  
  "WS" : null,
  
  
  //Y
  
  
  "YE" : null,
  
  
  "YT" : null,
  
  
  //Z
  
  
  "ZA" : null,
  
  
  "ZM" : null,
  
  
  "ZW" : null
  }

let token = "BQAOtbVE8HFF6uSYkoMDjbp8qd9cvanmdgGpohyaZv6orIWPn2qTNBu77sFWKllV6bv7uX1Ar1IwjIPimngDJyPB8yP0wWLgEhlNhmgyih2lT5Et5ot-R_S9UH-blyH-Cwz0K_4ZcEQLdwludxQ413KP5b216cs1Zhow8_GjVQUMb1k"

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const top10Fetch =  (country) => {
        const playlistId = trialCountryId[country]
        console.log(country);
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(toptracks => toptracks.tracks.items.slice(0, 20))
  }

  const quizAnswerFetch =  (id) => {
    return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(top10 => [top10])
}
const everySong = []
const getIndividualSongsFromFetch = (countryId, songsFetch)=>{
  let songs =[] 
 for (let index = 0; index < songsFetch.length; index++) {
  const element = songsFetch[index];
  let name = element.track.name
  let id = element.track.id
  let artistsOnSong = element.track.artists
  let artists = []
  for (let index = 0; index < artistsOnSong.length; index++) {
    const element = artistsOnSong[index];
    artists.push({"artist_id" : element.id, "name" : element.name})
  }
  songs.push({"country_id" : countryId, "song_id" : id, "rank" : index + 1, "name" : name, "artists" : artists})
  everySong.push({"country_id" : countryId, "song_id" : id, "rank" : index + 1, "name" : name, "artists" : artists})
 }
return songs
}

use plotify
db.dropDatabase();
const addAllSongs = async (countryPlaylist) => {
  timesSongInChart = {}
  timesArtistInChart = {}
  let individualSongs = []
  for(var country in countryPlaylist) {
    if (trialCountryId[country]){
    let songsToInsert = await top10Fetch(country)
    individualSongs = getIndividualSongsFromFetch(country, songsToInsert)
    for (let index = 0; index < individualSongs.length; index++) {
      const element = individualSongs[index];
      if (Object.keys(timesSongInChart).includes(element.song_id) && Object.keys(timesArtistInChart).includes(element.artists[0].artist_id)){
      timesSongInChart[element.song_id] += 1
      timesArtistInChart[element.artists[0].artist_id] += 1
    } else if (!Object.keys(timesSongInChart).includes(element.song_id) && Object.keys(timesArtistInChart).includes(element.artists[0].artist_id)){
      timesSongInChart[element.song_id] = 1
      timesArtistInChart[element.artists[0].artist_id] += 1
    } else if (Object.keys(timesSongInChart).includes(element.song_id) && !Object.keys(timesArtistInChart).includes(element.artists[0].artist_id)){
      timesSongInChart[element.song_id] += 1
      timesArtistInChart[element.artists[0].artist_id] = 1
    } else {
      timesSongInChart[element.song_id] = 1
      timesArtistInChart[element.artists[0].artist_id] = 1
    }
  }
    db.songs.insertMany(individualSongs)
  };
  }    

const sortableSongs = Object.entries(timesSongInChart)
.sort(([,a],[,b]) => b-a)
.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
const sortedSongs = [];
for (var song in sortableSongs) {
  sortedSongs.push([song, sortableSongs[song]]);
}

const sortableArtists = Object.entries(timesArtistInChart)
.sort(([,a],[,b]) => b-a)
.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
const sortedArtists = [];
for (var artist in sortableArtists) {
  sortedArtists.push([artist, sortableArtists[artist]]);
}

  db.songchart.insertMany(sortedSongs.slice(0, 60))
  db.artistchart.insertMany(sortedArtists.slice(0, 60))
  var quizAnswer = sortedSongs[Math.floor(Math.random()*60)];
  console.log(quizAnswer);

  let wrongAnswers = []
  let randomAnswers = []
  while (wrongAnswers.length < 9){
    var randomSong = sortedSongs[Math.floor(Math.random()*60)]
    let wrongAnswer = randomSong[0]
    if (!wrongAnswers.includes(wrongAnswer)) {
      let countriesSongChartsIn = {...emptyCountryChart}
      for (let index = 0; index < everySong.length; index++) {
        const element = everySong[index];
        if (element.song_id === wrongAnswer) {
          countriesSongChartsIn[element.country_id] = element.rank

        }
      }
 
      wrongAnswers.push(wrongAnswer)
      let quizSong = await quizAnswerFetch(wrongAnswer)
›      let songObject = quizSong[0]
      songObject["charts"] = countriesSongChartsIn
      randomAnswers.push(songObject)
      db.quiz.insertOne(songObject)
    }
  }
  console.log(wrongAnswers);
  shuffleArray(randomAnswers);
  randomAnswers.pop();
  console.log(randomAnswers);
  db.quiz.insertMany(randomAnswers)
  db.users.insertOne(  {"user": 1152767803,
  "quizIds": [
    "633c219c33800bb404c3bb70",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ],
  "scores": {
    "0": 1,
    "1": 4,
    "2": 5,
    "3": 7,
    "4": 7,
    "5": 4,
    "6": 3,
    "7": 2,
    "8": 0}})
}
addAllSongs(trialCountryId);


