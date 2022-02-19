const gmshopid = document.getElementById("gmshopid");
const gkidtown = document.getElementById("gkidtown");
const gktownpath = document.querySelectorAll(".gktownpath");
const gmshop = document.querySelectorAll(".gmshop");
const gkidziggurat = document.getElementById("gkidziggurat");
const gkzigguratpath = document.querySelectorAll(".gkzigguratpath");
const bufferid = document.getElementById("bufferid");
const buffs = document.querySelectorAll(".buffs");
const bufferbypassid = document.getElementById("bufferbypassid");
const buffsbypass = document.querySelectorAll(".buffsbypass");
const bufferbypassaltb = document.querySelectorAll(".bufferbypassaltb_radio");
const starttimerboth = document.querySelectorAll(".starttimerboth");
const autologindisabled = document.querySelectorAll(".autologindisabled");
const bufferbypassaltb_radio_id1 = document.getElementById(
  "bufferbypassaltb_radio_id1"
);
const bufferbypassaltb_radio_id2 = document.getElementById(
  "bufferbypassaltb_radio_id2"
);

let mp_radio;
let gktown_radio;
let gkziggurat_radio;
let bufferbypass_radio;
let autologin_radio;
let randommove_radio;
let bufferbypassaltb_radio;
let huntingrebuff_radio;
let soeiflow_radio;
let starttimer_radio;

// BUY MP / BSS RADIO
document.querySelectorAll(".mp_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    mp_radio = e.target.value;
    gmshopid.disabled != false
      ? (gmshopid.disabled = false)
      : (gmshopid.disabled = true);
    gmshop.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});

// GK TOWN TO TOWN RADIO
document.querySelectorAll(".gktown_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    gktown_radio = e.target.value;
    gkidtown.disabled != false
      ? (gkidtown.disabled = false)
      : (gkidtown.disabled = true);
    gktownpath.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});
// GK ZIGGURAT
document.querySelectorAll(".gkziggurat_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    gkziggurat_radio = e.target.value;
    gkidziggurat.disabled != false
      ? (gkidziggurat.disabled = false)
      : (gkidziggurat.disabled = true);
    gkzigguratpath.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});
// BUFFER BYPASS
document.querySelectorAll(".bufferbypass_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    bufferbypass_radio = e.target.value;
    // bufferid.value = 0;
    if (bufferbypassid.disabled != false) {
      bufferbypassid.disabled = false;
      bufferid.disabled = true;
    } else {
      bufferbypassid.disabled = true;
      bufferid.disabled = false;
    }
    if (bufferbypass_radio == 0) bufferbypassid.disabled = true;
    if (bufferbypass_radio == 1 && bufferbypassaltb_radio == 1)
      bufferbypassid.disabled = true;
    // if (bufferbypass_radio == 0) {
    //   bufferbypassaltb_radio_id1.checked = false;
    //   bufferbypassaltb_radio_id2.checked = true;
    // }
    buffsbypass.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
      buffs.forEach((each) => {
        // each.value = "empty";
        each.disabled != false
          ? (each.disabled = false)
          : (each.disabled = true);
      });
      bufferbypassaltb.forEach((each) => {
        each.disabled != false
          ? (each.disabled = false)
          : (each.disabled = true);
      });
    });
  });
});

// AUTO-Login
document.querySelectorAll(".autologin_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    e.target.value == 0 ? (autologin_radio = 1) : (autologin_radio = 0);
    // autologin_radio = e.target.value;
    autologindisabled.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});
// Random Movement
document.querySelectorAll(".randommove_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    randommove_radio = e.target.value;
  });
});
// ALT+B BYPASS
bufferbypassaltb.forEach((check) => {
  check.addEventListener("change", function (e) {
    bufferbypassaltb_radio = e.target.value;
    if (bufferbypassaltb_radio == 1) bufferbypassid.disabled = true;
    if (bufferbypassaltb_radio == 0) bufferbypassid.disabled = false;

    // bufferbypassid.disabled != false
    //   ? (bufferbypassid.disabled = false)
    //   : (bufferbypassid.disabled = true);
  });
});

