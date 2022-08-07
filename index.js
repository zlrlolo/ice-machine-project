// 制作搓冰的函数
async function ice_play(count) {
    const lvs1 = [
        "img/挫冰产物/s1等级/牺牲者.png",
        "img/挫冰产物/s1等级/狂战士.png",
        "img/挫冰产物/s1等级/强化卷轴Lv.10.png",
    ]
    const lvs2 = [
        "img/挫冰产物/s2等级/强化卷轴Lv.9.png",
        "img/挫冰产物/s2等级/皇家女仆发带（娜薇）.png",
        "img/挫冰产物/s2等级/皇家女仆耳环（娜薇）.png",
        "img/挫冰产物/s2等级/皇家迷你女仆（娜薇）.png",
        "img/挫冰产物/s2等级/皇家女仆武器（娜薇）.png",
    ]
    const lvs3 = [
        "img/挫冰产物/s3等级/皇家女仆上衣（娜薇）.png",
        "img/挫冰产物/s3等级/皇家女仆下衣（娜薇）.png",
        "img/挫冰产物/s3等级/皇家女仆发型（娜薇）.png",
    ]
    const lvs4 = [
        "img/挫冰产物/s4等级/皇家女仆鞋子（娜薇）.png",
        "img/挫冰产物/s4等级/皇家女仆手套（娜薇）.png",
    ]
    const lvs5 = [
        "img/挫冰产物/s5等级/强化卷轴Lv.7.png",
        "img/挫冰产物/s5等级/强化卷轴Lv.8.png",
        "img/挫冰产物/s5等级/不灭的斗志.png",
        "img/挫冰产物/s5等级/三位一体之力.png",
    ]

    const lva = [
        "img/挫冰产物/a1等级/HP增加特级魔法石.png",
        "img/挫冰产物/a1等级/晋级时装宝箱（7日）.png",
        "img/挫冰产物/a1等级/暴击特级魔法石png.png",
        "img/挫冰产物/a1等级/极大化特级魔法石.png",
        "img/挫冰产物/a1等级/减少伤害特级魔法石.png",
        "img/挫冰产物/a1等级/动作速度特级魔法石.png",
        "img/挫冰产物/a1等级/追加伤害特级魔法石.png",
        "img/挫冰产物/a1等级/奥利哈刚武器饰品宝箱.png",
    ]
    const lvb1 = [
        "img/挫冰产物/b1等级/史诗NPC卡片‘代码：Q-Proto_00’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘绿色森林拉银’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘铁血上校艾丹’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘影子魔女斯皮卡’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘痛苦的君主巴拉克’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘风之射手阿梅利亚’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘古代纳斯德公主苹果’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘艾尔搜查队队长罗尔’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘近卫队长冰雪公主诺娅’.png",
        "img/挫冰产物/b1等级/史诗NPC卡片‘红色骑士团十夫长范恩西欧’.png",
    ]
    const lvb2 = [
        "img/挫冰产物/b2等级/完全恢复药水宝箱.png",
    ]
    const lvc = [
        "img/挫冰产物/c1等级/拜德BOSS宝箱.png",
        "img/挫冰产物/c1等级/沛塔BOSS宝箱.png",
        "img/挫冰产物/c1等级/艾德BOSS宝箱.png",
        "img/挫冰产物/c1等级/魔奇BOSS宝箱.png",
        "img/挫冰产物/c1等级/厄泰拉BOSS宝箱.png",
        "img/挫冰产物/c1等级/哈梅尔BOSS宝箱.png",
        "img/挫冰产物/c1等级/拉诺斯BOSS宝箱.png",
        "img/挫冰产物/c1等级/桑德斯BOSS宝箱.png",
        "img/挫冰产物/c1等级/贝斯马BOSS宝箱.png",
        "img/挫冰产物/c1等级/光水晶球(250个).png",
        "img/挫冰产物/c1等级/水水晶球(250个).png",
        "img/挫冰产物/c1等级/地水晶球(250个）.png",
        "img/挫冰产物/c1等级/艾丽西昂BOSS宝箱.png",
        "img/挫冰产物/c1等级/暗之水晶球(250个).png",
        "img/挫冰产物/c1等级/风之水晶球(250个).png",
        "img/挫冰产物/c1等级/火之水晶球（250个）宝箱.png",
        "img/挫冰产物/c1等级/艾尔结晶（水）（30个.png",
        "img/挫冰产物/c1等级/艾尔结晶（光）（30个）.png",
        "img/挫冰产物/c1等级/艾尔结晶（地）（30个）.png",
        "img/挫冰产物/c1等级/艾尔结晶（暗）（30个）.png",
        "img/挫冰产物/c1等级/艾尔结晶（火）（30个）.png",
        "img/挫冰产物/c1等级/艾尔结晶（风）（30个）.png",
        "img/挫冰产物/c1等级/艾尔结晶（未鉴定）（30个）.png",
    ]

    // 做一个随机输出数组中值的函数
    function choice(a) {
        let l = a.length;
        let int = Math.floor(Math.random() * Math.floor(l));
        return a[int];
    }

    // 循环输出随机结果；
    // async function main() {
    for (let i = 0; i < count; i++) {
        await new Promise(function (resolve, reject) {
            setTimeout(resolve, 100)
        })
        // 每一次取不等概率判定是哪一组
        let lev;
        let flag = 0;
        let random = Math.random();
        if (random >= 0 && random < 0.001) {
            lev = lvs1;
            flag = 1;
        } else if (random >= 0.001 && random < 0.011) {
            lev = lvs2;
            flag = 1;
        } else if (random >= 0.011 && random < 0.030) {
            lev = lvs3;
            flag = 1;
        } else if (random >= 0.030 && random < 0.053) {
            lev = lvs4;
            flag = 1;
        } else if (random >= 0.053 && random < 0.077) {
            lev = lvs5;

        } else if (random >= 0.077 && random < 0.192) {
            lev = lva;
        } else if (random >= 0.192 && random < 0.516) {
            lev = lvb1;
        } else if (random >= 0.516 && random < 0.84) {
            lev = lvb2;
        } else {
            lev = lvc;
        }
        console.log(lev)
        // 结果是这个组的随机某一个值
        let result10 = choice(lev);
        // 取到结果的图片地址
        const re = document.querySelector('.result');
        // 替换图片进临时窗口 box_poc 替换这个地址
        let change_img = document.querySelector('.box_pic');
        change_img.src = result10;
        //取到结果的名称
        let name = result10.slice(14, result10.length - 4);
        // 替换名称进临时窗口box_name
        let box_name = document.querySelector('.box_name');
        box_name.textContent = name;
        // 将地址放入这个img里插入背包页面
        const img = document.createElement("img");
        img.setAttribute('src', result10);
        // console.log(result10)
        re.appendChild(img);
        // 检测是否是高级物品
        if (flag === 1) {
            // 取到内容物的名字和需要加入的大区
            let name = result10.slice(14, result10.length - 4);
            let message = document.querySelector('.message');
            // 生成一个div 属于ice_span
            const ice_span = document.createElement('span');
            ice_span.className = 'ice_span';
            ice_span.innerHTML = '<span class="yellow">*&nbsp;在</span>\n' +
                '        <span class=>挫冰机（拉比皇家女仆)</span>\n' +
                '        <span class="yellow">获得</span>\n' +
                '        <span class="massage_name">' + name + '</span>\n' +
                '        <span>道具!</span>'
            // 插入这个组
            message.appendChild(ice_span);
        }
    }
}

