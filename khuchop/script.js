function buy(pkg, price) {
  localStorage.setItem("pkg", pkg);
  localStorage.setItem("price", price);
  window.location.href = "order.html";
}

function loadOrder() {
  document.getElementById("pkg").value =
    localStorage.getItem("pkg");
  document.getElementById("price").value =
    localStorage.getItem("price");
}

function sendWhatsApp() {
  const msg = `
KH UC SHOP – YENİ SİFARİŞ

Paket: ${document.getElementById("pkg").value}
Qiymət: ${document.getElementById("price").value}
PUBG ID: ${document.getElementById("pubgId").value}
Server: ${document.getElementById("server").value}
Ödəniş: ${document.getElementById("payment").value}

Qəbz əlavə olunub
`;
  const url =
    "https://wa.me/994514235198?text=" +
    encodeURIComponent(msg);
  window.open(url, "_blank");
}
