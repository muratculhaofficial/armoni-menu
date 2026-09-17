const menuData = [
  {
    category: "Tostlar",
    items: [
      {
        name: "Dana Sucuklu Karışık Tost",
        description: "Bazlama ekmeği, dana sucuk, kaşar peyniri, ketçap, mayonez ve salatalık turşusu",
        price: "130 ₺"
      },
      {
        name: "Kaşarlı Tost",
        description: "Bazlama ekmeği, kaşar peyniri, ketçap, mayonez ve salatalık turşusu",
        price: "120 ₺"
      }
    ]
  },
  {
    category: "Burger",
    items: [
      {
        name: "Et Burger",
        description: "Dana köfte, cheddar peyniri, karamelize soğan, marul, domates, turşu, patates kızartması ve Armoni özel sos",
        price: "300 ₺"
      },
      {
        name: "Chicken Burger",
        description: "Çıtır tavuk, cheddar peyniri, marul, turşu, domates, burger sos ve patates kızartması",
        price: "250 ₺"
      },
      {
        name: "BBQ Chicken Burger",
        description: "Çıtır tavuk göğsü, barbekü sos, cheddar peyniri, karamelize soğan, turşu, marul ve patates kızartması",
        price: "280 ₺"
      },
      {
        name: "BBQ Et Burger",
        description: "Dana köfte, BBQ sos, cheddar peyniri, karamelize soğan, marul, domates, turşu ve patates kızartması",
        price: "300 ₺"
      }
    ]
  },
  {
    category: "Pilav",
    items: [
      {
        name: "Tavuk & Pilav",
        description: "Tavuk göğsü, nohutlu pilav, turşu, mısır, ketçap ve mayonez",
        price: "130 ₺"
      },
      {
        name: "Köri Soslu Tavuk & Pilav",
        description: "Tavuk, pilav, mantar, krema, köri sos, kapya ve yeşil biber, turşu ve tereyağı",
        price: "140 ₺"
      },
      {
        name: "Soya Soslu Tavuk & Pilav",
        description: "Tavuk, pilav, mantar, krema, soya sos, kapya ve yeşil biber, turşu ve tereyağı",
        price: "130 ₺"
      }
    ]
  },
  {
    category: "Makarna",
    items: [
      {
        name: "Fettuccine Alfredo",
        description: "Fettuccine makarna, tavuk, mantar, krema, parmesan peyniri ve tereyağı",
        price: "200 ₺"
      },
      {
        name: "Pesto Soslu Makarna",
        description: "Penne makarna, pesto sos, krema, parmesan peyniri ve tereyağı",
        price: "180 ₺"
      },
      {
        name: "Spaghetti Napolitana",
        description: "Spaghetti makarna, Napoliten sos, parmesan peyniri, taze fesleğen ve tereyağı",
        price: "230 ₺"
      }
    ]
  },
  {
    category: "Ekmek Arası Izgara Menü",
    items: [
      {
        name: "Ekmek Arası Tavuk Izgara",
        description: "Tavuk bonfile, domates, biber, soğan, marul ve yanında patates kızartması",
        price: "150 ₺"
      },
      {
        name: "Ekmek Arası Dana Köfte Izgara",
        description: "5 adet dana köfte, sumaklı soğan, domates, biber, maydanoz ve yanında patates kızartması",
        price: "180 ₺"
      },
      {
        name: "Ekmek Arası Kaşarlı Dana Köfte Izgara",
        description: "5 adet dana köfte, kaşar peyniri, sumaklı soğan, domates, biber, maydanoz ve yanında patates kızartması",
        price: "190 ₺"
      },
      {
        name: "Ekmek Arası Dana Sucuk Izgara",
        description: "4 adet dana parmak sucuk, soğan, domates, biber, maydanoz ve yanında patates kızartması",
        price: "160 ₺"
      }
    ]
  },
  {
    category: "Izgara Dürümler",
    items: [
      {
        name: "Tavuk Izgara Dürüm",
        description: "Tavuk bonfile, domates, biber, soğan, marul, sos ve yanında patates kızartması",
        price: "160 ₺"
      },
      {
        name: "Barbekü Soslu Tavuk Izgara Dürüm",
        description: "Tavuk bonfile, barbekü sos, cheddar peyniri, marul ve yanında patates kızartması",
        price: "160 ₺"
      },
      {
        name: "Kaşarlı Tavuk Izgara Dürüm",
        description: "Tavuk bonfile, kaşar peyniri, özel sos, marul ve yanında patates kızartması",
        price: "170 ₺"
      },
      {
        name: "Tavuk Wrap Dürüm",
        description: "Tavuk, mantar, biber, kapya biber, krema, soya sosu, kaşar peyniri, marul ve yanında patates kızartması",
        price: "200 ₺"
      },
      {
        name: "BBQ Tavuk Wrap Dürüm",
        description: "Tavuk, mantar, biber, kapya biber, krema, soya sosu, kaşar peyniri, barbekü sos, marul ve yanında patates kızartması",
        price: "200 ₺"
      },
      {
        name: "Dana Ciğer Dürüm",
        description: "Dana ciğeri, sumaklı soğan, biber, domates ve yanında patates kızartması",
        price: "250 ₺"
      },
      {
        name: "Dana Et Dürüm",
        description: "Dana eti, soğan, biber, domates, yeşillik ve yanında patates kızartması",
        price: "260 ₺"
      }
    ]
  },
  {
    category: "Izgara Menü",
    items: [
      {
        name: "Izgara Tavuk Kanat",
        description: "Tavuk kanat (250 g), biber, domates, pilav, lavaş ve patates kızartması",
        price: "300 ₺"
      },
      {
        name: "Izgara Tavuk Şiş",
        description: "Tavuk bonfile ve göğüs (250 g), biber, domates, pilav, lavaş ve patates kızartması",
        price: "280 ₺"
      },
      {
        name: "Izgara Tavuk Pirzola",
        description: "Tavuk pirzola (250 g), biber, domates, pilav, lavaş ve patates kızartması",
        price: "290 ₺"
      },
      {
        name: "Izgara Dana Ciğer",
        description: "Dana ciğer (250 g), biber, domates, pilav, lavaş ve patates kızartması",
        price: "400 ₺"
      },
      {
        name: "Izgara Dana Pirzola",
        description: "Dana pirzola (250 g), biber, domates, pilav, lavaş ve patates kızartması",
        price: "450 ₺"
      },
      {
        name: "Izgara Dana Köfte",
        description: "8 adet dana köfte, biber, domates, soğan, pilav, lavaş ve patates kızartması",
        price: "400 ₺"
      }
    ]
  },
  {
    category: "İçecekler",
    items: [
      { name: "Kutu Coca-Cola", description: "", price: "" },
      { name: "Coca-Cola 1 Litre", description: "", price: "" },
      { name: "Kutu Fanta", description: "", price: "" },
      { name: "Fanta 1 Litre", description: "", price: "" },
      { name: "Kutu Karışık Meyve Suyu", description: "", price: "" },
      { name: "Sprite", description: "", price: "" },
      { name: "Fuse Tea Mango", description: "", price: "" },
      { name: "Fuse Tea Limon", description: "", price: "" },
      { name: "Ayran", description: "", price: "" },
      { name: "Su", description: "", price: "" },
      { name: "Sade Soda", description: "", price: "" },
      { name: "Limonlu Soda", description: "", price: "" }
    ]
  }
];