// 挫冰机确认按钮用途
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let ICE_index = document.querySelector('.ICE_index');
let t40 = document.querySelector('.t40');
let message_name = document.querySelector('.message');
yes.addEventListener('click', function () {
    ICE_index.style.display = 'none';
    t40.style.display = 'block';
    bt_voice_click();
});
// t40 界面按钮用途
let bt40 = document.querySelector('.bt40');
let bt200 = document.querySelector('.bt200');
let back = document.querySelector('.bt_back');
let backpack_img = document.querySelector('.result');
// let message_name=document.querySelector('.message');
bt40.addEventListener('click',
    async function () {
        bt_voice_click();
        backpack_img.innerHTML = "";
        message_name.innerHTML = '';
        message_name.style.display = 'block';
        bt40.disabled = true;
        bt200.disabled = true;
        await ice_play(20);
        bt40.disabled = false;
        bt200.disabled = false;
    });

bt200.addEventListener('click',
    async function () {
        bt_voice_click();
        backpack_img.innerHTML = "";
        message_name.innerHTML = '';
        message_name.style.display = 'block';
        bt40.disabled = true;
        bt200.disabled = true;
        await ice_play(100);
        bt40.disabled = false;
        bt200.disabled = false;
    })

back.addEventListener('click', function () {
    bt_voice_click();
    ICE_index.style.display = 'block';
    t40.style.display = 'none';
    message_name.style.display = 'none';
    backpack_img.innerHTML = "";
    message_name.innerHTML = '';
    window.location.reload();
});

// 音效部分
function bt_voice_click() {
    const audio = document.createElement("audio");
    audio.src = "/音效/点击按钮.mp3";
    audio.play();
}