// Hunting grounds rebuff
document.querySelectorAll(".huntingrebuff_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    huntingrebuff_radio = e.target.value;
  });
});
// Soe if mana is low
document.querySelectorAll(".soeiflow_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    soeiflow_radio = e.target.value;
  });
});
// System 24h timer
document.querySelectorAll(".starttimer_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    starttimer_radio = e.target.value;
    starttimerboth.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});

let saveFile = () => {
  // Get the data from each element on the form.
  const profile1 = document.getElementById("profile1");
  const profile2 = document.getElementById("profile2");
  const gamepath = document.getElementById("gamepath");
  const userName = document.getElementById("user");
  const password = document.getElementById("password");
  const loadMap = document.getElementById("loadmap");
  const gkId = document.getElementById("gkid");
  const gkpath1 = document.getElementById("gkpath1");
  const gkpath2 = document.getElementById("gkpath2");
  const gkpath3 = document.getElementById("gkpath3");
  const gkpath4 = document.getElementById("gkpath4");
  const gkpath5 = document.getElementById("gkpath5");
  const gktownpath1 = document.getElementById("gktownpath1");
  const gktownpath2 = document.getElementById("gktownpath2");
  const gktownpath3 = document.getElementById("gktownpath3");
  const gktownpath4 = document.getElementById("gktownpath4");
  const gktownpath5 = document.getElementById("gktownpath5");
  const gkidzigguratpath1 = document.getElementById("gkidzigguratpath1");
  const gkidzigguratpath2 = document.getElementById("gkidzigguratpath2");
  const mptab = document.getElementById("mptab");
  const bsstab = document.getElementById("bsstab");
  const mpid = document.getElementById("mpid");
  const mpvalue = document.getElementById("mpvalue");
  const bssid = document.getElementById("bssid");
  const bssvalue = document.getElementById("bssvalue");
  const buff1 = document.getElementById("buff1");
  const buff2 = document.getElementById("buff2");
  const buff3 = document.getElementById("buff3");
  const buff4 = document.getElementById("buff4");
  const buff5 = document.getElementById("buff5");
  const buff6 = document.getElementById("buff6");
  const buff7 = document.getElementById("buff7");
  const buffbypass1 = document.getElementById("buffbypass1");
  const buffbypass2 = document.getElementById("buffbypass2");
  const buffbypass3 = document.getElementById("buffbypass3");
  const buffbypass4 = document.getElementById("buffbypass4");
  const buffbypass5 = document.getElementById("buffbypass5");
  const buffbypass6 = document.getElementById("buffbypass6");
  const buffbypass7 = document.getElementById("buffbypass7");
  const starttimerhour = document.getElementById("starttimerhour");
  const starttimermin = document.getElementById("starttimermin");

  // This variable stores all the data.
  let data = `1)XML Profile Fight back:
${profile1.value || "empty"}
------------------------------------------------------------------------------------------------
2)XML Profile Active:
${profile2.value || "empty"}
------------------------------------------------------------------------------------------------
3)GamePath:
${gamepath.value || "empty"}
------------------------------------------------------------------------------------------------
4)Username:
${userName.value || "empty"}
------------------------------------------------------------------------------------------------
5)pass:
${password.value || 0}
------------------------------------------------------------------------------------------------
6)LoadMap:
${loadMap.value || "empty"}
------------------------------------------------------------------------------------------------
7)GK-ID(TELEPORT TO HUNTING GROUNDS):
${gkId.value || 0}
8)TeleportPath[5]:
${gkpath1.value || "empty"}
${gkpath2.value || "empty"}
${gkpath3.value || "empty"}
${gkpath4.value || "empty"}
${gkpath5.value || "empty"}
------------------------------------------------------------------------------------------------
9)GK-ID2(FROM TOWN TO TOWN), OPTIONAL: e.g If you die in varka and spawn giran you want to return goddard and then tp hunting grounds.
${gkidtown.value || 0}
10)Teleportpath2[5](Use 9999 if not used):
${gktownpath1.value || "empty"}
${gktownpath2.value || "empty"}
${gktownpath3.value || "empty"}
${gktownpath4.value || "empty"}
${gktownpath5.value || "empty"}
------------------------------------------------------------------------------------------------
11)GK-ID3 ZIGGURAT(TELEPORT BETWEEN PATHS-EG. ZIGGURAT@catacombs) OPTIONAL:
${gkidziggurat.value || 0}
12)Teleportpath3[2]:
${gkidzigguratpath1.value || "empty"}
${gkidzigguratpath2.value || "empty"}
------------------------------------------------------------------------------------------------
13)BUFFER-ID:
${bufferid.value || 0}
14) BUFFS-PICKUP[7]:
${buff1.value || "empty"}
${buff2.value || "empty"}
${buff3.value || "empty"}
${buff4.value || "empty"}
${buff5.value || "empty"}
${buff6.value || "empty"}
${buff7.value || "empty"}
---------------------------------------------------------------------
15) BUFFS BYPASS INSTEAD OF PICKUP ON/OFF.
${bufferbypass_radio || 0}
14)BUFFS-BYPASS[7]: USING BYPASS METHOD. MAX 7 LINES - NO BLANKS/SPACES.
${buffbypass1.value || "empty"}
${buffbypass2.value || "empty"}
${buffbypass3.value || "empty"}
${buffbypass4.value || "empty"}
${buffbypass5.value || "empty"}
${buffbypass6.value || "empty"}
${buffbypass7.value || "empty"}
------------------------------------------------------------------------------------------------
15) BUYMP & BSS   ----   ON/OFF 1=ON , 0=OFF 
${mp_radio || 0}
16) GM SHOP ID:
${gmshopid.value || 0}
17) MP Buy TAB @GmSHOP
${mptab.value || "empty"}
18) Bss Buy TAB @GmSHOP
${bsstab.value || "empty"}
19) Mana potion ID - (usually:726/725/728) and Value(how many)
${mpid.value || 0}
${mpvalue.value || 0}
20) Spiritshot ID - (default:: BssB:3950,BssA:3951,BssS:3952 , ssS:1467) and value
${bssid.value || 0}
${bssvalue.value || 0}
--------------------------------------------------------------------------------------------------
21) Auto-Login ON:1 , OFF:0
${autologin_radio || 0}
--------------------------------------------------------------------------------------------------
22) Random movement while hitting mobs ON:1 , OFF:0
${randommove_radio || 0}
--------------------------------------------------------------------------------------------------
23) GK2(town to town) ON/OFF
${gktown_radio || 0}
--------------------------------------------------------------------------------------------------
24) GK3(Ziggurat) ON/OFF
${gkziggurat_radio || 0}
--------------------------------------------------------------------------------------------------
                                   ALT+B SETTINGS
If you enable alt+b settings all previous teleports,buffers are automatic disabled.
25) ENABLE ALT+B ON:1 , OFF:0
${bufferbypassaltb_radio || 0}
--------------------------------------------------------------------------------------------------
26) TELEPORT[5]:
${gkpath1.value || "empty"}
${gkpath2.value || "empty"}
${gkpath3.value || "empty"}
${gkpath4.value || "empty"}
${gkpath5.value || "empty"}
--------------------------------------------------------------------------------------------------
27) BUFFS[8]:
${buffbypass1.value || "empty"}
${buffbypass2.value || "empty"}
${buffbypass3.value || "empty"}
${buffbypass4.value || "empty"}
${buffbypass5.value || "empty"}
${buffbypass6.value || "empty"}
${buffbypass7.value || "empty"}
_bbs_buffer_bp?skill=78905346
--------------------------------------------------------------------------------------------------
28)Hunting grounds rebuff, no soe. [Buffbook on f12] ---- ON/OFF 1=ON , 0=OFF 
${huntingrebuff_radio || 0}
--------------------------------------------------------------------------------------------------
29)Soe if bss/ss-mana pot is low  ---- ON/OFF 1=ON , 0=OFF [NOT WORKING PROPERLY ATM. Problem found at While after rebuff]
${soeiflow_radio || 0}
--------------------------------------------------------------------------------------------------
30)Set Script's Start time using 24h system and minutes also(1-24h and 1-59minutes). ---- ON/OFF 1=ON , 0=OFF 
${starttimer_radio || 0}
Set Hours:
${starttimerhour.value || "empty"}
Set Minutes:
${starttimermin.value || "empty"}
======================================NO BLANKS/SPACES. DO NOT DELETE LINES============================================================`;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
