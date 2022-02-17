let html;
let html2;
document.querySelectorAll(".html").forEach((check) => {
  check.addEventListener("change", function (e) {
    console.log(e.target.value);
    html = e.target.value;
  });
});
document.querySelectorAll(".html2").forEach((check) => {
  check.addEventListener("change", function (e) {
    console.log(e.target.value);
    html2 = e.target.value;
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
${html || 0}
${html2 || 0}`;

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
