const PLACES_DATABASE = [
    // --- 北海道・東北 ---
    { id: 'p01', category: "風光・自然", area: "北海道", title: "富良野・美瑛の丘", desc: "どこまでも続くパッチワークの丘とラベンダー畑。北の大自然を満喫できる絶景スポット。", image: "https://www.sankei.com/resizer/S4z4GO7OC1N_8TYak1b4tWr9RY8=/1200x0/smart/filters:quality(40)/cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/LGSELQAUUNMCFCPV2AQRS7PVVA.jpg", badge: "四季の彩り" },
    { id: 'p02', category: "風光・自然", area: "青森県", title: "奥入瀬渓流", desc: "苔むした岩肌と無数の滝が織りなす極上の渓流美。マイナスイオンあふれる散策路。", image: "https://towadako.or.jp/wp-content/uploads/2015/11/towadako-20151107132136.jpg", badge: "森の息吹" },
    { id: 'p03', category: "情緒・歴史", area: "岩手県", title: "平泉・中尊寺金色堂", desc: "奥州藤原氏の栄華を今に伝える黄金の極楽浄土。世界遺産にも登録された歴史的名所。", image: "https://www.nippon.com/hk/ncommon/contents/guide-to-japan/2049104/2049104_org.jpg", badge: "世界遺産" },
    { id: 'p04', category: "風光・自然", area: "宮城県", title: "松島湾の島々", desc: "日本三景の一つ。松尾芭蕉も愛した、穏やかな海に浮かぶ大小200以上の島々の景色。", image: "https://www.hokkaidolibrary.com/img/upload/Japan/200-093.jpg", badge: "日本三景" },
    { id: 'p05', category: "風光・自然", area: "秋田県", title: "田沢湖・辰子像", desc: "日本一の深さを誇る神秘的な瑠璃色の湖。黄金に輝く辰子像が湖畔に佇む。", image: "https://tazawako-kakunodate.com/wp-content/uploads/2025/11/85149a99e46aa9f8293884168ca38accf21293b34862dd5d67ea3a7d54e52264.jpg", badge: "神秘の湖" },
    { id: 'p06', category: "名湯・寛ぎ", area: "山形県", title: "銀山温泉", desc: "大正ロマン漂う木造多層の温泉旅館が立ち並ぶ。ガス灯が灯るノスタルジックな街並み。", image: "https://th.bing.com/th/id/R.9a3c815c7ad4f71c28f5e1c06bef84b7?rik=y6qXeszoIlOaFw&riu=http%3a%2f%2fcloudfront.zekkei-japan.jp%2fimages%2fspots%2fcolupq4v4shohi8t3neoa4rk952cz967z.jpg&ehk=S1eb20VRCYo5uPcwC%2bTBZBlFa%2fb0A1YtG3matzr7%2fWI%3d&risl=&pid=ImgRaw&r=0", badge: "大正ロマン" },
    { id: 'p07', category: "隠れ里・秘境", area: "福島県", title: "大内宿", desc: "茅葺き屋根の民家が街道沿いに並ぶ江戸時代の宿場町。名物の「ねぎそば」も人気。", image: "https://www.tohokukanko.jp/lsc/upfile/spot/0000/1546/1546_1_l.jpg", badge: "江戸宿場町" },

    // --- 関東 ---
    { id: 'p08', category: "情緒・歴史", area: "茨城県", title: "国営ひたち海浜公園", desc: "春には丘一面を青く染め上げるネモフィラ、秋にはコキアの紅葉が広がる絶景パーク。", image: "https://parkful.net/wp-content/uploads/hitachi_nemo04-1024x678.jpg" },
    { id: 'p09', category: "情緒・歴史", area: "栃木県", title: "日光東照宮", desc: "徳川家康を祀る豪華絢爛な神社。「見ざる・言わざる・聞かざる」の彫刻でも有名。", image: "https://s3-ap-northeast-1.amazonaws.com/thegate/2020/12/25/16/04/24/Nikko-Toshogu.jpg", badge: "豪華絢爛" },
    { id: 'p10', category: "名湯・寛ぎ", area: "群馬県", title: "草津温泉・湯畑", desc: "毎分約4,000リットルもの温泉が湧き出る日本有数の温泉街。湯煙漂う情緒ある景観。", image: "https://www.hotel-sakurai.co.jp/yubatake/images/home/img_cam01.jpg", badge: "日本三名泉" },
    { id: 'p11',
         category: "情緒・歴史", area: "埼玉県", title: "川越の小江戸街並み", desc: "蔵造りの商家が立ち並ぶ「小江戸」。時の鐘や菓子屋横丁などレトロな散策が楽しめる。", image: "https://th.bing.com/th/id/R.7edc71a3f0fb260fe23e241af7cfba34?rik=zGWfG4iRq2swBA&riu=http%3a%2f%2fwww.clubgets.com%2ftabimegu%2fimg%2fblog%2fsaitama%2fsaitama%2fkawagoe01.jpg&ehk=Dz8bugNNve5jvw2g1GEIWF%2fw8F7sCvF3fHWHc2lDRnM%3d&risl=&pid=ImgRaw&r=0", badge: "蔵造りの町" },
    { id: 'p12', category: "情緒・歴史", area: "千葉県", title: "佐原の古い町並み", desc: "「北総の小江戸」と呼ばれる川沿いの水郷地帯。小舟に揺られながら歴史的建造物を眺める。", image: "https://tabi-mag.jp/wp-content/uploads/CH010601.jpg", badge: "水郷の情緒" },
    { id: 's1', category: "隠れ里・秘境", area: "東京都", title: "青ヶ島（絶景カルデラ島）", desc: "太平洋に浮かぶ二重カルデラの孤島。満天の星空と静寂に包まれた特別な場所。", image: "https://tabippo.net/wp-content/uploads/20211123155008/001_01_Tokyo_Aogashima_c.jpg", badge: "秘境島" },
    { id: 'o1', category: "名湯・寛ぎ", area: "神奈川県", title: "箱根温泉の静寂", desc: "木立の中に佇む温泉宿で、日常から離れてゆっくりと湯に浸かる至福の時間。", image: "https://www.hakonenavi.jp/wp-content/uploads/2023/02/8565_hakoneginyu_02.jpg", badge: "至福の湯" },

    // --- 中部・北陸 ---
    { id: 'p15', category: "風光・自然", area: "新潟県", title: "星峠の棚田", desc: "大小さまざまな棚田が広がる美しい農村風景。早朝には雲海と水鏡が織りなす幻想的な絶景。", image: "https://www.jtb.co.jp/kando/assets/55_kv_pc01.jpg", badge: "日本の原風景" },
    { id: 'p16', category: "風光・自然", area: "富山県", title: "立山黒部アルペンルート", desc: "標高3,000m級の北アルプスを貫く世界有数の山岳観光ルート。「雪の大谷」は圧巻。", image: "https://prcdn.freetls.fastly.net/release_image/81818/56/81818-56-b714a6f6a9519cfae3703aae6b908726-800x599.jpg?format=jpeg&auto=webp&quality=85&width=1950&height=1350&fit=bounds", badge: "絶景山岳" },
    { id: 'c2', category: "情緒・歴史", area: "石川県", title: "金沢・ひがし茶屋街", desc: "出格子が美しい風情ある街並み。歴史と伝統文化が今なお息づく場所。", image: "https://www.kanazawa-kankoukyoukai.or.jp/lsc/upfile/spot/0001/0212/10212_6_l.jpg", badge: "伝統の街並み" },
    { id: 'p18', category: "隠れ里・秘境", area: "福井県", title: "東尋坊", desc: "柱状節理の巨大な岩壁が約1km続く国の天然記念物。日本海の荒波が打ち寄せる断崖絶壁。", image: "https://i.pinimg.com/736x/13/65/e0/1365e06bb3f05540ec902ea2abdc0b3f.jpg", badge: "自然の造形美" },
    { id: 'n3', category: "風光・自然", area: "山梨県", title: "河口湖畔より望む富士", desc: "湖面に美しく映り込む姿や、季節の花々と共に楽しむ日本を象徴する霊峰。", image: "https://d3dtl2c4fx01rm.cloudfront.net/photos/members/kozo-dozo/ec1fa94f8b962f1fa9f93449699c48e7_3.jpg", badge: "日本霊峰" },
    { id: 'n2', category: "風光・自然", area: "長野県", title: "上高地・梓川の清流", desc: "清らかな水と澄んだ空気が満ちる場所。心をととのえる山岳リゾート。", image: "https://cdn.qleanmarket.amanaimages.com/uploads/items/078/810/45/preview/FYI07881045.jpg", badge: "澄絶の風光" },
    { id: 'p21', category: "隠れ里・秘境", area: "岐阜県", title: "白川郷 合掌造り集落", desc: "豪雪地帯ならではの合掌造り集落。まるで絵本の中に迷い込んだような日本の原風景。", image: "https://www.hotholiday.jp/contents/world_heritage/960_720/540_1.jpg", badge: "世界遺産集落" },
    { id: 's2', category: "隠れ里・秘境", area: "静岡県", title: "寸又峡・夢の吊橋", desc: "エメラルドグリーンに輝く湖面と、豊かな木々に囲まれた静かな吊橋。", image: "https://oi-river.com/_assets/wp-content/uploads/2017/11/DSC_7782.jpg", badge: "静寂の清流" },
    { id: 'p23', category: "情緒・歴史", area: "愛知県", title: "犬山城と城下町", desc: "現存天守を持つ国宝・犬山城。三光稲荷神社の赤い鳥居やハート型の絵馬が人気。", image: "https://th.bing.com/th/id/R.2001387feeb39247aefaea9aef9e32a5?rik=asawCi8EIw3KcQ&riu=http%3a%2f%2fakiyarenova.news%2fwp-content%2fuploads%2f2023%2f07%2fsub3-2.jpg&ehk=XRSMmMIeJasbtq3xvRiaVnru0hBa5FitD39U6UFOdYE%3d&risl=&pid=ImgRaw&r=0", badge: "国宝城郭" },

    // --- 近畿 ---
    { id: 'p24', category: "隠れ里・秘境", area: "三重県", title: "伊勢神宮・おかげ横丁", desc: "日本人の心のふるさと。参拝後はレトロな街並みのおかげ横丁で美食巡りを楽しめる。", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", badge: "心のふるさと" },
    { id: 'p25', category: "風光・自然", area: "滋賀県", title: "琵琶湖・白髭神社", desc: "琵琶湖の中に浮かぶ大鳥居が神秘的な景観を作り出す「近江の厳島」とも呼ばれる神社。", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", badge: "湖上の大鳥居" },
    { id: 'c1', category: "情緒・歴史", area: "京都府", title: "嵐山・竹林の小径", desc: "風に揺れる竹の葉音を聞きながら、静かに歩みを進める古都の散歩道。", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", badge: "古都の情景" },
    { id: 'p27', category: "情緒・歴史", area: "大阪府", title: "道頓堀・難波エリア", desc: "巨大な看板とド派手なイルミネーション。たこ焼きや串カツなど食い倒れの街。", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", badge: "食い倒れの街" },
    { id: 'p28', category: "情緒・歴史", area: "兵庫県", title: "姫路城（白鷺城）", desc: "白漆喰の壁が美しく舞い立つ白鷺のように見える世界遺産。日本最高峰の木造城郭建築。", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", badge: "世界遺産名城" },
    { id: 'p29', category: "情緒・歴史", area: "奈良県", title: "奈良公園・東大寺", desc: "野生の鹿たちと触れ合える緑豊かな公園。大仏殿の巨大な大仏様は圧倒的な存在感。", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", badge: "古都奈良" },
    { id: 'p30', category: "隠れ里・秘境", area: "和歌山県", title: "熊野古道・那智の滝", desc: "世界遺産の参詣道。落差133mを誇る名瀑・那智の滝と三重塔のコントラストが美しい。", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", badge: "聖地巡礼" },

    // --- 中国・四国 ---
    { id: 'p31', category: "風光・自然", area: "鳥取県", title: "鳥取砂丘", desc: "日本最大級の海岸砂丘。風が織りなす風紋や、ラクダに乗ってめぐる非日常な体験。", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", badge: "雄大な砂丘" },
    { id: 'p32', category: "情緒・歴史", area: "島根県", title: "出雲大社", desc: "縁結びの神様として知られる古社。神楽殿にかかる日本最大級の巨大なしめ縄は必見。", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", badge: "縁結びの聖地" },
    { id: 'p33', category: "情緒・歴史", area: "岡山県", title: "倉敷美観地区", desc: "白壁の屋敷や倉が立ち並ぶ美しい町並み。倉敷川を渡る川舟や、おしゃれなカフェ巡り。", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", badge: "白壁のレトロ" },
    { id: 'c3', category: "情緒・歴史", area: "広島県", title: "宮島・厳島神社", desc: "海上に浮かぶ大鳥居が神秘的な世界遺産。潮の満ち引きで表情を変える社殿。", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", badge: "世界遺産" },
    { id: 'p35', category: "隠れ里・秘境", area: "山口県", title: "元乃隅神社", desc: "青い海に向かって123本の赤鳥居がズラリと並ぶコントラストがSNSで話題の神社。", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", badge: "絶景赤鳥居" },
    { id: 's3', category: "隠れ里・秘境", area: "徳島県", title: "奥祖谷の二重かずら橋", desc: "深い山々に抱かれた秘境の地。自然の素材だけで作られた素朴で美しい橋。", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", badge: "秘境の橋" },
    { id: 'p37', category: "風光・自然", area: "香川県", title: "小豆島・エンジェルロード", desc: "引き潮の時にだけ現れる砂の道。大切な人と手を繋いで渡ると願いが叶うと言われる。", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", badge: "恋人の聖地" },
    { id: 'p38', category: "名湯・寛ぎ", area: "愛媛県", title: "道後温泉本館", desc: "3,000年の歴史を持つ日本最古の温泉。ジブリ映画のモデルとも言われる木造温泉建築。", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80", badge: "日本最古の湯" },
    { id: 'p39', category: "風光・自然", area: "高知県", title: "四万十川の沈下橋", desc: "「日本最後の清流」と呼ばれる四万十川。増水時に沈む手すりのない沈下橋が特徴的。", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", badge: "最後の清流" },

    
    // --- 九州・沖縄 ---
    { id: 'p40', category: "情緒・歴史", area: "福岡県", title: "太宰府天満宮", desc: "学問の神様・菅原道真公を祀る神社。参道で味わう名物「梅ヶ枝餅」も人気。", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", badge: "学問の聖地" },
    { id: 'p41', category: "情緒・歴史", area: "佐賀県", title: "吉野ヶ里歴史公園", desc: "弥生時代の環濠集落跡を復元した大規模な国営公園。歴史ロマンを感じる観光スポット。", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", badge: "弥生ロマン" },
    { id: 'p42', category: "情緒・歴史", area: "長崎県", title: "グラバー園・大浦天主堂", desc: "異国情緒があふれる洋館と異人館街。長崎港を一望できる絶景の丘に位置する。", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", badge: "異国情緒" },
    { id: 'p43', category: "風光・自然", area: "熊本県", title: "阿蘇山・草千里ヶ浜", desc: "世界最大級のカルデラを持つ阿蘇山。広大な緑の草原と池が広がる絶景のロケーション。", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80", badge: "大カルデラ" },
    { id: 'o2', category: "名湯・寛ぎ", area: "大分県", title: "由布院の朝霧", desc: "朝もやに包まれる金鱗湖と、温もりのある街並みが心を癒やす温泉地。", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", badge: "朝霧の情景" },
    { id: 'p45', category: "隠れ里・秘境", area: "宮崎県", title: "高千穂峡・真名井の滝", desc: "神話の里・高千穂。高い断崖から清流へ落ちる真名井の滝をボートから見上げる感動。", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", badge: "神話の渓谷" },
    { id: 'p46', category: "隠れ里・秘境", area: "鹿児島県", title: "屋久島・縄文杉", desc: "樹齢数千年の太古の杉が息づく神秘の島。豊かな原生林とコケの森が世界遺産に登録。", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", badge: "世界自然遺産" },
    { id: 'p47', category: "風光・自然", area: "沖縄県", title: "古宇利島・古宇利大橋", desc: "透明度抜群のエメラルドグリーンの海を渡る爽快なドライブコースと絶景ビーチ。", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", badge: "南国リゾート" }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainCard = document.getElementById('main-content-card');
    const navBtns = {
        gacha: document.getElementById('nav-gacha-btn'),
        budget: document.getElementById('nav-budget-btn'),
        places: document.getElementById('nav-places-btn'),
        secret: document.getElementById('nav-secret-btn'),
        memories: document.getElementById('nav-memories-btn')
    };
    const mobBtns = {
        gacha: document.getElementById('mob-gacha-btn'),
        budget: document.getElementById('mob-budget-btn'),
        places: document.getElementById('mob-places-btn'),
        secret: document.getElementById('mob-secret-btn'),
        memories: document.getElementById('mob-memories-btn')
    };
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    function setActiveTab(tabKey) {
        Object.keys(navBtns).forEach(key => {
            const btn = navBtns[key];
            if (btn) {
                if (key === tabKey) {
                    btn.className = "nav-link px-4 py-2 rounded-none text-xs tracking-widest font-serif border-b border-wamodan-gold text-wamodan-gold";
                } else {
                    btn.className = "nav-link px-4 py-2 rounded-none text-xs tracking-widest font-serif transition text-wamodan-muted hover:text-wamodan-gold";
                }
            }
        });
        if (mobileMenu) mobileMenu.classList.add('hidden');
    }

    // 1. ガチャ画面（旅みくじ）
    function renderGachaView() {
        setActiveTab('gacha');
        mainCard.innerHTML = `
            <div class="text-center py-6 font-serif">
                <span class="text-xs tracking-widest text-wamodan-gold uppercase block mb-3">DESTINATION PICK</span>
                <h2 class="text-2xl sm:text-3xl font-serif font-normal text-wamodan-text mb-3 tracking-widest">旅みくじ</h2>
               
                
                <div class="mb-10">
                    <button id="gacha-btn" class="px-10 py-4 border border-wamodan-gold text-wamodan-gold hover:bg-wamodan-gold hover:text-wamodan-bg font-serif text-sm tracking-widest transition duration-300">
                        おみくじを引く
                    </button>
                </div>

                <div id="capsule-container" class="h-24 flex items-center justify-center"></div>

                <div id="gacha-result-box" class="hidden max-w-md mx-auto bg-wamodan-bg border border-wamodan-border p-8 transition-all text-wamodan-text"></div>
            </div>
        `;
/*ガチャガチャ */
        const gachaBtn = document.getElementById('gacha-btn');
        const capsuleContainer = document.getElementById('capsule-container');
        const resultBox = document.getElementById('gacha-result-box');

        gachaBtn.addEventListener('click', () => {
            resultBox.classList.add('hidden');
            capsuleContainer.innerHTML = `<div class="w-12 h-12 border border-wamodan-gold text-wamodan-gold font-serif shadow-inner spin-anim flex items-center justify-center text-xs tracking-widest">旅</div>`;

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * PLACES_DATABASE.length);
                const picked = PLACES_DATABASE[randomIndex];

                capsuleContainer.innerHTML = `<div class="w-12 h-12 bg-wamodan-gold text-wamodan-bg font-serif font-bold shadow-md flex items-center justify-center text-sm">吉</div>`;
                
                resultBox.innerHTML = `
                    <span class="text-xs font-serif tracking-widest px-3 py-1 border border-wamodan-gold/40 text-wamodan-gold inline-block mb-4">行き先決定</span>
                    <div class="text-left font-serif">
                        <img src="${picked.image}" alt="${picked.title}" class="w-full h-48 object-cover mb-4 border border-wamodan-border">
                        <h3 class="text-xl font-normal text-wamodan-text tracking-widest mb-1">${picked.title}</h3>
                        <p class="text-xs text-wamodan-muted mb-3">${picked.area} / ${picked.category}</p>
                        <p class="text-xs text-wamodan-text/80 font-sans font-light leading-relaxed tracking-wide">${picked.desc}</p>
                    </div>
                `;
                resultBox.classList.remove('hidden');
            }, 800);
        });
    }

    // 2. 予算別画面（各予算10個ずつのプラン）
    function renderBudgetView() {
        setActiveTab('budget');
        const budgetData = {
            30000: [
                { area: "神奈川県", title: "箱根の森 日帰り湯治と緑の散策", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80", desc: "特急で身軽に訪問。静かな木立に囲まれた老舗温泉で日常の静寂を取り戻す一日。" },
                { area: "栃木県", title: "日光の社寺と神聖なる空気巡り", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80", desc: "日光東照宮の重厚な建築と澄み渡る杉並木を歩く、心落ち着くコンパクトな日帰り旅。" },
                { area: "群馬県", title: "草津温泉 湯煙通りと立ち寄り湯", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", desc: "名物・湯畑の湯煙を眺めながら伝統の湯もみ体験と良質な湯を満喫する贅沢。" },
                { area: "埼玉県", title: "川越・小江戸蔵造り散策と芋スイーツ巡り", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", desc: "都心から1時間で行ける江戸の情景。時の鐘の音を聞きながら街歩きをのんびり楽しむ。" },
                { area: "山梨県", title: "富士山麓・河口湖畔の日帰り絶景ウォーキング", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80", desc: "四季の花々と穏やかな湖面に映る雄大な富士山を仰ぎ見る、気楽なショートトリップ。" },
                { area: "千葉県", title: "佐原の水郷巡りとレトロ小舟めぐり", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", desc: "小野川沿いに建つ伝統的な町家を小舟から眺める、のんびりとした水郷の休日。" },
                { area: "茨城県", title: "大洗海岸・磯前神社の神聖なる神磯鳥居", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc: "太平洋の波が打ち寄せる岩場に佇む白い鳥居。潮風を感じるリフレッシュ日帰り旅。" },
                { area: "静岡県", title: "伊東温泉・東海館見学と海鮮グルメ", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80", desc: "昭和レトロな木造温泉建築を巡り、相模湾の新鮮な海の幸と名湯を気軽に堪能。" },
                { area: "滋賀県", title: "彦根城と城下町・近江牛食べ歩き", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", desc: "国宝・彦根城を鑑賞したあとは、伝統の城下町で香ばしい近江牛グルメに舌鼓。" },
                { area: "兵庫県", title: "有馬温泉・太閤の湯とレトロ坂道散策", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", desc: "関西の奥座敷。金泉・銀泉の名湯に浸かり、炭酸せんべいを頬張りながら坂道を歩く。" }
            ],
            50000: [
                { area: "京都府", title: "嵐山・静寂の竹林と離れ宿の1泊2日", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", desc: "朝靄に包まれる早朝の竹林と風情ある古都の街並み。落ち着いた和空間で過ごす特別な旅。" },
                { area: "長野県", title: "上高地・清涼なる梓川と絶景リトリート", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", desc: "標高1,500mの澄んだ水と山々に抱かれ、深呼吸するように身心を解きほぐす。" },
                { area: "石川県", title: "金沢・ひがし茶屋街と伝統美食紀行", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", desc: "格子窓が美しい茶屋街散策と近江町市場の旬の海の幸、加賀の伝統工芸に触れる。" },
                { area: "愛媛県", title: "道後温泉と松山城の情緒あふれる湯巡り旅", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80", desc: "最古の温泉・道後温泉本館とレトロな坊っちゃん列車で巡る四国のゆるやかな休日。" },
                { area: "三重県", title: "伊勢神宮参拝とおかげ横丁 美味満喫1泊", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", desc: "心のふるさと伊勢神宮でのお参りと、赤福や伊勢うどんを味わう伝統ある和のひととき。" },
                { area: "宮城県", title: "松島海岸の絶景宿と塩竈の寿司食べ巡り", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", desc: "日本三景・松島の海を望むお部屋で寛ぎ、極上の港町・塩竈で新鮮な寿司を堪能。" },
                { area: "岐阜県", title: "飛騨高山の古い町並みと奥飛騨温泉郷", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", desc: "飛騨牛の食べ歩きや朝市を楽しんだ後、山懐に抱かれた露天風呂で星空を仰ぐ。" },
                { area: "香川県", title: "金刀比羅宮参拝と小豆島エンジェルロード", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc: "こんぴらさんの長い石段を登り切った感動と、小豆島で潮風を感じるリゾート満喫旅。" },
                { area: "大分県", title: "由布院温泉の隠れ宿と金鱗湖の朝靄散歩", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", desc: "由布岳の麓に佇むお洒落な街並み。豊かな効能を持つ湯と創作会席料理に癒やされる。" },
                { area: "長崎県", title: "異国情緒漂う異人館めぐりと極上夜景", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", desc: "石畳の坂道やグラバー園を散策し、夜は稲佐山からの世界最高峰のきらめく夜景を眺める。" }
            ],
            100000: [
                { area: "北海道", title: "富良野の広大な風光とオーベルジュ至高の時", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80", desc: "一面に広がる美瑛・富良野の丘陵美と、地の食材をふんだんに味わうラグジュアリーな滞在。" },
                { area: "広島県", title: "宮島・厳島神社と瀬戸内スイートリゾート", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", desc: "海上に浮かぶ大鳥居の神秘的な風景と、穏やかな瀬戸内海を望む極上ホテルでのひととき。" },
                { area: "宮崎県", title: "高千穂峡 神話の郷と上質離れ宿の湯旅", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80", desc: "神秘的な渓谷と真名井の滝を巡り、夜は静かな離れ宿で旬の神楽料理と名湯を堪能。" },
                { area: "鹿児島県", title: "屋久島・世界遺産の太古の森と贅沢リゾート", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", desc: "樹齢数千年の縄文杉と豊かなコケの森。秘境の空気と美食を五感で味わう至高の体験。" },
                { area: "沖縄県", title: "古宇利島のエメラルドブルーと隠れ家ヴィラ", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", desc: "透明感あふれる南国の海と白い砂浜。プライベートヴィラで何もしない贅沢を心ゆくまで。" },
                { area: "山形県", title: "銀山温泉の極上木造宿とノスタルジック冬景色", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", desc: "大正ロマンの風情漂う街並み。限られた客室数の伝統旅館で最高峰のおもてなしに浸る。" },
                { area: "富山県", title: "立山黒部アルペンルートと庄川清流の隠れ宿", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", desc: "雄大な北アルプスの雪景色と船でしか行けない秘境の温泉宿で過ごす、至福の非日常。" },
                { area: "島根県", title: "出雲大社・参拝と玉造温泉 美肌の湯プレミアム", image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80", desc: "良縁を祈願する特別参拝と、最上級の日本庭園を持つ由緒ある老舗旅館での日本料理。" },
                { area: "和歌山県", title: "熊野古道・聖地巡礼と白浜スイートリゾート", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", desc: "世界遺産・熊野の神秘的な森を歩き、夜はオーシャンビューの温泉露天風呂付客室で寛ぐ。" },
                { area: "青森県", title: "奥入瀬渓流ホテル滞在と十和田湖リゾート", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", desc: "渓流のせせらぎを身近に感じる最高のロケーション。洗練された空間とフレンチを満喫。" }
            ]
        };

        mainCard.innerHTML = `
            <div class="py-2 font-serif">
                <div class="text-center mb-10">
                    <span class="text-xs tracking-widest text-wamodan-gold uppercase block mb-3">BUDGET SELECTION</span>
                    <h2 class="text-2xl font-serif font-normal text-wamodan-text mb-2 tracking-widest">ご予算に応じた旅の提案</h2>
                    <p class="text-wamodan-muted text-xs font-light tracking-wider">お好みの予算枠をお選びください。</p>
                </div>
                <div class="flex flex-wrap gap-3 justify-center mb-10">
                    <button class="budget-selector-btn px-6 py-2.5 text-xs font-serif tracking-widest border border-wamodan-border text-wamodan-text hover:border-wamodan-gold transition" data-budget="30000">三万円まで</button>
                    <button class="budget-selector-btn px-6 py-2.5 text-xs font-serif tracking-widest border border-wamodan-border text-wamodan-text hover:border-wamodan-gold transition" data-budget="50000">五万円まで</button>
                    <button class="budget-selector-btn px-6 py-2.5 text-xs font-serif tracking-widest border border-wamodan-border text-wamodan-text hover:border-wamodan-gold transition" data-budget="100000">十万円〜</button>
                </div>
                <div id="budget-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
        `;

        const grid = document.getElementById('budget-grid');
        const buttons = mainCard.querySelectorAll('.budget-selector-btn');

        function displayBudget(amount) {
            buttons.forEach(b => {
                if (b.getAttribute('data-budget') === amount) {
                    b.className = "budget-selector-btn px-6 py-2.5 text-xs font-serif tracking-widest bg-wamodan-gold text-wamodan-bg font-semibold border border-wamodan-gold";
                } else {
                    b.className = "budget-selector-btn px-6 py-2.5 text-xs font-serif tracking-widest border border-wamodan-border text-wamodan-text hover:border-wamodan-gold transition";
                }
            });
            const items = budgetData[amount] || [];
            grid.innerHTML = items.map(item => `
                <div class="bg-wamodan-cardLight overflow-hidden border border-wamodan-border flex flex-col font-serif">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-wamodan-bg/80 backdrop-blur-sm border border-wamodan-gold/40 text-wamodan-gold text-xs px-3 py-1 font-serif tracking-widest">${item.area}</span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="font-normal text-base text-wamodan-text mb-2 tracking-widest">${item.title}</h3>
                            <p class="text-wamodan-muted text-xs font-sans font-light leading-relaxed tracking-wide">${item.desc}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => { displayBudget(btn.getAttribute('data-budget')); });
        });
    }

    // 3. 観光地一覧画面
    function renderPlacesView() {
        setActiveTab('places');
        mainCard.innerHTML = `
            <div class="py-2 font-serif">
                <div class="text-center mb-10">
                    <span class="text-xs tracking-widest text-wamodan-gold uppercase block mb-3">DESTINATIONS</span>
                    <h2 class="text-2xl font-serif font-normal text-wamodan-text mb-2 tracking-widest">日本の名所コレクション</h2>
                    <p class="text-wamodan-muted text-xs font-light tracking-wider">日本の美しい風景を探訪する。</p>
                </div>
                <div class="space-y-4 mb-10">
                    <div class="max-w-md mx-auto">
                        <input type="text" id="search-input" placeholder="キーワードで探す（例：京都、温泉、自然）" class="w-full px-5 py-3 border border-wamodan-border focus:outline-none focus:border-wamodan-gold bg-wamodan-bg text-wamodan-text text-xs tracking-widest transition">
                    </div>
                </div>
                <div id="places-cards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
        `;

        const grid = document.getElementById('places-cards-grid');
        const searchInput = document.getElementById('search-input');

        function filterAndDisplay() {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = PLACES_DATABASE.filter(item => {
                return item.title.toLowerCase().includes(query) || item.area.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
            });

            if (filtered.length === 0) {
                grid.innerHTML = `<div class="col-span-full py-12 text-center text-wamodan-muted text-xs tracking-widest">該当する名所が見つかりませんでした。</div>`;
                return;
            }

            grid.innerHTML = filtered.map(item => `
                <div class="bg-wamodan-cardLight overflow-hidden border border-wamodan-border flex flex-col font-serif">
                    <div class="h-44 overflow-hidden relative">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-wamodan-bg/80 backdrop-blur-sm border border-wamodan-gold/40 text-wamodan-gold text-xs px-3 py-1 font-serif tracking-widest">${item.area}</span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <span class="text-xs text-wamodan-gold block mb-1 tracking-widest">${item.category}</span>
                            <h3 class="font-normal text-base text-wamodan-text mb-2 tracking-widest">${item.title}</h3>
                            <p class="text-wamodan-muted text-xs font-sans font-light leading-relaxed tracking-wide">${item.desc}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        searchInput.addEventListener('input', filterAndDisplay);
        filterAndDisplay();
    }

    // 4. 隠れ里・秘境画面
    function renderSecretView() {
        setActiveTab('secret');
        const secretPlaces = PLACES_DATABASE.filter(item => item.category === "隠れ里・秘境");
        mainCard.innerHTML = `
            <div class="py-2 font-serif">
                <div class="text-center mb-10">
                    <span class="text-xs tracking-widest text-wamodan-gold uppercase block mb-3">HIDDEN PLACES</span>
                    <h2 class="text-2xl font-serif font-normal text-wamodan-text mb-2 tracking-widest">隠れ里・秘境巡り</h2>
                    <p class="text-wamodan-muted text-xs font-light tracking-wider">知られざる日本の原風景へ。</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    ${secretPlaces.map(item => `
                        <div class="bg-wamodan-cardLight overflow-hidden border border-wamodan-border flex flex-col font-serif">
                            <div class="h-48 overflow-hidden relative">
                                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                                <span class="absolute top-3 left-3 bg-wamodan-bg/80 backdrop-blur-sm border border-wamodan-gold/40 text-wamodan-gold text-xs px-3 py-1 font-serif tracking-widest">${item.area}</span>
                            </div>
                            <div class="p-6">
                                <span class="text-xs text-wamodan-gold block mb-1 tracking-widest">${item.badge}</span>
                                <h3 class="font-normal text-base text-wamodan-text mb-2 tracking-widest">${item.title}</h3>
                                <p class="text-wamodan-muted text-xs font-sans font-light leading-relaxed tracking-wide">${item.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 5. 旅帖（My Blog）画面
    function renderMemoriesView() {
        setActiveTab('memories');
        mainCard.innerHTML = `
            <div class="py-2 font-serif">
                <div class="text-center mb-10">
                    <span class="text-xs tracking-widest text-wamodan-gold uppercase block mb-3">TRAVEL DIARY</span>
                    <h2 class="text-2xl font-serif font-normal text-wamodan-text mb-2 tracking-widest">日記</h2>
                    <p class="text-wamodan-muted text-xs font-light tracking-wider">心に残ったことなど</p>
                </div>
                <div class="max-w-md mx-auto bg-wamodan-bg border border-wamodan-border p-6 mb-10">
                    <h3 class="font-normal text-sm text-wamodan-gold tracking-widest mb-4">書き留める</h3>
                    <div class="space-y-4 font-sans">
                        <div><input type="text" id="memory-title" placeholder="題名" class="w-full px-4 py-2.5 border border-wamodan-border bg-wamodan-card text-xs text-wamodan-text focus:outline-none focus:border-wamodan-gold"></div>
                        <div><input type="text" id="memory-location" placeholder="場所（例：京都府・嵐山）" class="w-full px-4 py-2.5 border border-wamodan-border bg-wamodan-card text-xs text-wamodan-text focus:outline-none focus:border-wamodan-gold"></div>
                        <div><textarea id="memory-comment" rows="3" placeholder="..." class="w-full px-4 py-2.5 border border-wamodan-border bg-wamodan-card text-xs text-wamodan-text focus:outline-none focus:border-wamodan-gold"></textarea></div>
                        <button id="create-memory-btn" class="w-full py-3 bg-wamodan-gold text-wamodan-bg font-serif text-xs font-semibold tracking-widest hover:bg-wamodan-goldHover transition duration-200">保存</button>
                    </div>
                </div>
                <div id="memories-container" class="grid grid-cols-1 sm:grid-cols-2 gap-6 font-serif">
                    <div class="bg-wamodan-cardLight border border-wamodan-border p-6">
                        <span class="text-xs text-wamodan-gold block mb-1 tracking-widest">京都府・嵐山</span>
                        <h3 class="font-normal text-base text-wamodan-text mb-2 tracking-widest">竹林</h3>
                        <p class="text-wamodan-muted text-xs font-sans font-light leading-relaxed tracking-wide">竹が生い茂っていてとても綺麗でした。
                        </p>
                    </div>
                </div>
            </div>
        `;

        const createBtn = document.getElementById('create-memory-btn');
        createBtn.addEventListener('click', () => {
            const title = document.getElementById('memory-title').value.trim();
            const location = document.getElementById('memory-location').value.trim();
            const comment = document.getElementById('memory-comment').value.trim();
            if (!title || !location || !comment) { alert('すべての項目をご入力ください。'); return; }

            const container = document.getElementById('memories-container');
            const newCard = document.createElement('div');
            newCard.className = 'bg-wamodan-cardLight border border-wamodan-border p-6 font-serif';
            newCard.innerHTML = `
                <span class="text-xs text-wamodan-gold block mb-1 tracking-widest">${location}</span>
                <h3 class="font-normal text-base text-wamodan-text mb-2 tracking-widest">${title}</h3>
                <p class="text-wamodan-muted text-xs font-sans font-light leading-relaxed tracking-wide">${comment}</p>
            `;
            container.prepend(newCard);
            document.getElementById('memory-title').value = '';
            document.getElementById('memory-location').value = '';
            document.getElementById('memory-comment').value = '';
        });
    }

    const views = {
        gacha: renderGachaView,
        budget: renderBudgetView,
        places: renderPlacesView,
        secret: renderSecretView,
        memories: renderMemoriesView
    };

    Object.keys(views).forEach(key => {
        if (navBtns[key]) navBtns[key].addEventListener('click', (e) => { e.preventDefault(); views[key](); });
        if (mobBtns[key]) mobBtns[key].addEventListener('click', (e) => { e.preventDefault(); views[key](); });
    });

    document.getElementById('logo-btn').addEventListener('click', () => { renderGachaView(); });
    renderGachaView();
});