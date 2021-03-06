const gmshopid = document.getElementById("gmshopid");
const gkidtown = document.getElementById("gkidtown");
const gkId = document.getElementById("gkid");
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
const teleports = document.querySelectorAll(".teleports");
const tpsbypass = document.querySelectorAll(".tpsbypass");
const bufferbypassaltb_radio_id1 = document.getElementById(
  "bufferbypassaltb_radio_id1"
);
const bufferbypassaltb_radio_id2 = document.getElementById(
  "bufferbypassaltb_radio_id2"
);
const defaultValue = `999999, -999999, -9999`;
const moveto2 = document.getElementById("moveto2");
const redstarbypass = document.querySelectorAll(".redstarbypass");

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
    // If checkbox is on value = 1 if off value =0
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    mp_radio = e.target.value;
    //gmshop id on change enabled/disbled
    gmshopid.disabled != false
      ? (gmshopid.disabled = false)
      : (gmshopid.disabled = true);
    //gmshop list on change enabled/disbled
    gmshop.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});

// GK TOWN TO TOWN RADIO
document.querySelectorAll(".gktown_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    gktown_radio = e.target.value;
    //gktown to town id on change enabled/disbled
    gkidtown.disabled != false
      ? (gkidtown.disabled = false)
      : (gkidtown.disabled = true);
    //gktown to town path list on change enabled/disbled
    gktownpath.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});
// GK ZIGGURAT
document.querySelectorAll(".gkziggurat_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    gkziggurat_radio = e.target.value;
    //gkziggurat to town id on change enabled/disbled
    gkidziggurat.disabled != false
      ? (gkidziggurat.disabled = false)
      : (gkidziggurat.disabled = true);
    //gkziggurat path list on change enabled/disbled
    gkzigguratpath.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
    moveto2.disabled != false
      ? (moveto2.disabled = false)
      : (moveto2.disabled = true);
  });
});
// BUFFER BYPASS
document.querySelectorAll(".bufferbypass_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0. Also resets buffer id value because in txt there is 1 input for buffer and bypass check line 280
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    bufferbypass_radio = e.target.value;
    bufferid.value = "";
    //buffer on bypass mode id on change enabled/disbled
    //on change buffer/gk id enable/disable
    if (bufferbypassid.disabled != false) {
      bufferbypassid.disabled = false;
      bufferid.disabled = true;
      gkId.disabled = true;
    } else {
      bufferbypassid.disabled = true;
      bufferid.disabled = false;
      gkId.disabled = false;
    }
    // if checkbox = 0 buffer bypass id is disabled
    if (bufferbypass_radio == 0) {
      bufferbypassid.disabled = true;
    }
    // if checkbox = 1 and alt+b checkbox =1 buffer bypass id is disabled
    if (bufferbypass_radio == 1 && bufferbypassaltb_radio == 1) {
      bufferbypassid.disabled = true;
    }
    // if checkbox = 0 and alt+b checkbox =1 buffer/gk npc id is enabled
    if (bufferbypass_radio == 0 && bufferbypassaltb_radio == 1) {
      bufferid.disabled = false;
      gkId.disabled = false;
    }

    //disable/enable buffs/tps and staff
    buffsbypass.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
    buffs.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
    teleports.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
    bufferbypassaltb.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
    tpsbypass.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });

    // Adds/Removes the red stars
    redstarbypass.forEach((each) => {
      each.textContent != "*"
        ? (each.textContent = "*")
        : (each.textContent = "");
    });
  });
});

// AUTO-Login
document.querySelectorAll(".autologin_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    autologin_radio = e.target.value;
    // autologin info enable/disable
    autologindisabled.forEach((each) => {
      each.disabled != false ? (each.disabled = false) : (each.disabled = true);
    });
  });
});
// Random Movement
document.querySelectorAll(".randommove_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    randommove_radio = e.target.value;
  });
});
// ALT+B BYPASS
bufferbypassaltb.forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    bufferbypassaltb_radio = e.target.value;
    //if alt b radio 1 buffer npc by pass is disabled and vice verca
    if (bufferbypassaltb_radio == 1) bufferbypassid.disabled = true;
    if (bufferbypassaltb_radio == 0) bufferbypassid.disabled = false;
  });
});

