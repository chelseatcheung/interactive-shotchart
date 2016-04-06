var playerImgs = {
  'Kevin Martin': 'https://l.yimg.com/bt/api/res/1.2/NN7Vr0lFsVQVQ1sEzQ78JQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3843.png',
  'Dwyane Wade': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254',
  'Carmelo Anthony': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1975.png&w=350&h=254',
  'LeBron James': 'https://forums.nba-live.com/dl_mod/thumbs/3638_MIA_James_LeBron.png',
  'Kobe Bryant': 'https://www.financialnewsusa.com/wp-content/uploads/2014/12/1101.png',
  'Joakim Noah': 'https://2008-09chicagobulls.weebly.com/uploads/2/5/0/3/25039641/2762106_orig.png',
  'Pau Gasol': 'https://l.yimg.com/bt/api/res/1.2/zGHb.TGQsuQT.d_OvaJ7Kw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3513.png',
  'Antawn Jamison': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/385.png&w=350&h=254',
  'Marcus Camby': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/125.png',
  'Chris Bosh': 'https://2.bp.blogspot.com/-HU7mE29kBcQ/VNKN1t-4ALI/AAAAAAAAA3g/HnlkI60-7J4/s1600/i.png',
  'Steve Nash': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/592.png&w=350&h=254',
  'Chris Paul': 'https://forums.nba-live.com/dl_mod/thumbs/5646_LAC_Paul_Chris.png',
  'Deron Williams': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2798.png&w=350&h=254',
  'Jason Kidd': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/429.png&w=350&h=254',
  'Rajon Rondo': 'https://l.yimg.com/bt/api/res/1.2/y1bIFeYEaBgCNzAxjsJgIQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4149.png',
  'Courtney Lee': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3445.png&w=350&h=254',
  'Acie Law': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3219.png&w=350&h=254',
  'Danny Granger': 'https://www.hoopsmack.com/wp-content/uploads/2014/01/D.-Granger-headshot.png',
  'Mardy Collins': '/client/assets/images/mardy-collins.png',
  'Marcus Banks': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2165.png&w=350&h=254',
  'Marcus Haislip':'/client/assets/images/marcus-haislip.png',
  'Brian Scalabrine':'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1021.png&w=350&h=254',
  'DeAndre Jordan': 'https://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/deandre_jordan.png',
  'Brian Cook': 'https://l3.yimg.com/bt/api/res/1.2/mthACCOZ33qNOJmw1dMZNQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/3727.png',
  'Alexis Ajinca': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3410.png&w=350&h=254',
  'Josh Powell': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2197.png&w=350&h=254',
  'Sasha Vujacic': 'https://media.tumblr.com/tumblr_lknfa0R3No1qh4jcw.png',
  'Ronnie Price': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2807.png&w=350&h=254',
  'Allen Iverson': '/client/assets/images/allen-iverson.png',
  'Kyle Weaver': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3466.png&w=350&h=254',
  'Serge Ibaka': 'https://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/serge_ibaka.png',
  'Samuel Dalembert': 'https://www.mobilesolutions.network/cms/common/cdn/wiw/who/thumb/SamuelDalembert.png',
  'Hasheem Thabeet': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4016.png&w=350&h=254',
  'Erick Dampier': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/181.png&w=350&h=254',
  'Brendan Haywood': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1000.png&w=350&h=254'
}

module.exports = playerImgs;