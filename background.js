let ruleIdCounter = 1; 

const hardcodedBlockedSites = [
    "xvideos.com", "xhamster.com", "pornhub.com", "xnxx.com", "redtube.com", "youporn.com", "tube8.com", "youjizz.com", "hardsextube.com", "beeg.com", "motherless.com", "drtuber.com", "nuvid.com", "pornerbros.com", "spankwire.com", "keezmovies.com", "sunporno.com", "porn.com", "4tube.com", "alphaporno.com", "xtube.com", "pornoxo.com", "yobt.com", "tnaflix.com", "pornsharia.com", "brazzers.com", "extremetube.com", "slutload.com", "fapdu.com", "empflix.com", "alotporn.com", "vid2c.com", "Shufuni.com", "cliphunter.com", "xxxbunker.com", "madthumbs.com", "deviantclip.com", "twilightsex.com", "pornhost.com", "fux.com", "jizzhut.com", "spankbang.com", "eporner.com", "orgasm.com", "yuvutu.com", "kporno.com", "definebabe.com", "secret.shooshtime.com", "mofosex.com", "hotgoo.com", "submityourflicks.com", "xxx.com", "bigtits.com", "media.xxxaporn.com", "bonertube.com", "userporn.com", "jizzonline.com", "pornotube.com", "fookgle.com", "free18.net", "tub99.com", "nonktube.com", "mastishare.com", "tjoob.com", "rude.com", "bustnow.com", "pornrabbit.com", "pornative.com", "sluttyred.com", "boysfood.com", "moviefap.com", "lubetube.com", "submityourtapes.com", "megafilex.com", "hdpornstar.com", "al4a.com", "stileproject.com", "xogogo.com", "filthyrx.com", "jizzbo.com", "5ilthy.com", "91porn.com", "lesbianpornvideos.com", "eroxia.com", "iyottube.com", "yourfreeporn.us", "sexoasis.com", "fucktube.com", 
    "pornomovies.com", "clearclips.com", "moviesand.com", "tubixe.com", "pornjog.com", "sextv1.pl", "desihoes.com", "pornupload.com", "kosimak.com", "videocasalinghi.com", "lubeyourtube.com", "freudbox.com", "moviesguy.com", "motherofporn.com", "141tube.com", "my18tube.com", "bigupload.com", "xvds.com", "fastjizz.com", "tubeland.com", "ultimatedesi.net", "teenporntube.com", "tubave.com", "afunnysite.com", "sexe911.com", "megaporn.com", "porntitan.com", "pornheed.com", "youhot.gr", "videolovesyou.com", "onlymovies.com", "hdporn.net", "adultvideodump.com", "suzisporn.com", "xfilmes.tv", "pornwall.com", "silverdaddiestube.com", "sextube.sweetcollegegirls.com", "ipadporn.com", "youporns.org", "movietitan.com", "yaptube.com", "jugy.com", "chumleaf.com", "panicporn.com", "milfporntube.com", "timtube.com", "wetpussy.com", "whoreslag.com", "xfapzap.com", "xvideohost.com", "tuberip.com", "dirtydirtyangels.com", "bigerotica.com", "pk5.net", "theamateurzone.info", "triniporn.org", "youbunny.com", "isharemybitch.com", "morningstarclub.com", "sexkate.com", "kuntfutube.com", "porncor.com", "thegootube.com", "tubeguild.com", "fuckuh.com", "tube.smoder.com", "zuzandra.com", "nextdoordolls.com", "myjizztube.com", "homesexdaily.com", "thetend.com", "yourpornjizz.com", "tgirls.com", "pornwaiter.com", "pornhub.pl", "nurglestube.com", "brazzershdtube.com", "upthevideo.com", "sexzworld.com", "cuntest.com", 
    "ahtube.com", "free2peek.com", "freeamatube.com", "thexxxtube.net", "yazum.com", "tubesexes.com", "pornload.com", "vankoi.com", "dailee.com", "ejason21.com", "openpunani.com", "porntubexl.nl", "scafy.com", "bangbull.com", "vidxnet.com", "yteenporn.com", "tubethumbs.com", "faptv.com", "nasty8.com", "maxjizztube.com", "pornunder.com", "24h-porn.net", "xclip.tv", "jerkersworld.com", "desibomma.com", "jizzbox.com", "theyxxx.com", "bonkwire.com", "PornTelecast.com", "pornsitechoice.com", "yporn.tv", "girlsongirlstube.com", "famouspornstarstube.com", "sexfans.org", "youpornxl.com", "rudeshare.com", "efuckt.com", "koostube.com", "amateursex.com", "moviegator.com", "cobramovies.com", "cantoot.com", "yourhottube.com", "teentube18.com", "youxclip.com", "flicklife.com", "nastyrat.tv", "freepornfox.com", "freeadultwatch.com", "fucked.tv", "sextube.si", "pornrater.com", "wheresmygf.com", "xfanny.com", "pornorake.com", "untouched.tv", "guppyx.com", "mylivesex.tv", "pervaliscious.com", "sex2ube.com", "suckjerkcock.com", "netporn.nl", "exgfvid.com", "koalaporn.com", "bbhgvidz.com", "evilhub.com", "celebritytubester.com", "pornfish.com", "jrkn.com", "bootyclips.com", "tubeguide.info", "realhomemadetube.com", "tokenxxxporn.com", "pornvideoflix.com", "sinfultube.net", "pornler.com", "sharexvideo.com", "69youPorn.com", "submitmyvideo.com", "kastit.com", "pornini.com", "hd4sex.com", "laftube.com", "mosestube.com", 
    "dutchxtube.com", "porncastle.net", "tubedatbooty.com", "pornvie.com", "pornopantry.com", "springbreaktubegirls.com", "tube4u.net", "nsfwftw.com", "pornozabava.com", "tgutube.com", "celebritynudez.com", "teeztube.com", "collegefucktube.com", "adultvideomate.com", "porntubemoviez.com", "bigjuggs.com", "hornypickle.com", "mypornow.com", "pushingpink.com", "xxxshare.ru", "nuuporn.com", "melontube.com", "myamateurporntube.com", "soyouthinkyourapornstar.com", "porntubestreet.com", "pornogoddess.com", "cumsnroses.com", "porntubeclipz.com", "lcgirls.com", "housewifes.com", "cactarse.com", "cumfox.com", "tube17.com", "teenbrosia.com", "lesbiantubemovies.com", "xxxset.com", "gagahub.com", "jugland.com", "porntubesurf.com", "freakybuddy.com", "sexdraw.com", "sexovirtual.com", "pornsmack.com", "gratisvideokijken.nl", "eroticadulttube.com", "bharatporn.com", "fmeporn.com", "darkpost.com", "sexporndump.com", "sexandporn.org", "jezzytube.com", "justpornclip.com", "xxxpornow.com", "inseks.com", "freeporn777.com", "porndisk.com", "adultfunnow.com", "youporn.us.com", "babecumtv.com", "girlskissinggirlsvideos.com", "specialtytubeporn.com", "teentube.be", "freeâ€celebrityâ€tube.com", "publicâ€sluts.net"
];

