export default class RightPanelController {
    constructor(animals, diamond) {
        this.name = 'rightPanel';
        this.diamond = diamond
        this.ownAnimals = animals
        this.currentAnimal = {};

        this.animals = [{
            "id": 0,
            "code": "Dragon-CB",
            "name": "中部鬍鬚蜥",
            "img": "Dragon-CB-O.jpg",
            "description": { "_id": "39", "A_Name_Ch": "中部鬍鬚蜥", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5898494 24.9940697))", "A_Location": "兩棲爬蟲動物館", "A_POIGroup": "兩棲爬蟲動物館", "A_Name_En": "Central bearded dragon", "A_Name_Latin": "Pogona vitticeps", "A_Phylum": "脊索動物門", "A_Class": "爬蟲綱", "A_Order": "有鱗目", "A_Family": "飛蜥科", "A_Conservation": "", "A_Distribution": "澳洲的中東部", "A_Habitat": "生活在沙漠、乾燥的草原、灌叢和森林。", "A_Feature": "體型粗壯扁平，頭部大呈三角形，外耳孔明顯，頭部後面、頸部背面和喉部有大型棘刺狀鱗片，體側有一列規則排列的圓錐狀的棘刺狀突起。身體背部為黃褐色、黃色或紅褐色，上有兩列深褐色不規則的斑紋。", "A_Behavior": "日行性", "A_Diet": "", "A_Crisis": "", "A_Interpretation": "中部鬍鬚蜥 Central bearded dragon\n．特徵：體型粗壯扁平，頭部大呈三角形，外耳孔明顯，頭部後面、頸部背面和喉部有大型棘刺狀鱗片，體側有一列規則排列的圓錐形的棘刺狀突起。身體背部為黃褐色、黃色或紅褐色，上有兩列深褐色不規則的斑紋。\n．分布：澳洲的中東部。生活在沙漠、乾燥的草原、灌叢和森林。\n體長：30-56 cm\n食性：節肢動物、植物\n習性：日行性", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Dragon-CB", "A_Pic01_ALT": "中部鬍鬚蜥", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Dragon-CB/Dragon-CB_Pic01.jpg", "A_Pic02_ALT": "中部鬍鬚蜥", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Dragon-CB/Dragon-CB_Pic02.jpg", "A_Pic03_ALT": "中部鬍鬚蜥", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Dragon-CB/Dragon-CB_Pic03.jpg", "A_Pic04_ALT": "中部鬍鬚蜥", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Dragon-CB/Dragon-CB_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "38" },
            "cost": 500,
            "productivity": 10
        }, {
            "id": 1,
            "code": "Butterfly-LBSM",
            "name": "琉球青斑蝶",
            "img": "Butterfly-LBSM-O.jpg",
            "description": { "_id": "112", "A_Name_Ch": "琉球青斑蝶", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5807004 24.9967402))", "A_Location": "昆蟲館", "A_POIGroup": "昆蟲館", "A_Name_En": "", "A_Name_Latin": "", "A_Phylum": "", "A_Class": "", "A_Order": "", "A_Family": "", "A_Conservation": "", "A_Distribution": "", "A_Habitat": "", "A_Feature": "翅膀表面黑褐色具淡青色條狀斑紋，前翅近基部有一條細長的青色斑中斷成兩部分 ，上較細長，下較粗短，翅腹面為褐色具長短不一的斑紋，外觀近似淡小紋青斑蝶但本種後翅腹面的白色斑點較長且密集，淡小紋青斑蝶白色斑點較圓且疏。", "A_Behavior": "成蟲冬季有向南遷徙集體渡冬的習性，飛行快速，常見集體訪花吸蜜。", "A_Diet": "", "A_Crisis": "", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Butterfly-LBSM", "A_Pic01_ALT": "琉球青斑蝶", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/InsectHouse/Butterfly-LBSM/Butterfly-LBSM_Pic01.jpg", "A_Pic02_ALT": "琉球青斑蝶", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/InsectHouse/Butterfly-LBSM/Butterfly-LBSM_Pic02.jpg", "A_Pic03_ALT": "", "A_Pic03_URL": "", "A_Pic04_ALT": "", "A_Pic04_URL": "", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "111" },
            "cost": 500,
            "productivity": 10
        }, {
            "id": 2,
            "code": "Viper-HP",
            "name": "百步蛇",
            "img": "Viper-HP-O.jpg",
            "description": { "_id": "46", "A_Name_Ch": "百步蛇", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5898494 24.9940697))", "A_Location": "兩棲爬蟲動物館", "A_POIGroup": "兩棲爬蟲動物館", "A_Name_En": "Hundred-pace Viper(Chinese Moccasin)", "A_Name_Latin": "Deinagkistrodon acutus", "A_Phylum": "脊索動物門", "A_Class": "爬蟲綱", "A_Order": "有鱗目", "A_Family": "腹蛇科", "A_Conservation": "", "A_Distribution": "臺灣東南部、越南和中國東南部和西南部，以高雄、屏東、臺東、花蓮和宜蘭山區為主", "A_Habitat": "棲息於山區進溪流處森林底層", "A_Feature": "中大型蛇類，體型粗胖，體長可達150cm，吻肛長約雌蛇尾長的6.5倍到雄蛇的7.5倍。頭呈三角形，吻端上翹，狀似枯葉，眼與鼻孔間具有頰窩。身體兩側有許多三角形的深褐色斑紋連續排列。頭頂為深褐色，並具有對稱的大型鱗片。", "A_Behavior": "以蛙類、蟾蜍、蛇類、蜥蜴、鳥類和鼠類為食，攝食策略採坐等型。卵生，多在11月到隔年3月交配，6~8月產卵，每次可產11~35枚。", "A_Diet": "", "A_Crisis": "", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Viper-HP", "A_Pic01_ALT": "百步蛇", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Viper-HP/Viper-HP_Pic01.jpg", "A_Pic02_ALT": "百步蛇", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Viper-HP/Viper-HP_Pic02.jpg", "A_Pic03_ALT": "百步蛇", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Viper-HP/Viper-HP_Pic03.jpg", "A_Pic04_ALT": "百步蛇", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AmphibianReptile/Viper-HP/Viper-HP_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "45" },
            "cost": 2000,
            "productivity": 40
        }, {
            "id": 3,
            "code": "Owl-CS",
            "name": "領角鴞",
            "img": "Owl-CS-O.jpg",
            "description": { "_id": "258", "A_Name_Ch": "領角鴞", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5799159 24.9979496))", "A_Location": "臺灣動物區", "A_POIGroup": "", "A_Name_En": "Collard Scops Owl", "A_Name_Latin": "Otus bakkamoena", "A_Phylum": "脊索動物門", "A_Class": "鳥綱", "A_Order": "鴞形目", "A_Family": "鴟鴞科", "A_Conservation": "", "A_Distribution": "", "A_Habitat": "分布於海拔1200公尺以下之森林中，及山坡地或鄉間樹木繁茂處。", "A_Feature": "體長約l9一25公分，翼長約17公分，尾長約9公分；體背灰褐色，有豎起之耳羽和不甚明顯之黑色蟲蠢珽;後頭有黃土色斑，翅膀的飛羽具有若干濃色闊價帶;顏盤灰黃色，有不規則之黑色斑紋；眉斑、眼先灰白色，盤緣黑色；尾羽灰色，有暗褐色橫帶；尾下覆羽灰白色，有黑色細斑；前頭有灰白色橫帶；胸、腹底色灰褐色，具有箭簇狀斑紋，腹部中央白色；尾羽灰褐色，有為色橫帶；嘴鉛綠色，腳灰色，趾無羽。", "A_Behavior": "為棲息於闊葉樹林中的，畫伏夜出，不易發現。但在晚間，尤其是春夏季節，可常聽其在樹上發出單調\"不一一\"的鳴叫聲，在冬季較少鳴叫。以獵捕昆蟲、小鳥和小型哺乳類為食。在臺灣則普遍棲於1,100公尺以下之闊葉林，然在非繁殖期，可在更高的山區發現其蹤跡。是典型的鄉土鳥種。", "A_Diet": "主要以弱小之哺乳類、鳥類、爬蟲類等為食。", "A_Crisis": "由於傳統迷信具有藥性，常被捕捉入藥。在公路上常見被車撞死的個體。", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Owl-CS", "A_Pic01_ALT": "領角鴞", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/Owl-CS/Owl-CS_Pic01.jpg", "A_Pic02_ALT": "領角鴞", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/Owl-CS/Owl-CS_Pic02.jpg", "A_Pic03_ALT": "領角鴞", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/Owl-CS/Owl-CS_Pic03.jpg", "A_Pic04_ALT": "領角鴞", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/Owl-CS/Owl-CS_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "257" },
            "cost": 10000,
            "productivity": 200
        }, {
            "id": 4,
            "code": "Zebra-G",
            "name": "格利威斑馬",
            "img": "Zebra-G-O.jpg",
            "description": { "_id": "145", "A_Name_Ch": "格利威斑馬", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5887457 24.9944271))", "A_Location": "非洲動物區", "A_POIGroup": "", "A_Name_En": "Grevy's Zebra", "A_Name_Latin": "Equus grevyi", "A_Phylum": "脊索動物門", "A_Class": "哺乳綱", "A_Order": "奇蹄目", "A_Family": "馬科", "A_Conservation": "", "A_Distribution": "", "A_Habitat": "格利威斑馬主要棲息於半沙漠的乾燥草原及灌叢草原", "A_Feature": "為最大的野生馬，頭軀幹長2,50-3,00cm，尾長38-60cm，體重352-450kg，雄雌體型無顯著差異。全身包含四肢都是黑白相間的條紋，非常細密，腹部則為白色，與查普曼斑馬相比，他們軀幹的後半部仍為垂直條紋，是最大也是最漂亮的一種斑馬，頭部比較大，身材苗條，腿長、耳大，鬃毛長而直立。", "A_Behavior": "日型性動物\n格利威斑馬通常成群活動，成熟的雄斑馬具有領域性，牠們會利用糞便來標示自己的領域，斑馬的領域是草食動物中面積最大的，他們為了要吸引雌斑馬來交配，才會維持這麼大的領域。\n", "A_Diet": "以草為主，也吃嫩葉、樹皮及果實，可以吃非常堅韌的草。", "A_Crisis": "經濟動物的放牧影響斑馬的生存資源", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Zebra-G", "A_Pic01_ALT": "格利威斑馬", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Zebra-G/Zebra-G_Pic01.jpg", "A_Pic02_ALT": "格利威斑馬", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Zebra-G/Zebra-G_Pic02.jpg", "A_Pic03_ALT": "格利威斑馬", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Zebra-G/Zebra-G_Pic03.jpg", "A_Pic04_ALT": "格利威斑馬", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Zebra-G/Zebra-G_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "144" },
            "cost": 100000,
            "productivity": 2000
        }, {
            "id": 5,
            "code": "Giraffe",
            "name": "網紋長頸鹿",
            "img": "Giraffe-O.jpg",
            "description": { "_id": "150", "A_Name_Ch": "網紋長頸鹿", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5863049 24.9944234))", "A_Location": "非洲動物區", "A_POIGroup": "", "A_Name_En": "Giraffe", "A_Name_Latin": "Giraffa camelopardalis", "A_Phylum": "脊索動物門", "A_Class": "哺乳綱", "A_Order": "偶蹄目", "A_Family": "長頸鹿科 ", "A_Conservation": "", "A_Distribution": "撒哈拉南部", "A_Habitat": "", "A_Feature": "一、在淡黃的底色上，有棕色的大小形狀不同的斑塊，每一個亞種(共分成8個亞種)都有不同形狀的斑紋，斑紋的顏色會隨著年齡而變深，腹部的顏色比較淡，沒有斑紋，尾巴蓬鬆，頭部有1-2對的角，舌長，眼睛大，睫毛長，脖子和四肢都很長，雌性有四個乳房。\n二、頭軀幹長3,810-4,724mm，尾長787-1,041mm，肩高2,500-3,700mm，體重550-1,930kg，平均為800kg。", "A_Behavior": "一、 長頸鹿的英文名稱giraffe源自阿拉伯文，原意為「行動敏捷的人」。\n二、 長頸鹿是最高的陸生動物，雄性平均身高5,300mm，雌性4,300mm，牠們的脖子很長，但是脖子裡面的頸椎骨節數並沒有比其他哺乳動物多，一樣只有七塊頸椎，只是每一節都加長了。\n三、 為了把充分的血液送到長長脖子的頂端，牠們脖子的血管有許多瓣膜，以控制血液的流動。\n四、 長頸鹿的舌頭可長達45公分，又長又靈活，方便他們取食樹葉。\n五、 長頸鹿初生下來頭上就有角，是由軟骨組織構成，之後逐漸硬化成形。\n六、 長頸鹿棲息在乾燥的大草原或是開闊的林地，主要在早晨、黃昏及夜間活動，中午則休息。長頸鹿通常站著睡覺，牠們把頭倚靠在後腿上，長長的脖子彎曲成一個優雅的弧線，偶爾也會躺下來睡。\n七、 長頸鹿每天大部分的時間都在覓食，牠們的食量很大，一天可以吃下34kg的樹葉。\n八、 長頸鹿的身高也會造成困擾，當牠們在喝水或是由地面取食的時候，必須把雙腿張得很開，或是把前腳彎曲，才能夠把嘴巴接觸到地面；這同時也是一些肉食動物攻擊他們的大好時機。\n九、 長頸鹿的個性非常溫馴，嗅覺、視覺與聽覺都很敏銳，再加上牠們的身高，可以看到很遠的地方，視野非常遼闊，遇到危險的時候，會用牠們的長腳去踢敵人。\n十、 雌長頸鹿會與牠們的子女成群活動，小長頸鹿在母親們的共同保護之下，減少被捕食的機會。成年的雄性則會獨居。\n十一、 剛出生的小長頸鹿就有170-200公分高，20分鐘之內就會站立，1小時之內開始吸奶。", "A_Diet": "草食性。", "A_Crisis": "", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Giraffe", "A_Pic01_ALT": "網紋長頸鹿", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Giraffe/Giraffe_Pic01.jpg", "A_Pic02_ALT": "網紋長頸鹿", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Giraffe/Giraffe_Pic02.jpg", "A_Pic03_ALT": "網紋長頸鹿", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Giraffe/Giraffe_Pic03.jpg", "A_Pic04_ALT": "網紋長頸鹿", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/AfricanArea/Giraffe/Giraffe_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "149" },
            "cost": 1000000,
            "productivity": 20000
        }, {
            "id": 6,
            "code": "CloudedLeopard",
            "name": "雲豹",
            "img": "CloudedLeopard-O.jpg",
            "description": { "_id": "253", "A_Name_Ch": "雲豹", "A_Summary": "", "A_Keywords": "", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5799735 24.9978317))", "A_Location": "臺灣動物區", "A_POIGroup": "", "A_Name_En": "Formosan clouded leopard", "A_Name_Latin": "Neofelis nebulosa", "A_Phylum": "脊索動物門", "A_Class": "哺乳綱", "A_Order": "食肉目", "A_Family": "貓科", "A_Conservation": "", "A_Distribution": "臺灣", "A_Habitat": "中、高海拔森林區", "A_Feature": "全身黃褐色；額頭至肩部有數條黑色縱帶，頸側及體側有雲黑班，腹部近白色，尾有11至14個黑色環帶。貓科雲豹的一個亞種，為台灣特有種動物，是台灣本島少數的大型肉食野生動物之一。雲豹是晨昏活動頻繁而偏夜行性的動物，常單獨活動。白天棲息在樹幹上或斷崖的岩石下面，到夜晚才現身伏擊行徑上的動物。但它並非完全是樹棲性，也常在地上行走或是撲追動物。可能的棲地為原始或次生闊葉林、混合林或針葉林。", "A_Behavior": "單獨、夜行性", "A_Diet": "", "A_Crisis": "", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "CloudedLeopard", "A_Pic01_ALT": "雲豹", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/CloudedLeopard/CloudedLeopard_Pic01.jpg", "A_Pic02_ALT": "雲豹", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/CloudedLeopard/CloudedLeopard_Pic02.jpg", "A_Pic03_ALT": "雲豹", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/CloudedLeopard/CloudedLeopard_Pic03.jpg", "A_Pic04_ALT": "雲豹", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/FormosanArea/CloudedLeopard/CloudedLeopard_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "252" },
            "cost": 10000000,
            "productivity": 200000
        }, {
            "id": 7,
            "code": "Tiger",
            "name": "孟加拉虎",
            "img": "Tiger-O.jpg",
            "description": { "A_Name_Ch": "孟加拉虎", "A_Summary": "", "A_Keywords": "老虎", "A_AlsoKnown": "", "A_Geo": "MULTIPOINT ((121.5833692 24.9940162))", "A_Location": "亞洲熱帶雨林區", "A_POIGroup": "", "A_Name_En": "Bengal tiger", "A_Name_Latin": "Panthera tigris tigris", "A_Phylum": "脊索動物門", "A_Class": "哺乳綱", "A_Order": "食肉目", "A_Family": "貓科", "A_Conservation": "", "A_Distribution": "亞洲", "A_Habitat": "雨林，森林，紅樹林沼澤，溫帶與熱帶草原，岩石地區(多樣化，只要有足夠的水源，獵物及遮陽處)", "A_Feature": "長度 頭臀170~229公分(140~280公分);尾巴95~119公分 高度 肩高91公分 體重 180~245公斤(雄性90~306公斤，雌性65-167公斤) 齒數 28~30(3/3 1/1 2-3/2 1/1) 外觀 在貓科中體型最大;黃褐色的背部和側面有黑色條詨，腹部、下巴及喉嚨為白色.雄性比雌性大，下巴長有鬍鬚般的毛髮。。", "A_Behavior": "活動時間 黃昏、夜行性;偶爾會在日間活動 群數 單獨生活，除了母親與幼獸以外 其他 不喜愛炎熱的天氣，尋找陰涼的森林睡覺。天氣熱時喜歡泡水，善於游泳，也 會爬樹，但沒有豹顯著的樹棲性傾向。會藏身在有獵物出現的地方附近耐心 埋伏等待，伺機捕捉。用餐時從獵物後腿及臀部吃起，每天平均吃6~7公 斤，會儲存剩餘食物。基本上是單獨活動，但這不代表動物間沒有互相影響; 牠們經由聽覺與嗅覺保持連繫，肛門腺會分泌一種氣味強烈的液體，有劃分 範圍和標示行跡的作用。雌性在動情期間會很頻繁地活動及發出聲音來向雄 性通知;一隻雌虎看中一隻雄虎後，牠會在雄虎前走過來晃過去，並用尾撩 撥雄虎的背。平時很安靜，只有求偶時大聲吼叫。", "A_Diet": "肉食性;大型哺乳動物:豬，鹿，羚羊，水牛;偶翼也吃小型哺乳動物和鳥", "A_Crisis": "", "A_Interpretation": "", "A_Theme_Name": "", "A_Theme_URL": "", "A_Adopt": "", "A_Code": "Tiger", "A_Pic01_ALT": "孟加拉虎", "A_Pic01_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/RainForest/Tiger/Tiger_Pic01.jpg", "A_Pic02_ALT": "孟加拉虎", "A_Pic02_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/RainForest/Tiger/Tiger_Pic02.jpg", "A_Pic03_ALT": "孟加拉虎", "A_Pic03_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/RainForest/Tiger/Tiger_Pic03.jpg", "A_Pic04_ALT": "孟加拉虎", "A_Pic04_URL": "http://www.zoo.gov.tw/iTAP/03_Animals/RainForest/Tiger/Tiger_Pic04.jpg", "A_pdf01_ALT": "", "A_pdf01_URL": "", "A_pdf02_ALT": "", "A_pdf02_URL": "", "A_Voice01_ALT": "", "A_Voice01_URL": "", "A_Voice02_ALT": "", "A_Voice02_URL": "", "A_Voice03_ALT": "", "A_Voice03_URL": "", "A_Vedio_URL": "", "A_Update": "2015-11-23", "A_CID": "11" },
            "cost": 100000000,
            "productivity": 2000000
        }]

        this.firstClick = true;
    }

    checkInfo(animal) {
        this.currentAnimal = animal
        $('#infoModal')
            .modal('show');
        console.log($('#infoModal'))
    }

    buyAnimal(animal) {
        if (this.ownAnimals.length === 0) {
            console.log('XXXYYY');
            $('#bottomPanel')
            .sidebar('setting', 'dimPage', false)
            // .sidebar('setting', 'closable', false)
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
        }
        if (this.enoughDiamond(animal.cost)) {
            this.ownAnimals.unshift({
                name: animal.name,
                id: animal.id,
                img: animal.img,
                code: animal.code,
                cost: animal.cost,
                productivity: animal.productivity,
                levels: [0, 0, 0]
            });
            this.diamond.count -= animal.cost
            this.diamond.total_productivity += animal.productivity
            this.diamond.rate = this.diamond.total_productivity * this.diamond.diversity_ratio
            console.log(this.ownAnimals);
        } else {
            console.log("no enough money")
        }
    }

    closeGuide() {
        $('#bottomPanel')
            .sidebar('hide')
    }

    togglePanels() {
        if (this.firstClick) {
            $('#KPModal')
                .modal('show');

            this.firstClick = false;
        }
        $('#rightPanel')
            .sidebar('setting', 'dimPage', false)
            .sidebar('setting', 'closable', false)
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')

        $('#leftPanel')
            .sidebar('setting', 'dimPage', false)
            .sidebar('setting', 'closable', false)
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
    }

    // toggleRightPanel() {
    //     $('#rightPanel')
    //         .sidebar('setting', 'dimPage', false)
    //         .sidebar('setting', 'closable', false)
    //         .sidebar('setting', 'transition', 'overlay')
    //         .sidebar('toggle')
    // }

    // toggleLeftPanel() {
    //     $('#leftPanel')
    //         .sidebar('setting', 'dimPage', false)
    //         .sidebar('setting', 'closable', false)
    //         .sidebar('setting', 'transition', 'overlay')
    //         .sidebar('toggle')
    // }

    closePanel() {
        $('#rightPanel').sidebar('hide')
    }

    enoughDiamond(cost) {
        // console.log(this.diamond.count, cost)
        return this.diamond.count >= cost
    }

}
