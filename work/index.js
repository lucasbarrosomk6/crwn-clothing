const Word = document.getElementById("searchInput").value;

function makeArr() {
  const padlockInventory = [
    { name: "72ib/40hb40", inventory: "3" },
    { name: "83al/45", inventory: "1" },
    { name: "80ti/50", inventory: "1" },
    { name: "90rk/Titalium", inventory: "1" },
    { name: "83wp/53", inventory: "1" },
    { name: "83mb/50ka4721", inventory: "1" },
    { name: "80ti/hb63", inventory: "1" },
    { name: "41/40hb50", inventory: "1" },
    { name: '41/50 2"', inventory: "1" },
    { name: "abus 41/40", inventory: "1" },
    { name: "83ic/45 w/o cyl", inventory: "1" },
    { name: "26/70", inventory: "1" },
    { name: "LSDA brass rekeyable padlock 1 3/4", inventory: "1" },
    { name: "64TI/40", inventory: "1" },
    { name: "92/65", inventory: "1" },
    { name: "83ALIC/40 W/O CYL NO.5", inventory: "1" },
    { name: "83WP/63 HB63", inventory: "8" },
    { name: "65/40 HB63", inventory: "1" },
    { name: "83WP/53#6000 S2B", inventory: "1" },
    { name: "85/40 1 1/2", inventory: "16" },
    { name: "NO.22-911", inventory: "6" },
    { name: "NO.23-933", inventory: "2" },
    { name: "ART.306 45MM Viro 13/4", inventory: "5" },
    { name: "master 27", inventory: "1" },
    { name: "master 21", inventory: "3" },
    { name: "premium brass padlock kasp security", inventory: "10" },
    { name: "znmd3 A1100", inventory: "7" },
    { name: "83WP/53HB63", inventory: "10" },
    { name: "GUARD NO.836 L 50MM", inventory: "17" },
    { name: "GUARD NO.834 40MM", inventory: "8" },
    { name: "GUARD NO. 836", inventory: "7" },
    { name: "GUARD NO. 936", inventory: "1" },
    { name: "GUARD NO. 835", inventory: "3" },
    { name: "65/50 KA 5100", inventory: "10" },
    { name: "65/50 KA 5101", inventory: "12" },
    { name: "65/50 KA 5102", inventory: "6" },
    { name: "65/40 HB63 KA 406", inventory: "1" },
    { name: "70/45 KA 6401", inventory: "6" },
    { name: "70/45 KA 6402", inventory: "6" },
    { name: "70/45 KA 6404", inventory: "2" },
    { name: "70/45 HB63 KA 6401", inventory: "3" },
    { name: "70/45 HB63 KA 6402", inventory: "12" },
    { name: "70/45 HB63 KA 6403", inventory: "6" },
    { name: "70/50", inventory: "5" },
    { name: "83WP/53 300", inventory: "2" },
    { name: "85/50 KA 954", inventory: "2" },
    { name: "65/45 KA 452", inventory: "1" },
    { name: "65/40 KA 404", inventory: "1" },
    { name: "65/30 KA 305", inventory: "1" },
    { name: "65/30 KA 304", inventory: "1" },
    { name: "85/MB 40", inventory: "1" },
    { name: "21W0", inventory: "1" },
    { name: "MASTERLOCK 6125", inventory: "3" },
    { name: "MASTERLOCK 6621 WO", inventory: "1" },
    { name: "MASTERLOCK 6121 LJ", inventory: "6" },
    { name: "MASTERLOCK 6621 LJWO", inventory: "2" },
    { name: "MASTERLOCK 6121 WO", inventory: "1" },
    { name: "MASTERLOCK 21 WO", inventory: "9" },
    { name: "MASTERLOCK 21 LJ", inventory: "3" },
    { name: "MASTERLOCK 1", inventory: "1" },
    { name: "MASTERLOCK 1 UP", inventory: "1" },
    { name: "MASTERLOCK 21", inventory: "1" },
    { name: "MASTERLOCK 1 UPLJ", inventory: "2" }
  ];
  let arrString = JSON.stringify(padlockInventory)
    .toLowerCase()
    .split("},{");
  return arrString;
}

function displaySearch() {
  let word = document.getElementById("searchInput").value;
  let arr = makeArr();

  return arr.filter(name => name.includes(word));
}
