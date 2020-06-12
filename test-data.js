import {Model} from '/model.js';
import {createDefaultBucket} from '/utils.js';

export function injectTestData() {
  Model.stored = {
    buckets: [{
      name: 'Music',
      color: '#f70',
      channelIds: [
        'UC7aHrlS_AuO_XfOrelhswXg',
        'UCpmdhW1ru6r6xIaLSbVHoHQ',
      ],
    }, {
      name: 'Animation',
      color: '#f07',
      channelIds: [
        'UCFNJrEtaD4fDe_cH6WQE9sg',
      ],
    }],
    buckets: [createDefaultBucket()],
  };
  Model.downloaded = {
    channels: {
      'UC7aHrlS_AuO_XfOrelhswXg': {
        name: 'Andrew Hulshult',
        url: 'https://www.youtube.com/channel/UC7aHrlS_AuO_XfOrelhswXg',
        iconUrl: 'https://yt3.ggpht.com/a/AATXAJyzrcsV5QMZ4J7y_FNxgQgRNDSZOE_VkdvJ_g=s48-c-k-c0xffffffff-no-rj-mo',
        videos: expandVideoData(hulshultVideos),
      },
      'UCpmdhW1ru6r6xIaLSbVHoHQ': {
        name: 'HALLEY LABS',
        url: 'https://www.youtube.com/channel/UCpmdhW1ru6r6xIaLSbVHoHQ',
        iconUrl: 'https://yt3.ggpht.com/a/AATXAJz7rfiI60zo4NDdIoCFbIrIiFOrtu-XTs9J6Q=s100-c-k-c0xffffffff-no-rj-mo',
        videos: expandVideoData(halleyLabsVideos),
      },
      'UC7dViO9ogcMViU7hYAxKjbw': {
        name: 'Kennyoung',
        url: 'https://www.youtube.com/channel/UC7dViO9ogcMViU7hYAxKjbw',
        iconUrl: 'https://yt3.ggpht.com/a/AATXAJwR7gejtbgjbCe5oIznQrUqCxcDrClFSd6GeQ=s100-c-k-c0xffffffff-no-rj-mo',
        videos: expandVideoData(kennyoungVideos),
      },
      'UCFNJrEtaD4fDe_cH6WQE9sg': {
        name: '2Snacks',
        url: 'https://www.youtube.com/channel/UCFNJrEtaD4fDe_cH6WQE9sg',
        iconUrl: 'https://yt3.ggpht.com/a/AATXAJxrfEjplU9qw150kXydc_eyv5E-t_zwhC1BCg=s48-c-k-c0xffffffff-no-rj-mo',
        videos: expandVideoData(twoSnacksVideos),
      },
    },
  };
  Model.session = {
    activeBucketName: Model.stored.buckets[0]?.name,
    editing: true,
  };
}