const categoryImageMap = {
  "Tostlar": "menu-tost.jpg",
  "Pilav": "menu-pilav.jpg",
  "Makarna": "menu-makarna.jpg",
  "Ekmek Arası Izgara Menü": "menu-ekmek-arasi.jpg",
  "Izgara Dürümler": "menu-durum.jpg",
  "Izgara Menü": "menu-izgara.jpg",
  "İçecekler": "menu-icecek.jpg"
};

const itemImageMap = {
  "Et Burger": "menu-burger.jpg",
  "Chicken Burger": "menu-burger.jpg",
  "BBQ Chicken Burger": "menu-burger-bbq.jpg",
  "BBQ Et Burger": "menu-burger-bbq.jpg"
};

const tabs = document.getElementById("categoryTabs");
const grid = document.getElementById("menuGrid");

function imageForItem(item, category) {
  return itemImageMap[item.name] || categoryImageMap[category] || "";
}

function renderTabs(activeCategory) {
  tabs.innerHTML = "";
  menuData.forEach(group => {
    const button = document.createElement("button");
    button.className = "tab" + (group.category === activeCategory ? " active" : "");
    button.textContent = group.category;
    button.addEventListener("click", () => {
      renderTabs(group.category);
      renderMenu(group.category);
    });
    tabs.appendChild(button);
  });
}

function renderMenu(category) {
  const group = menuData.find(g => g.category === category);
  grid.innerHTML = "";

  if (!group || group.items.length === 0) {
    grid.innerHTML = `
      <div class="empty-menu">
        <strong>${category}</strong><br>
        Bu kategoriye ait ürünler yakında eklenecek.
      </div>
    `;
    return;
  }

  group.items.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-item";

    const imageSrc = imageForItem(item, category);
    if (imageSrc) {
      const media = document.createElement("div");
      media.className = "menu-photo-wrap";

      const img = document.createElement("img");
      img.className = "menu-photo";
      img.src = imageSrc;
      img.alt = item.name;
      img.loading = "lazy";
      img.decoding = "async";

      media.appendChild(img);
      card.appendChild(media);
    }

    const body = document.createElement("div");
    body.className = "menu-body";

    const head = document.createElement("div");
    head.className = "menu-head";

    const title = document.createElement("h3");
    title.textContent = item.name;
    head.appendChild(title);

    if (item.price) {
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = item.price;
      head.appendChild(price);
    }

    body.appendChild(head);

    if (item.description) {
      const description = document.createElement("p");
      description.textContent = item.description;
      body.appendChild(description);
    }

    card.appendChild(body);
    grid.appendChild(card);
  });
}

const firstCategory = menuData[0]?.category;
if (firstCategory) {
  renderTabs(firstCategory);
  renderMenu(firstCategory);
}

document.getElementById("year").textContent = new Date().getFullYear();
