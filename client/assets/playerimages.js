var playerImgs = {
  'Kevin Martin': 'http://l.yimg.com/bt/api/res/1.2/NN7Vr0lFsVQVQ1sEzQ78JQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3843.png',
  'Dwyane Wade': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254',
  'Carmelo Anthony': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1975.png&w=350&h=254',
  'LeBron James': 'http://forums.nba-live.com/dl_mod/thumbs/3638_MIA_James_LeBron.png',
  'Kobe Bryant': 'http://www.financialnewsusa.com/wp-content/uploads/2014/12/1101.png',
  'Joakim Noah': 'http://2008-09chicagobulls.weebly.com/uploads/2/5/0/3/25039641/2762106_orig.png',
  'Pau Gasol': 'http://l.yimg.com/bt/api/res/1.2/zGHb.TGQsuQT.d_OvaJ7Kw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3513.png',
  'Antawn Jamison': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/385.png&w=350&h=254',
  'Marcus Camby': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/125.png',
  'Chris Bosh': 'http://2.bp.blogspot.com/-HU7mE29kBcQ/VNKN1t-4ALI/AAAAAAAAA3g/HnlkI60-7J4/s1600/i.png',
  'Steve Nash': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/592.png&w=350&h=254',
  'Chris Paul': 'http://forums.nba-live.com/dl_mod/thumbs/5646_LAC_Paul_Chris.png',
  'Deron Williams': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2798.png&w=350&h=254',
  'Jason Kidd': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/429.png&w=350&h=254',
  'Rajon Rondo': 'http://l.yimg.com/bt/api/res/1.2/y1bIFeYEaBgCNzAxjsJgIQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4149.png',
  'Courtney Lee': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3445.png&w=350&h=254',
  'Acie Law': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3219.png&w=350&h=254',
  'Danny Granger': 'http://www.hoopsmack.com/wp-content/uploads/2014/01/D.-Granger-headshot.png',
  'Mardy Collins': '/client/assets/images/mardy-collins.png',
  'Marcus Banks': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2165.png&w=350&h=254',
  'Marcus Haislip':'/client/assets/images/marcus-haislip.png',
  'Brian Scalabrine':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1021.png&w=350&h=254',
  'DeAndre Jordan': 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/deandre_jordan.png',
  'Brian Cook': 'http://l3.yimg.com/bt/api/res/1.2/mthACCOZ33qNOJmw1dMZNQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/3727.png',
  'Alexis Ajinca': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3410.png&w=350&h=254',
  'Josh Powell': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2197.png&w=350&h=254',
  'Sasha Vujacic': 'http://media.tumblr.com/tumblr_lknfa0R3No1qh4jcw.png',
  'Ronnie Price': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2807.png&w=350&h=254',
  'Allen Iverson': '/client/assets/images/allen-iverson.png',
  'Kyle Weaver': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3466.png&w=350&h=254',
  'Serge Ibaka': 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/serge_ibaka.png',
  'Samuel Dalembert': 'http://www.mobilesolutions.network/cms/common/cdn/wiw/who/thumb/SamuelDalembert.png',
  'Hasheem Thabeet': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4016.png&w=350&h=254',
  'Erick Dampier': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/181.png&w=350&h=254',
  'Brendan Haywood': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1000.png&w=350&h=254',
  'Kevin Durant': 'http://www.jockington.com/wp-content/uploads/2014/08/3202.png',
  'Andrew Bynum': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2748.png&w=350&h=254',
  'Gerald Wallace': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1026.png&w=350&h=254',
  'Dante Cunningham': 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3974.png&w=350&h=254',
  'Kosta Koufos': 'http://l2.yimg.com/bt/api/res/1.2/SoPOwdbKEhrcFFEqOevzcA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4485.png',
  'Roger Mason':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1721.png&w=350&h=254',
  'Jannero Pargo':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1821.png&w=350&h=254',
  'Sasha Pavlovic':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2172.png&w=350&h=254',
  'Johan Petro':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2780.png&w=350&h=254',
  'Craig Smith':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3031.png&w=350&h=254',
  'James Jones':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2009.png&w=350&h=254',
  'Al Horford':'http://a3.res.cloudinary.com/talent/image/fetch/t_face_s270/http://speakerdata.s3.amazonaws.com/photo/image/827701/i',
  'Antonio McDyess':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/530.png&w=350&h=254',
  'Jordan Hill':'http://l.yimg.com/bt/api/res/1.2/lgC2ikAugGlc6MlLgQD_Ig--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4613.png',
  'Richard Jefferson':'http://l1.yimg.com/bt/api/res/1.2/Y9DWwggYeLYaTNgkGUSYAQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3523.png',
  'Brook Lopez':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3448.png&w=350&h=254',
  'Roy Hibbert':'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3436.png&w=350&h=254'
}

module.exports = playerImgs;