function isAscii(str) {
    return /^[\x00-\x7F]*$/.test(str); 
}

function updateBlockingRules(blockedSites) {
    console.log("Updating blocking rules with sites:", blockedSites);
    
    const asciiBlockedSites = blockedSites.filter(site => isAscii(site));
    
    const rules = asciiBlockedSites.map(site => ({
        id: ruleIdCounter++, 
        condition: {
            urlFilter: `*://*.${site}/*`,
            resourceTypes: ["main_frame"]
        },
        action: {
            type: "block"
        }
    }));

    console.log("Generated rules:", rules);

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: Array.from({ length: ruleIdCounter - 1 }, (_, i) => i + 1), 
        addRules: rules
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Error updating rules:", chrome.runtime.lastError);
        }
    });
}

function setNormalIcons() {
    chrome.action.setIcon({ path: { "16": "black16.png", "48": "black48.png", "128": "black128.png" } });
}

function setIncognitoIcons() {
    chrome.action.setIcon({ path: { "16": "white16.png", "48": "white48.png", "128": "white128.png" } });
}

chrome.storage.sync.get("blockedSites", function (data) {
    const userBlockedSites = data.blockedSites || [];

    const allBlockedSites = [...new Set([...hardcodedBlockedSites, ...userBlockedSites])];
    updateBlockingRules(allBlockedSites);
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.blockedSites) {
        const userBlockedSites = changes.blockedSites.newValue;

        const allBlockedSites = [...new Set([...hardcodedBlockedSites, ...userBlockedSites])];
        updateBlockingRules(allBlockedSites);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateBlockingRules") {
        const userBlockedSites = request.blockedSites;

        const allBlockedSites = [...new Set([...hardcodedBlockedSites, ...userBlockedSites])];
        updateBlockingRules(allBlockedSites);
    }
});

chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.get("adminPassword", function(data) {
        if (!data.adminPassword) {
            const defaultPassword = "admin"; 
            chrome.storage.sync.set({ adminPassword: defaultPassword });
        }
    });

    setNormalIcons();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.incognito) {
        setIncognitoIcons();
    } else {
        setNormalIcons();
    }
});

chrome.runtime.onStartup.addListener(() => {
    setNormalIcons();
});