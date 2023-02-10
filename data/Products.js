const Products = [
    {
        id:"1",
        name:"เสื้อฟุตบอล changsuek",
        image:
        "https://cf.shopee.co.th/file/626a2dbc43db04556fb87dfaf3a622cd",
        description:
        "เสื้อฟุตบอล โลโก้ช้างศึก 2021 ลวดลายเดียวกับที่ทัพนักเตะทีมชาติไทยใส่ฝึกซ้อม โดดเด่นด้วยคุณสมบัติของเส้นใย 100% Polyester มีน้ำหนักเบา ช่วยระบายเหงื่อและระบายความร้อนได้เป็นอย่างดี",
        price:199,
        countInStock:9,//จำนวน
        rating:4,//ดาว
        numReviews:20,//รีวิว
        isAvailable: true,
    },
    {
        id:"2",
        name:"SP-8001 ลำโพงบลูทูธ",
        image:"https://th-test-11.slatic.net/p/31c7dd91516ce70618ff4563e998f500.jpg",
        description:"SP-8001  ลำโพงบลูทูธช่วยสอน มีหูหิ้ว รีโมทพร้อมไมค์โครโฟน และสามารถปรับ Echo ได้ เหมาะกับการร้องเพลงและการสังสรรค์",
        price:399,
        countInStock:0,
        rating:3,
        numReviews:15,
        isAvailable: false,
    },
    {
        id:"3",
        name:"เก้าอี้ปิคนิค พับได้",
        image:"https://cf.shopee.co.th/file/d814fcc8e522b5e68d67cd8c81ed65eb",
        description:"เก้าอี้สนามพับได้ พร้อมที่รองแขน ที่วางแก้วด้านข้างขนาด 50x50x80 ซม.รับน้ำหนักได้ 120 กก.เนื้อผ้าผลิตจาก เส้นใยโพลีเอสเตอร์",
        price:195,
        countInStock:10,
        rating:4,
        numReviews:50,
        isAvailable: true,
    },
    {
        id:"4",
        name:"Champion เสื้อกันหนาวมีฮู้ด",
        image:"https://cf.shopee.co.th/file/74612b91b0e927aef7dc3c27f8508adb_tn",
        description:"สินค้าที่เราขายมาจากผลิตภัณฑ์ดั้งเดิมในราคาลดพิเศษ ยี่ห้อ: Championการผลิตผ้าออริจินัลคุณภาพสูง 100%**ขายดี**จัดส่งภายใน 5 วันทำการ",
        price:699,
        countInStock:23,
        rating:2,
        numReviews:14,
        isAvailable: true,
    },
    {
        id:"5",
        name:"รองเท่าผ้าใบ baoji",
        image:"https://cf.shopee.co.th/file/53cea04175cb797ad54e3014eb3b6d55",
        description:"เรามีประสบการณ์มากมายและผลิตภัณฑ์คุณภาพสูงเน้นคุณภาพและราคาต่ำ!นำประสบการณ์การช็อปปิ้งที่ดีที่สุดมาให้คุณ！ปรึกษาร้านค้าสำหรับคำถามใด ๆ",
        price:299,
        countInStock:8,
        rating:5,
        numReviews:10,
        isAvailable: true,
    },
    {
        id:"6",
        name:"WISHDOIT นาฬิกาข้อมือ",
        image:"https://cf.shopee.co.th/file/23a0251d1216de817a03d803fb06984a",
        description:"WISHDOIT แบรนด์ดั้งเดิมอย่างเป็นทางการ !!!เราจะแพ็คและจัดส่งให้คุณภายใน 24 ชั่วโมง ทั้งหมด จัดส่งฟรี!!!ที่รัก. คุณสามารถสั่งซื้อได้อย่างแน่นอน",
        price:520,
        countInStock:5,
        rating:2,
        numReviews:22,
        isAvailable: true,
    },
    {
        id:"7",
        name:"การีนาเชลล์ 450 Shells",
        image:"https://cf.shopee.co.th/file/29a4c96e0870af39debf8a3e9c417a3e_tn",
        description:"การีนาเชลล์ ถูกที่สุด ที่ Shopee ที่เดียวเท่านั้น เติมเชลล์ให้พร้อม แล้วไปมันส์กับการีนาเกมกันเลย",
        price:264,
        countInStock:5,
        rating:3,
        numReviews:43,
        isAvailable: true,
    },
    {
        id:"8",
        name:"หูฟัง i7S TWS",
        image:"https://cf.shopee.co.th/file/67bdbb24f2c8822cd41915d22d608c74",
        description:"หูฟังบลูทูธ i7S TWS แบบคู่พร้อมกล่องชาร์จ สุดยอดหูฟังยุคใหม่ ดีไซน์ล้ำเทคโนโลยีล่าสุด ซื้อ i7S TWS หูฟังบลูทูธแบบคู่ที่มาพร้อมบลูทูธเวอร์ชั่นล่าสุด",
        price:89,
        countInStock:12,
        rating:4,
        numReviews:7,
        isAvailable: true,
    },{
        id:"9",
        name:"กระเป๋าสะพายข้าง",
        image:"https://cf.shopee.co.th/file/ccdf78e5e343057ff0fe710749b25652",
        description:"กระเป๋าสะพายข้าง สไตล์เกาหลี สำหรับผู้ชาย",
        price:92,
        countInStock:20,
        rating:2,
        numReviews:10,
        isAvailable: true,
    },{
        id:"10",
        name:"Ozoopu กาต้มน้ำไฟฟ้าสแตนเลส 2 ลิตร",
        image:"https://cf.shopee.co.th/file/8afb566d1c00552e465ce78f7c7f2550",
        description:"กาต้มน้ำไฟฟ้าความจุ 2 ลิตร ใช้งานง่าย สะดวกสบายสแตนเลสสีเงินเงา- ผลิตจาก Stainless Steel - หยุดการทำงานอัตโนมัติเมื่อน้ำเดือด",
        price:120,
        countInStock:11,
        rating:5,
        numReviews:9,
        isAvailable: true,
    },
]


export default Products;