// Hunting grounds rebuff
document.querySelectorAll(".huntingrebuff_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    huntingrebuff_radio = e.target.value;
  });
});
// Soe if mana is low
document.querySelectorAll(".soeiflow_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    soeiflow_radio = e.target.value;
  });
});
// System 24h timer
document.querySelectorAll(".starttimer_radio").forEach((check) => {
  check.addEventListener("change", function (e) {
    // If checkbox is on value = 1 if off value =0.
    e.target.value == 0 ? (e.target.value = 1) : (e.target.value = 0);
    starttimer_radio = e.target.value;
    //enable disable start timer settings
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
  const tpbypass1 = document.getElementById("tpbypass1");
  const tpbypass2 = document.getElementById("tpbypass2");
  const tpbypass3 = document.getElementById("tpbypass3");
  const tpbypass4 = document.getElementById("tpbypass4");
  const tpbypass5 = document.getElementById("tpbypass5");

  // This variable stores all the data.
  let data = `1)XML Profile Fight back:
${profile1.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
2)XML Profile Active:
${profile2.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
3)GamePath:
${gamepath.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
4)Username:
${userName.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
5)pass:
${password.value.trim() || 0}
------------------------------------------------------------------------------------------------
6)LoadMap:
${loadMap.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
7)GK-ID(TELEPORT TO HUNTING GROUNDS):
${gkId.value?.trim() || 0}
8)TeleportPath[5]:
${gkpath1.value.trim() || "empty"}
${gkpath2.value.trim() || "empty"}
${gkpath3.value.trim() || "empty"}
${gkpath4.value.trim() || "empty"}
${gkpath5.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
9)GK-ID2(FROM TOWN TO TOWN), OPTIONAL: e.g If you die in varka and spawn giran you want to return goddard and then tp hunting grounds.
${gkidtown.value?.trim() || 0}
10)Teleportpath2[5](Use 9999 if not used):
${gktownpath1.value.trim() || "empty"}
${gktownpath2.value.trim() || "empty"}
${gktownpath3.value.trim() || "empty"}
${gktownpath4.value.trim() || "empty"}
${gktownpath5.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
11)GK-ID3 ZIGGURAT(TELEPORT BETWEEN PATHS-EG. ZIGGURAT@catacombs) OPTIONAL:
${gkidziggurat.value?.trim() || 0}
12)Teleportpath3[2]:
${gkidzigguratpath1.value.trim() || "empty"}
${gkidzigguratpath2.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
13)BUFFER-ID:
${bufferid.value.trim() || bufferbypassid.value.trim() || 0}
14) BUFFS-PICKUP[7]:
${buff1.value.trim() || "empty"}
${buff2.value.trim() || "empty"}
${buff3.value.trim() || "empty"}
${buff4.value.trim() || "empty"}
${buff5.value.trim() || "empty"}
${buff6.value.trim() || "empty"}
${buff7.value.trim() || "empty"}
---------------------------------------------------------------------
15) BUFFS BYPASS INSTEAD OF PICKUP ON/OFF.
${bufferbypass_radio?.trim() || 0}
14)BUFFS-BYPASS[7]: USING BYPASS METHOD. MAX 7 LINES - NO BLANKS/SPACES.
${buffbypass1.value.trim() || "empty"}
${buffbypass2.value.trim() || "empty"}
${buffbypass3.value.trim() || "empty"}
${buffbypass4.value.trim() || "empty"}
${buffbypass5.value.trim() || "empty"}
${buffbypass6.value.trim() || "empty"}
${buffbypass7.value.trim() || "empty"}
------------------------------------------------------------------------------------------------
15) BUYMP & BSS   ----   ON/OFF 1=ON , 0=OFF 
${mp_radio?.trim() || 0}
16) GM SHOP ID:
${gmshopid.value.trim() || 0}
17) MP Buy TAB @GmSHOP
${mptab.value.trim() || "empty"}
18) Bss Buy TAB @GmSHOP
${bsstab.value.trim() || "empty"}
19) Mana potion ID - (usually:726/725/728) and Value(how many)
${mpid.value.trim() || 0}
${mpvalue.value.trim() || 0}
20) Spiritshot ID - (default:: BssB:3950,BssA:3951,BssS:3952 , ssS:1467) and value
${bssid.value.trim() || 0}
${bssvalue.value.trim() || 0}
--------------------------------------------------------------------------------------------------
21) Auto-Login ON:1 , OFF:0
${autologin_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
22) Random movement while hitting mobs ON:1 , OFF:0
${randommove_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
23) GK2(town to town) ON/OFF
${gktown_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
24) GK3(Ziggurat) ON/OFF
${gkziggurat_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
                                   ALT+B SETTINGS
If you enable alt+b settings all previous teleports,buffers are automatic disabled.
25) ENABLE ALT+B ON:1 , OFF:0
${bufferbypassaltb_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
26) TELEPORT[5]:
${tpbypass1.value.trim() || "empty"}
${tpbypass2.value.trim() || "empty"}
${tpbypass3.value.trim() || "empty"}
${tpbypass4.value.trim() || "empty"}
${tpbypass5.value.trim() || "empty"}
--------------------------------------------------------------------------------------------------
27) BUFFS[8]:
${buffbypass1.value.trim() || "empty"}
${buffbypass2.value.trim() || "empty"}
${buffbypass3.value.trim() || "empty"}
${buffbypass4.value.trim() || "empty"}
${buffbypass5.value.trim() || "empty"}
${buffbypass6.value.trim() || "empty"}
${buffbypass7.value.trim() || "empty"}
_bbs_buffer_bp?skill=78905346
--------------------------------------------------------------------------------------------------
28)Hunting grounds rebuff, no soe. [Buffbook on f12] ---- ON/OFF 1=ON , 0=OFF 
${huntingrebuff_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
29)Soe if bss/ss-mana pot is low  ---- ON/OFF 1=ON , 0=OFF [NOT WORKING PROPERLY ATM. Problem found at While after rebuff]
${soeiflow_radio?.trim() || 0}
--------------------------------------------------------------------------------------------------
30)Set Script's Start time using 24h system and minutes also(1-24h and 1-59minutes). ---- ON/OFF 1=ON , 0=OFF 
${starttimer_radio?.trim() || 0}
Set Hours:
${starttimerhour.value?.trim() || 0}
Set Minutes:
${starttimermin.value?.trim() || 0}
======================================NO BLANKS/SPACES. DO NOT DELETE LINES============================================================`;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "settings.txt"; // The file to save the data.

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

//savefile for coords MoveTo

let saveFile2 = () => {
  const moveto = document.getElementById("moveto");

  // let data2 = moveto.value;

  let data2;

  let text = moveto.value;
  let lines = text.split(/\r|\r\n|\n/);
  let count = lines.length;
  // console.log(count);
  if (count == 15) data2 = text;
  if (count < 15)
    data2 = `${text || defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}`;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data2], { type: "text/plain" });
  const sFileName2 = "MoveTo.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName2;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
//save file for coords Moveto2

let saveFile3 = () => {
  // const moveto2 = document.getElementById("moveto2");

  let data3;

  let text = moveto2.value;
  let lines = text.split(/\r|\r\n|\n/);
  let count = lines.length;
  // console.log(count);
  if (count == 5) data3 = text;
  if (count < 5)
    data3 = `${text || defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}
${defaultValue}`;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data3], { type: "text/plain" });
  const sFileName3 = "MoveTo2.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName3;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
