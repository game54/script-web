const gmshopid = document.getElementById("gmshopid");
const gkidtown = document.getElementById("gkidtown");
const gktownpath = document.querySelectorAll(".gktownpath");
const gmshop = document.querySelectorAll(".gmshop");
const gkidziggurat = document.getElementById("gkidziggurat");
const gkzigguratpath = document.querySelectorAll(".gkzigguratpath");

let mp_radio;
let gktown_radio;
let gkziggurat_radio;

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
${password.value || "empty"}
------------------------------------------------------------------------------------------------
6)LoadMap:
${loadMap.value || "empty"}
------------------------------------------------------------------------------------------------
7)GK-ID(TELEPORT TO HUNTING GROUNDS):
${gkId.value || "empty"}
8)TeleportPath[5]:
${gkpath1.value || "empty"}
${gkpath2.value || "empty"}
${gkpath3.value || "empty"}
${gkpath4.value || "empty"}
${gkpath5.value || "empty"}
------------------------------------------------------------------------------------------------
9)GK-ID2(FROM TOWN TO TOWN), OPTIONAL: e.g If you die in varka and spawn giran you want to return goddard and then tp hunting grounds.
${gkidtown.value || "empty"}
10)Teleportpath2[5](Use 9999 if not used):
${gktownpath1.value || "empty"}
${gktownpath2.value || "empty"}
${gktownpath3.value || "empty"}
${gktownpath4.value || "empty"}
${gktownpath5.value || "empty"}
------------------------------------------------------------------------------------------------
11)GK-ID3 ZIGGURAT(TELEPORT BETWEEN PATHS-EG. ZIGGURAT@catacombs) OPTIONAL:
${gkidziggurat.value || "empty"}
12)Teleportpath3[2]:
${gkidzigguratpath1.value || "empty"}
${gkidzigguratpath2.value || "empty"}
------------------------------------------------------------------------------------------------
13)BUFFER-ID:
32327
14) BUFFS-PICKUP[7]:
Restore
acumen
empower
cancel
acumen
shield
cancel
---------------------------------------------------------------------
15) BUFFS BYPASS INSTEAD OF PICKUP ON/OFF.
1
14)BUFFS-BYPASS[7]: USING BYPASS METHOD. MAX 7 LINES - NO BLANKS/SPACES.
_bbs_buffer_um?name=mage_prem&pre=1&target=Player
_bbs_buffer_bp?skill=22872065
_bbs_buffer_bp?skill=89325569
_bbs_buffer_bp?skill=89325569
_bbs_buffer_bp?skill=89325569
_bbs_buffer_bp?skill=92602369
_bbs_buffer_bp?skill=92602369
------------------------------------------------------------------------------------------------
15) BUYMP & BSS   ----   ON/OFF 1=ON , 0=OFF 
${mp_radio || 0}
16) GM SHOP ID:
${gmshopid.value || "empty"}
17) MP Buy TAB @GmSHOP
${mptab.value || "empty"}
18) Bss Buy TAB @GmSHOP
${bsstab.value || "empty"}
19) Mana potion ID - (usually:726/725/728) and Value(how many)
${mpid.value || "empty"}
${mpvalue.value || "empty"}
20) Spiritshot ID - (default:: BssB:3950,BssA:3951,BssS:3952 , ssS:1467) and value
${bssid.value || "empty"}
${bssvalue.value || "empty"}
--------------------------------------------------------------------------------------------------
21) Auto-Login ON:1 , OFF:0
0
--------------------------------------------------------------------------------------------------
22) Random movement while hitting mobs ON:1 , OFF:0
1
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
1
--------------------------------------------------------------------------------------------------
26) TELEPORT[5]:
Empty - Fill if needed
Empty - Fill if needed
Empty - Fill if needed
Empty - Fill if needed
Empty - Fill if needed
--------------------------------------------------------------------------------------------------
27) BUFFS[8]:
_bbs_buffer_um?name=mage_prem&pre=1&target=Player
_bbs_buffer_bp?skill=92602369
_bbs_buffer_bp?skill=91553795
_bbs_buffer_bp?skill=71106563
_bbs_buffer_bp?skill=69402627
_bbs_buffer_bp?skill=78905346
_bbs_buffer_bp?skill=23789569
_bbs_buffer_bp?skill=78905346
--------------------------------------------------------------------------------------------------
28)Hunting grounds rebuff, no soe. [Buffbook on f12] ---- ON/OFF 1=ON , 0=OFF 
0
--------------------------------------------------------------------------------------------------
29)Soe if bss/ss-mana pot is low  ---- ON/OFF 1=ON , 0=OFF [NOT WORKING PROPERLY ATM. Problem found at While after rebuff]
1
--------------------------------------------------------------------------------------------------
30)Set Script's Start time using 24h system and minutes also(1-24h and 1-59minutes). ---- ON/OFF 1=ON , 0=OFF 
1
Set Hours:
20
Set Minutes:
0
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