function expandVideoData(videos) {
  return videos.map((video, i) => ({
    ...video,
    durationSeconds: Math.ceil(Math.random() * 500),
    uploadDate: Date.now() - i * 1000000 + Math.random() * 1000000,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.url.substr(32, 11)}/hqdefault.jpg`,
  }));
}

const hulshultVideos = [
  {"name": "Nightmare Reaper Soundtrack - \"Nightmare\"", "url": "https://www.youtube.com/watch?v=KvRpSbtwlgk"},
  {"name": "DOOM? DUSK Vinyl? Pineapple on pizza? Social media questions answered!", "url": "https://www.youtube.com/watch?v=N-kyO2QtuX4"},
  {"name": "Lofi chill ambient beats to mod DUSK to", "url": "https://www.youtube.com/watch?v=KauWvLNtDWE"},
  {"name": "Prodeus - Dark Matter", "url": "https://www.youtube.com/watch?v=yhBc6ndD-u4"},
  {"name": "Type O Negative - Red Water (Christmas Mourning) Cover", "url": "https://www.youtube.com/watch?v=U72CLsaVJtM"},
  {"name": "DOOM II - Into Sandy's City Remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=gbzoTo75LyU"},
  {"name": "Amid Evil (Original Game Soundtrack)", "url": "https://www.youtube.com/watch?v=nm-lJK4yqRE&t=4s"},
  {"name": "Prodeus \"Spent Fuel\" Teaser", "url": "https://www.youtube.com/watch?v=QQyXOhdlK7w"},
  {"name": "Thank You!", "url": "https://www.youtube.com/watch?v=_YlRitWVk1E"},
  {"name": "AMID EVIL - Finality", "url": "https://www.youtube.com/watch?v=afW7Hg50iiQ"},
  {"name": "Prodeus - \"Hot Spot\" (Now on Kickstarter)", "url": "https://www.youtube.com/watch?v=kN8VAlBrg2U"},
  {"name": "AMID EVIL - Aenigmata", "url": "https://www.youtube.com/watch?v=SernBf9whR8"},
  {"name": "DUSK (Original Game Soundtrack)", "url": "https://www.youtube.com/watch?v=DKCrkg7Kcdc"},
  {"name": "DUSK - Keepers of the Gate (OST now on sale!)", "url": "https://www.youtube.com/watch?v=SvyM6ZKZx6U"},
  {"name": "AMID EVIL - God Killer", "url": "https://www.youtube.com/watch?v=47peFJiUWDI"},
  {"name": "Qtest_Music_4", "url": "https://www.youtube.com/watch?v=PgWOH08yDac"},
  {"name": "QTest3_Music_3", "url": "https://www.youtube.com/watch?v=0FyXSjfFPaA"},
  {"name": "QTest_Music_2", "url": "https://www.youtube.com/watch?v=akq37sEc4ck"},
  {"name": "QTest_Music_1", "url": "https://www.youtube.com/watch?v=b6-GvcMcp6Y"},
  {"name": "DUSK - Occultivated (Episode 3)", "url": "https://www.youtube.com/watch?v=-ACi3KGvfFE"},
  {"name": "AMID EVIL - Eventide (episode 4)", "url": "https://www.youtube.com/watch?v=aCZwDxpOhso"},
  {"name": "AMID EVIL - Distilled Chaos", "url": "https://www.youtube.com/watch?v=-AJcGpw1Swo"},
  {"name": "DUSK - Erebus", "url": "https://www.youtube.com/watch?v=ztXCawRKcLg"},
  {"name": "AMID EVIL - False Prophets", "url": "https://www.youtube.com/watch?v=_q7FhWEtF1M"},
  {"name": "Dusk - SkinWalker", "url": "https://www.youtube.com/watch?v=J0Xhlf2vNHA"},
  {"name": "Rise Of The Triad 2013 Official Soundtrack", "url": "https://www.youtube.com/watch?v=0Ok8StsuSCQ"},
  {"name": "Dusk - Mine Control", "url": "https://www.youtube.com/watch?v=g781lLsJoZQ"},
  {"name": "Dusk - Hand Cannon", "url": "https://www.youtube.com/watch?v=9u9Kf7qTUXY"},
  {"name": "Your questions, answered Pt.2", "url": "https://www.youtube.com/watch?v=YmM5FIN7oPc"},
  {"name": "Our dog can not function in a human sweater", "url": "https://www.youtube.com/watch?v=7xh0F12rxfA"},
  {"name": "Quake theme remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=Y_wiaVl1i9Q"},
  {"name": "Q&A #2 (Leave your questions in the comments)", "url": "https://www.youtube.com/watch?v=Uo1c19MMHvY"},
  {"name": "Andrew Hulshult Soundtrack Reel 2017", "url": "https://www.youtube.com/watch?v=C-WthCEA41c"},
  {"name": "Accepting the \"Fan Creation Of The Year\" award at the IGN SXSW awards for SGtMarkIV", "url": "https://www.youtube.com/watch?v=7XMiWLF90Lo"},
  {"name": "\"Dev Talk\" at fadecon 2017. Music for  DUSK, IDKFA, ROTT, and Rad Rodgers", "url": "https://www.youtube.com/watch?v=gp8ytohnzG4"},
  {"name": "Brutal Doom 64 - Theme remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=I7yxlSURxRw"},
  {"name": "Rad Rodgers - Making of Level 2 Music", "url": "https://www.youtube.com/watch?v=EH2k3rCZMoI"},
  {"name": "Dusk  - Endless (official music)", "url": "https://www.youtube.com/watch?v=eOAbv_Ey6eY"},
  {"name": "IDKFA: Full Doom remake album ( download in description)", "url": "https://www.youtube.com/watch?v=AGK1dr-Ql0w"},
  {"name": "Doom - Untitled (hell's keep) remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=cMq8FvA13UM"},
  {"name": "Doom - Facing The Spider remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=SEhK9glwn2Q"},
  {"name": "Doom - Intermission from Doom remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=eDdKv097yaU"},
  {"name": "Doom - Sign of Evil remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=aYpgpRCAmIk"},
  {"name": "Doom - Donna To The Rescue remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=AZRVWT2aqs4"},
  {"name": "Rise Of The Triad - Goin down the fast way Official (remixed version)", "url": "https://www.youtube.com/watch?v=FaxBhTSYo_g"},
  {"name": "Bombshell Soundtrack - Unbroken, Unaffected", "url": "https://www.youtube.com/watch?v=6Fn_S5_OjZg"},
  {"name": "Doom - Deep Into The Code remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=mGlER_aPFkA"},
  {"name": "Doom - I sawed the demons remake by Andrew Hulshult -Feat:Adrian de Leon", "url": "https://www.youtube.com/watch?v=X_o5j9srb40"},
  {"name": "Doom - Nobody Told Me About ID (Tower of Babel) remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=YE7RHe83KwQ"},
  {"name": "Doom - Victory remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=cOQaeKrWxWE"},
  {"name": "Your Questions Answered - Mick Gordon, Duke 3d Reloaded, IDKFA, Bombshell", "url": "https://www.youtube.com/watch?v=DAZd1AzN-FI"},
  {"name": "Submit your questions here...if you have any!", "url": "https://www.youtube.com/watch?v=7L2ryH9XHCk"},
  {"name": "Doom - The Demons from Adrians Pen remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=7FKM4nYCQwQ"},
  {"name": "Bombshell - Official Soundtrack Theme", "url": "https://www.youtube.com/watch?v=jEp5YEr_Whk"},
  {"name": "Duke Nukem Theme Remake", "url": "https://www.youtube.com/watch?v=fqDF8dSLOfc"},
  {"name": "Hellero | The Rise of the Triad Soundtrack is Here", "url": "https://www.youtube.com/watch?v=XMXuvvj2E0g"},
  {"name": "389240.wav", "url": "https://www.youtube.com/watch?v=4R_SuQX1iS0"},
  {"name": "IDKFA - Knee deep in the dead remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=WktBkffgEm8"},
  {"name": "Doom - On The Hunt remake by Andrew Hulshult", "url": "https://www.youtube.com/watch?v=pXEZNha1fHA"},
  {"name": "Doom - At Doom's Gate E1M1 remake by Andrew Hulshult (Brutal Doom v2.0 trailer theme)", "url": "https://www.youtube.com/watch?v=q657rEkgfKs"},
];

const halleyLabsVideos = [
  {"name": "pure staircase CD NOW AVAILABLE", "url": "https://www.youtube.com/watch?v=vOol83Vi_zc"},
  {"name": "FD04 ANOTHER VERSIONS [Album Stream]", "url": "https://www.youtube.com/watch?v=UfULYOfQEKk"},
  {"name": "The Queenstons - May 16 [Lagwagon Cover]", "url": "https://www.youtube.com/watch?v=D1FXxEvkGpg"},
  {"name": "[CD promo] pure staircase / MAY 30", "url": "https://www.youtube.com/watch?v=lRtRwcwPMMM"},
  {"name": "Rotteen - R.D.M. Synth (K.K. Synth RMX)", "url": "https://www.youtube.com/watch?v=cO5rSrFe620"},
  {"name": "Darius - Lakeshore West Line", "url": "https://www.youtube.com/watch?v=tpagsVWhU18"},
  {"name": "Halley Labs Associates - 2YR, 38:33.941 [HLV-002] direct recording", "url": "https://www.youtube.com/watch?v=9D7UHChmzN0"},
  {"name": "Darius - caractère difficile [cassette release] direct recording", "url": "https://www.youtube.com/watch?v=-ba333C_VmI"},
  {"name": "BANDETTO BEST SELECTION [HLV-001] direct recording", "url": "https://www.youtube.com/watch?v=KFODq8hs0y4"},
  {"name": "deuteronomy  - mayfrost", "url": "https://www.youtube.com/watch?v=guck0A2exD4"},
  {"name": "The Queenstons - eyes open", "url": "https://www.youtube.com/watch?v=W6pqI9zJBwg"},
  {"name": "deuteronomy - visions (all senses) [VOLUME WARNING]", "url": "https://www.youtube.com/watch?v=4UR4VX-qp6c"},
  {"name": "Kitcaliber & DOWNLOAD - OOPS (THIS IS OUR FAULT)", "url": "https://www.youtube.com/watch?v=_CgJ9GEWBD0"},
  {"name": "EVERYDAYS: march", "url": "https://www.youtube.com/watch?v=4LhMWQKXiaQ"},
  {"name": "EVERYDAYS: march WEEK 2", "url": "https://www.youtube.com/watch?v=fpw5oiPOxe8"},
  {"name": "EVERYDAYS: march WEEK 1", "url": "https://www.youtube.com/watch?v=vpaKORqFrfI"},
  {"name": "[OUT NOW] B-SIDE the WAYSIDE", "url": "https://www.youtube.com/watch?v=hSHUOc4QwSE"},
  {"name": "EVERYDAYS: february", "url": "https://www.youtube.com/watch?v=ZVyn85m2hzY"},
  {"name": "EVERYDAYS: january", "url": "https://www.youtube.com/watch?v=cQ9XQwqjK0g"},
  {"name": "Emoticon - 0u7r4g30us_v1b35", "url": "https://www.youtube.com/watch?v=aAJaIUnXZYc"},
  {"name": "[cassette promo] EUGENE vs DOWNLOAD", "url": "https://www.youtube.com/watch?v=B-4iZVWuDNs"},
  {"name": "Klippa + Darius - Awake4ThaSunset", "url": "https://www.youtube.com/watch?v=q37iEbI3kOc"},
  {"name": "Emoticon - n2o way", "url": "https://www.youtube.com/watch?v=GynKcyiLtmo"},
  {"name": "KITCALIBER - THE MUSEUM OF UNNATURAL DISASTERS", "url": "https://www.youtube.com/watch?v=Ntwxcou_6pE"},
  {"name": "[cassette promo] hyi - mind breaking the body", "url": "https://www.youtube.com/watch?v=nwLHFyAgcGc"},
  {"name": "deuteronomy - pure staircase [ALBUM STREAM]", "url": "https://www.youtube.com/watch?v=B1mksGh0UXM"},
  {"name": "deuteronomy - starboarding (preview)", "url": "https://www.youtube.com/watch?v=h8LZnMUQN1M"},
  {"name": "deuteronomy - in it (preview)", "url": "https://www.youtube.com/watch?v=uzxtGrIn26Y"},
  {"name": "KITCALIBER - SELF-COFFINIZING", "url": "https://www.youtube.com/watch?v=5e9HWwJDtQA"},
  {"name": "emma \"𝑴𝑺𝑿\" essex - Pollination Dance DX", "url": "https://www.youtube.com/watch?v=oK6W77Xhpn4"},
  {"name": "deuteronomy - who could've imagined", "url": "https://www.youtube.com/watch?v=e-cnqNqAWas"},
  {"name": "ROTTEEN 2xVINYL AVAILABLE 4 PREORDER NOW!!!!!", "url": "https://www.youtube.com/watch?v=8i47RHL50L0"},
  {"name": "RQ laji-2 - YOU LOST YOUR BODY", "url": "https://www.youtube.com/watch?v=kTeBRX1322A"},
  {"name": "RQ laji-2 - oopsy daisy", "url": "https://www.youtube.com/watch?v=NXNjVD_xrms"},
  {"name": "Darius - FIèVRE", "url": "https://www.youtube.com/watch?v=PyI6CaxfWFw"},
  {"name": "Rotteen - Rave N' Roll (12\" Edit)", "url": "https://www.youtube.com/watch?v=58eVU5a5Fq0"},
  {"name": "\"starboarding\" [tape loop, pedals, volca sample & kick]", "url": "https://www.youtube.com/watch?v=lytLr24jUjE"},
  {"name": "\"staying in\" [tape loop, pedals, volca keys, monotron delay]", "url": "https://www.youtube.com/watch?v=9cfs0lPSgpo"},
  {"name": "EUGENE vs DOWNLOAD - RABID BATTLERS POWER STRUGGLE", "url": "https://www.youtube.com/watch?v=MBBG9q0OMlE"},
  {"name": "RQ - 20,n", "url": "https://www.youtube.com/watch?v=DUAYxJh1--g"},
  {"name": "Darius - please drive", "url": "https://www.youtube.com/watch?v=8-9w9_Q2THQ"},
  {"name": "Aurastys - circe's bluff", "url": "https://www.youtube.com/watch?v=wiikBwC2CnY"},
  {"name": "RQ laji-2 - almost me", "url": "https://www.youtube.com/watch?v=k5yyOYDF3FM"},
  {"name": "various sketches 2012-2019", "url": "https://www.youtube.com/watch?v=fzQBABgbJ0E"},
  {"name": "Rotteen - it's an EP!", "url": "https://www.youtube.com/watch?v=zfFBO_qCpqA"},
  {"name": "Rotteen & Emoticon - Sun Always Shines RMX", "url": "https://www.youtube.com/watch?v=mh_yu2N4bBE"},
  {"name": "emma \"ＭＳＸ\" essex - 悪魔の悪夢 [Demon's Nightmare] REV​ ​B0014 THE MUSIC AND SOUND", "url": "https://www.youtube.com/watch?v=8vVXXdLXxK8"},
  {"name": "Rotteen & Emoticon - Man, It's So Loud In Here (Extended Edit) [They Might Be Giants Cover]", "url": "https://www.youtube.com/watch?v=9QYia38ZwJA"},
  {"name": "Rotteen & Emoticon - Man, It's So Loud In Here [They Might Be Giants Cover]", "url": "https://www.youtube.com/watch?v=bcBuHf7wzAA"},
  {"name": "The Queenstons - Idioteque [Radiohead Cover]", "url": "https://www.youtube.com/watch?v=B_N5tDCM5OU"},
  {"name": "HALLEY RESOURCE CENTER [samples, tracker files, etc]", "url": "https://www.youtube.com/watch?v=WYU08QeCrKg"},
  {"name": "The Queenstons - i'm sure it's ok", "url": "https://www.youtube.com/watch?v=F2eQBey3s3k"},
  {"name": "HHSU 𓃚 𝕮𝖆𝖒𝖇𝖎𝖚𝖒, 𝕏𝕪𝕝𝕖𝕞, 🙴 𝓗𝓮𝓪𝓻𝓽𝔀𝓸𝓸𝓭 - Alyss⏧dM (EUGENE RMX)", "url": "https://www.youtube.com/watch?v=mPpP2PGl1rE"},
  {"name": "HHSU 𓃚 𝕮𝖆𝖒𝖇𝖎𝖚𝖒, 𝕏𝕪𝕝𝕖𝕞, 🙴 𝓗𝓮𝓪𝓻𝓽𝔀𝓸𝓸𝓭 - 𝅙 [ALBUM STREAM]", "url": "https://www.youtube.com/watch?v=orKw1pTBSy4&t=1008s"},
  {"name": "[OUT NOW!] Darius - exuviae", "url": "https://www.youtube.com/watch?v=GnMKPs2HXOU"},
  {"name": "LABOREPO [PILOT]: new darius album // renard compilation vinyl", "url": "https://www.youtube.com/watch?v=gOuJqPjr6UQ"},
  {"name": "Darius - never-ending inescapable drive to disappear", "url": "https://www.youtube.com/watch?v=wTL0mYj_NjE"},
  {"name": "Darius - exuviae", "url": "https://www.youtube.com/watch?v=DZjyDXN3HjY"},
  {"name": "Rotteen vs JQ - Not So Fast!!", "url": "https://www.youtube.com/watch?v=jAepQ40rJ_o"},
  {"name": "Darius - ugly nostalgia", "url": "https://www.youtube.com/watch?v=DZbPDAnQex8"},
  {"name": "RQ - MEGA×5 ～ Ⅴᵗʰ Anniversary", "url": "https://www.youtube.com/watch?v=sTkvRRd2er0"},
  {"name": "Aurastys - nuuttipukki", "url": "https://www.youtube.com/watch?v=IWOKw1BUkC4"},
  {"name": "NegaRen - Stacker Robot (BANDETTO & Emoticon 200X RESTACK)", "url": "https://www.youtube.com/watch?v=a8Rfh6FRBIg"},
  {"name": "THIS SUNDAY: MEGAx5 5TH ANNIVERSARY CD", "url": "https://www.youtube.com/watch?v=tdo8nekiDuc"},
  {"name": "[OUT NOW] HALLEY HARD SOUND UNIT - NULL NOTE HEAD", "url": "https://www.youtube.com/watch?v=cDEZfi4QTLY"},
  {"name": "Jackal Queenston - Spilling The Beans (It Was The Spacemen)", "url": "https://www.youtube.com/watch?v=-oHtwu-9Ou4"},
  {"name": "Jackal Queenston - Three Legged Horse [Free Track]", "url": "https://www.youtube.com/watch?v=SRTmIqNNpTM"},
  {"name": "HALLEY HARD SOUND UNIT - cyanosis", "url": "https://www.youtube.com/watch?v=uGOmJaKos6M"},
  {"name": "Jackal Queenston - Bad Future", "url": "https://www.youtube.com/watch?v=bWkOOFfZnQE"},
  {"name": "RQ feat. Emoticon - TURFMASTAZ!", "url": "https://www.youtube.com/watch?v=vJ2YsOz3szs"},
  {"name": "\"WANDERLUST\" on VINYL // until AUGUST 31!!", "url": "https://www.youtube.com/watch?v=PHLf6RykNiM"},
  {"name": "darius halley - highbeams in the forest fog", "url": "https://www.youtube.com/watch?v=__mronjwIno"},
  {"name": "RQ laji-2 - demifloozy", "url": "https://www.youtube.com/watch?v=O9hjSB9xVo0"},
  {"name": "HALLEY HARD SOUND UNIT - losing_faith[betaVer.]BADEND", "url": "https://www.youtube.com/watch?v=m1GKRqadk6U"},
  {"name": "Mayhem - St Quiteria", "url": "https://www.youtube.com/watch?v=MEXTzpCMqpg"},
  {"name": "Emoticon - HE-databusters", "url": "https://www.youtube.com/watch?v=SfH3TJ-6l54"},
  {"name": "hyi - about / i can't wait... [Vinyl Rip / HLV-003]", "url": "https://www.youtube.com/watch?v=u2peNRj00e0"},
  {"name": "Halley Labs Associates - 2YR [Vinyl Rip / HLV-002]", "url": "https://www.youtube.com/watch?v=Fhgj_Qad7oQ"},
  {"name": "BANDETTO BEST SELECTION [Vinyl Rip / HLV-001]", "url": "https://www.youtube.com/watch?v=9pb6zHyQKjc"},
  {"name": "HALLEY HARD SOUND UNIT  - heaven-adjacent", "url": "https://www.youtube.com/watch?v=lHd64tV50AM"},
  {"name": "Kobaryo - Tool-Assisted Speedcore (TQBF Frame Advance RMX)", "url": "https://www.youtube.com/watch?v=z5EEf931E3Q"},
  {"name": "Adam Freeland - Fear (Jackal Queenston RMX) [2018 EQ]", "url": "https://www.youtube.com/watch?v=fJIW6lYHq9w"},
  {"name": "Jackal Queenston & Darius - funny organism", "url": "https://www.youtube.com/watch?v=RTwA78fyLpg"},
  {"name": "Renard - SHOUNEN BASS! TURBO [ALBUM STREAM]", "url": "https://www.youtube.com/watch?v=JVKu530l2gI"},
  {"name": "hyi - ice [vinyl ver.]", "url": "https://www.youtube.com/watch?v=cyLauiNPF_Q"},
  {"name": "The Quick Brown Fox remixed by DOWNLOAD - THANK YOU", "url": "https://www.youtube.com/watch?v=D8LX1g2ZAI0"},
  {"name": "belladonnakillz - beautiful (JQ vs Emoticon RMX)", "url": "https://www.youtube.com/watch?v=ZlBn8MqOGhk"},
  {"name": "The Queenstons - yEaH hELL yEaH (belladonnakillz cover)", "url": "https://www.youtube.com/watch?v=kkFIKuoqx1I"},
  {"name": "hyi - emptygod", "url": "https://www.youtube.com/watch?v=ds8xCsOd7ec"},
  {"name": "HYI \"ABOUT + I CAN'T WAIT\" VINYL - UNTIL FEB 28 ONLY!!", "url": "https://www.youtube.com/watch?v=sZbUXiUWYkc"},
  {"name": "Jackal Queenston - Redwood [ B​-​SIDE U 『𝟚𝟘𝟙𝕏 ø۷ﻉɼिɭ๏ฝ』]", "url": "https://www.youtube.com/watch?v=27YXwJfNhSg"},
  {"name": "HALLEY HARD SOUND UNIT - GALGALE12†roman_candle", "url": "https://www.youtube.com/watch?v=nrvexm7R8uk"},
  {"name": "[NEW RELEASE] Darius - ASTROANTEDILUVIAN", "url": "https://www.youtube.com/watch?v=hZmaSE9ul58"},
  {"name": "JACKALQ~1 EXE infected by *.EXE - 7th Snow", "url": "https://www.youtube.com/watch?v=JDxlVFL6-3A"},
  {"name": "The Quick Brown Fox & Klippa - MELANCHOLY passing into MANIA", "url": "https://www.youtube.com/watch?v=F4A1q2fbxEY"},
  {"name": "Darius - rejuvenation", "url": "https://www.youtube.com/watch?v=4c3a5q8p4mI"},
  {"name": "NegaRen - OCTOBER STARLIGHT 4EVER! [NONSTOP MIX]", "url": "https://www.youtube.com/watch?v=ImgXfDTkkKc"},
  {"name": "[OUT NOW: 2014-CURRENT / selected research] HALLEY LABS R&D - no replace", "url": "https://www.youtube.com/watch?v=kVbK9RqspSg"},
  {"name": "Darius - Ornithopter", "url": "https://www.youtube.com/watch?v=-HjV948EO88"},
  {"name": "Emoticon vs DOWNLOAD - 92 IMMORTAL", "url": "https://www.youtube.com/watch?v=rDHVY6Hn6yw"},
  {"name": "Darius - Disconnect Q1", "url": "https://www.youtube.com/watch?v=blLUeQtLrUY"},
  {"name": "The Quick Brown Fox - BURNING BRAIN (Emoticon & Mayhem's \"STAR LAB\" RMX)", "url": "https://www.youtube.com/watch?v=UENrSXo9DDw"},
  {"name": "Darius - vanishing_chameleon [from STAFFcirc vol. 3⇋: TERMINAL VICE]", "url": "https://www.youtube.com/watch?v=XPgBWeewvY0"},
  {"name": "2YR, 40:28.649 VINYL PRE-ORDERS OPEN NOW", "url": "https://www.youtube.com/watch?v=l-9jBW4KW5k"},
  {"name": "B-SIDE U 2017 VOL. 1 [ALBUM STREAM]", "url": "https://www.youtube.com/watch?v=oUstz8zcU3Y"},
  {"name": "HALLEY HARD SOUND UNIT – Excavation of Asphodel Meadows", "url": "https://www.youtube.com/watch?v=AScYUcEoacs"},
  {"name": "Jackal Queenston – Deeper RMX", "url": "https://www.youtube.com/watch?v=4wf2ODXZYpE"},
  {"name": "Aurastys - tak(ing/en)", "url": "https://www.youtube.com/watch?v=kUg-x5pAdfQ"},
  {"name": "DOWNLOAD & Darius - closet", "url": "https://www.youtube.com/watch?v=qxXhY-bHsGs"},
  {"name": "Darius & Renard - Flutter and Perch", "url": "https://www.youtube.com/watch?v=6o6CWvn-8lw"},
  {"name": "RQ - CROSSING 166", "url": "https://www.youtube.com/watch?v=o0_yc90FAnY"},
  {"name": "The Queenstons - Occam's Razor", "url": "https://www.youtube.com/watch?v=Q6KwLWG86CQ"},
  {"name": "[ALBUM STREAM] Rotteen - Monarch of Death Rave", "url": "https://www.youtube.com/watch?v=ti96i_rxTos"},
  {"name": "[ALBUM STREAM] The Quick Brown Fox - NERVE'S ENDING", "url": "https://www.youtube.com/watch?v=V-OcM7KYHdA"},
  {"name": "[PROMO] THE QUICK BROWN FOX - NERVE'S ENDING", "url": "https://www.youtube.com/watch?v=g7BnhavY_D4"},
  {"name": "Jackal Queenston - Temporary", "url": "https://www.youtube.com/watch?v=2Jw1rAzdwU8"},
  {"name": "The Quick Brown Fox - Burning Brain", "url": "https://www.youtube.com/watch?v=qqfPx8_u1Js"},
  {"name": "Darius - Wishy Washy", "url": "https://www.youtube.com/watch?v=wSxIRPOgCmM"},
  {"name": "HALLEY HARD SOUND UNIT - EGO GAMIFICATION", "url": "https://www.youtube.com/watch?v=NaBlvA4iifg"},
  {"name": "[ALBUM STREAM] hyi - mind breaking the body", "url": "https://www.youtube.com/watch?v=2v-DaRno9fA"},
];

const kennyoungVideos = [
  {"name": "[Original] Someday", "url": "https://www.youtube.com/watch?v=EwLUpxe5A6Y"},
  {"name": "[Cover] Please Take Me Home (blink-182)", "url": "https://www.youtube.com/watch?v=hIx7DsNm18o"},
  {"name": "[Cover] There Is (Box Car Racer)", "url": "https://www.youtube.com/watch?v=AVABymoM-t4"},
  {"name": "[Cover] 花鳥風月 (SEKAI NO OWARI)", "url": "https://www.youtube.com/watch?v=Wr0x0Gou6Tw"},
  {"name": "[Cover] House of Gold (twenty one pilots)", "url": "https://www.youtube.com/watch?v=trKhhXpJNIQ"},
  {"name": "[Cover] Built This Pool (blink-182)", "url": "https://www.youtube.com/watch?v=_FAxc2NI9fM"},
  {"name": "[Cover] Vanilla Twilight (Owl City)", "url": "https://www.youtube.com/watch?v=rTmA-6lC9AQ"},
  {"name": "[Cover] Cigarettes And Valentines (Green Day)", "url": "https://www.youtube.com/watch?v=37zle64GhKs"},
  {"name": "[Cover] Meet Me On The Roof (Green Day)", "url": "https://www.youtube.com/watch?v=sJqRVP5FuGs"},
  {"name": "[Cover] Fireflies (Owl City)", "url": "https://www.youtube.com/watch?v=SqNIokmOAR8"},
  {"name": "[Cover] A Party Song (The Walk Of Shame) (All Time Low)", "url": "https://www.youtube.com/watch?v=0ea0f5JXUhs"},
  {"name": "[Cover] Boxing Day ft. Kogey (blink-182)", "url": "https://www.youtube.com/watch?v=tOl1jZY3OE4"},
  {"name": "[Cover] Xmas Time Of The Year (Green Day)", "url": "https://www.youtube.com/watch?v=X_jq2Pa86SA"},
  {"name": "[Original] Light Beside Of You", "url": "https://www.youtube.com/watch?v=aCHkslfYTTE"},
  {"name": "[Cover] My Christmas List (Simple Plan)", "url": "https://www.youtube.com/watch?v=SkUj5pfz8EI"},
  {"name": "[Cover] Happy Holidays, You Bastard (blink-182)", "url": "https://www.youtube.com/watch?v=0jZPgFWseWc"},
  {"name": "[Cover] Scratch21 Medley", "url": "https://www.youtube.com/watch?v=05bySCprqYs"},
  {"name": "[Cover] Shoplifter (Green Day)", "url": "https://www.youtube.com/watch?v=fxcPOyCArv0"},
  {"name": "[Cover] Aliens Exist (blink-182)", "url": "https://www.youtube.com/watch?v=GW6IVDRrvqs"},
  {"name": "[Cover] Scooby Doo, Where Are You (MxPx)", "url": "https://www.youtube.com/watch?v=7j86Jq1pBUM"},
  {"name": "[Original] Leatherface", "url": "https://www.youtube.com/watch?v=gb3kZzXJ7i0"},
  {"name": "[Cover] It's Terror Time Again (Skycycle) (Scooby-Doo on Zombie Island)", "url": "https://www.youtube.com/watch?v=vsb1nlm6F-8"},
  {"name": "[Cover] Ransom (blink-182)", "url": "https://www.youtube.com/watch?v=AXxiek_kkpI"},
  {"name": "[Cover] The Grouch (Green Day)", "url": "https://www.youtube.com/watch?v=5Wmesm9FGaU"},
  {"name": "[Cover] Father Of All... (Green Day)", "url": "https://www.youtube.com/watch?v=28J5O3EzlFU"},
  {"name": "[Cover] Voldemort (With Confidence)", "url": "https://www.youtube.com/watch?v=KRcSEfEU-Ls"},
  {"name": "[Cover] Something's Gotta Give (All Time Low)", "url": "https://www.youtube.com/watch?v=p4S_ju0NvPQ"},
  {"name": "[Cover] High Waisted Shorts (Emily's Army)", "url": "https://www.youtube.com/watch?v=nWTXPvXFMkQ"},
  {"name": "[Cover] Right Now (SR-71)", "url": "https://www.youtube.com/watch?v=siIm3gMDQoo"},
  {"name": "[Cover] Escape From The City (Sonic Adventure 2)", "url": "https://www.youtube.com/watch?v=QWm9E83vAFw"},
  {"name": "[Cover] 1985 (Bowling For Soup)", "url": "https://www.youtube.com/watch?v=Qmd8hUq1N4A"},
  {"name": "[Cover] Rebel Girl (Angels & Airwaves)", "url": "https://www.youtube.com/watch?v=szsI7iY3qHc"},
  {"name": "[Cover] Clairvoyant (The Story So Far)", "url": "https://www.youtube.com/watch?v=zd-makiXPaY"},
  {"name": "[Cover] Ha Ha You're Dead (Green Day)", "url": "https://www.youtube.com/watch?v=uIKwHZS3oMc"},
  {"name": "[Cover] Not Now (blink-182)", "url": "https://www.youtube.com/watch?v=WnqTZGV3M5s"},
  {"name": "[Original] Liar", "url": "https://www.youtube.com/watch?v=w_ds4x8gbqg"},
  {"name": "[Original] Fall In Love With Me", "url": "https://www.youtube.com/watch?v=QrYp435ewuc"},
  {"name": "[Cover] Reach For The Stars (Sonic Colors)", "url": "https://www.youtube.com/watch?v=rT9tceWJKVs"},
  {"name": "[Original] I Tried", "url": "https://www.youtube.com/watch?v=MM5iZolIS6I"},
  {"name": "[Original] Dead Kitty", "url": "https://www.youtube.com/watch?v=iBFzwQ989FI"},
  {"name": "[Cover] I'm Coming After You (Owl City)", "url": "https://www.youtube.com/watch?v=TNZipVR3ODI"},
  {"name": "[Original] The Lonely Monster", "url": "https://www.youtube.com/watch?v=Ay2z9njxm7c"},
  {"name": "[Cover] Can't Keep My Hands Off You ft.Matt/Scratch21 (Simple Plan)", "url": "https://www.youtube.com/watch?v=dk_0146_VTs"},
  {"name": "[Original] Homicide", "url": "https://www.youtube.com/watch?v=YUAtoD2e_io"},
  {"name": "[Original] [EP] Bubble Dreams", "url": "https://www.youtube.com/watch?v=7n0UKNJCi5I"},
  {"name": "[Original] Swing Jazz Rock'n Roll (Short Demo)", "url": "https://www.youtube.com/watch?v=eQOZU3tPziM"},
  {"name": "[Cover] Die Anywhere Else (Night In The Woods)", "url": "https://www.youtube.com/watch?v=FbXV9v7mUcY"},
  {"name": "[Cover] Weird Autumn (Night In The Woods)", "url": "https://www.youtube.com/watch?v=sysAA7Z2IRI"},
  {"name": "[Cover] Umbrella Beach (Owl City)", "url": "https://www.youtube.com/watch?v=A1PN6i3Y-vU"},
  {"name": "[Cover] I Won't Be Home For Christmas (Blink-182)", "url": "https://www.youtube.com/watch?v=6vtbTS7OKJA"},
  {"name": "[Original Song] The Last Wish (Short)", "url": "https://www.youtube.com/watch?v=BtCQfO7vCQs"},
  {"name": "[Cover] Scooby Doo, Where Are You!", "url": "https://www.youtube.com/watch?v=I85LD5ofswE"},
  {"name": "[Original] Jack-O'-Lantern (Halloween)", "url": "https://www.youtube.com/watch?v=TY751tHrHt4"},
  {"name": "[Original Song] Foxy The Dog", "url": "https://www.youtube.com/watch?v=uyeQgNEe44k"},
  {"name": "[Original Song] Spring of Love (Instrumental)", "url": "https://www.youtube.com/watch?v=T4gc383wdcI"},
  {"name": "[Instrumental Cover] When Can I See You Again (Owl City)", "url": "https://www.youtube.com/watch?v=oJ27x8VJJFE"},
  {"name": "[Cover] When Can I See You Again (Owl City)", "url": "https://www.youtube.com/watch?v=xVF3HKEuY0o"},
  {"name": "[Cover] The Gypsy Bard (Korean Cover)", "url": "https://www.youtube.com/watch?v=9_rS2pNGpjw"},
  {"name": "[Original] Waiting For You", "url": "https://www.youtube.com/watch?v=D1nLDBi-LLk"},
  {"name": "[Instrumental Cover] Plant Life (Owl City)", "url": "https://www.youtube.com/watch?v=gD-0U73BdbE"},
]

const twoSnacksVideos = [
  {"name": "Super Best Sisters Play - Final Fantasy 7", "url": "https://www.youtube.com/watch?v=jZCZtwATFWE"},
  {"name": "November Update", "url": "https://www.youtube.com/watch?v=IkufE6JhUqM"},
  {"name": "everything is fine and working as intended", "url": "https://www.youtube.com/watch?v=dfAbLVmY79M"},
  {"name": "Two Best Sisters Play - Red Dead Redemption 2", "url": "https://www.youtube.com/watch?v=0k8otHMwy5w"},
  {"name": "Quick update + new TBSP ACU", "url": "https://www.youtube.com/watch?v=ASRj2j_BcQE"},
  {"name": "Super Best Sisters Play - Shadow The Hedgehog", "url": "https://www.youtube.com/watch?v=ol3R4DacE2I"},
  {"name": "Two Best Sisters Play - Friday the 13th", "url": "https://www.youtube.com/watch?v=--eAjuzw-_o"},
  {"name": "Rewards", "url": "https://www.youtube.com/watch?v=_-wPJj2_TUM"},
  {"name": "Two Best Sisters Play - Fallout 4", "url": "https://www.youtube.com/watch?v=mzkwAv6Cbt4"},
  {"name": "Two Best Sisters Replay - Assassin's Creed: Brotherhood", "url": "https://www.youtube.com/watch?v=NP3Ld4llTv4"},
  {"name": "Shitstorm V Animation Timelapse", "url": "https://www.youtube.com/watch?v=uOGniCdS81E"},
  {"name": "Shitstorm V: Shitsurrection - 70s Exploitative Horror Intro", "url": "https://www.youtube.com/watch?v=x7FrmoBvt1k"},
  {"name": "Super Best Friends Play Intro", "url": "https://www.youtube.com/watch?v=JJLUwLafvDg"},
  {"name": "Two Best Sisters Play - PKMN Snap", "url": "https://www.youtube.com/watch?v=9WYZVmdw9gw"},
  {"name": "Ponyvania: Order of Equestria Intro", "url": "https://www.youtube.com/watch?v=Ogh6xmivX7k"},
  {"name": "Two Best Sisters Play - Persona 4", "url": "https://www.youtube.com/watch?v=yEQ_6geAKwE"},
  {"name": "The Tingle Bottle", "url": "https://www.youtube.com/watch?v=i5pNa43Rgac"},
  {"name": "釘の箱", "url": "https://www.youtube.com/watch?v=ZhPwyHXd07Q"},
  {"name": "tumblr Question - Animation", "url": "https://www.youtube.com/watch?v=fysNTElCYUU"},
  {"name": "Two Best Sisters Play - Resident Evil 4", "url": "https://www.youtube.com/watch?v=i7v5wDVDpnc"},
  {"name": "Teleport Potion", "url": "https://www.youtube.com/watch?v=o5_fQ7787Es"},
  {"name": "Two Best Sisters Play Portal 2", "url": "https://www.youtube.com/watch?v=L0cY2NWlddU"},
  {"name": "Two Best Sisters Play - Assassin's Creed: Brotherhood", "url": "https://www.youtube.com/watch?v=Y1mmCYHaZ4s"},
  {"name": "meet your DOOM - Speed Paint", "url": "https://www.youtube.com/watch?v=0oRYSphRIQY"},
  {"name": "There was no talking, there was no smiling... - Speed Paint", "url": "https://www.youtube.com/watch?v=7nVxmldHujs" },
];