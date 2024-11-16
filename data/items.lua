return {

    ['cigarrete'] = {
        label = '香烟',
        weight = 100,
        stack = true,
        close = true,
        consume = 0,
    },

    ['wire_cutter'] = {
        label = '切割工具',
        weight = 100,
        stack = true,
        close = true,
        consume = 0,
    },

    ['donut'] = {
        label = '甜甜圈',
        weight = 350,
        client = {
            status = { hunger = 200000 },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_amb_donut`, pos = vec3(0.020000, 0.020000, -0.020000), rot = vec3(0.000000, 0.000000, 0.000000) },
            usetime = 2500,
            notification = '你吃了甜甜圈',
        },
    },
    
    ['chips'] = {
        label = '薯片',
        weight = 350,
        client = {
            status = { hunger = 200000 },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_food_cb_chips`, pos = vec3(0.020000, 0.020000, -0.020000), rot = vec3(0.000000, 0.000000, 0.000000) },
            usetime = 2500,
            notification = '你吃了薯片',
        },
    },
    
    ['pizza_ham'] = {
        label = '火腿披萨',
        weight = 350,
        client = {
            status = { hunger = 200000 },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_food_cb_chips`, pos = vec3(0.020000, 0.020000, -0.020000), rot = vec3(0.000000, 0.000000, 0.000000) },
            usetime = 2500,
            notification = '你吃了火腿披萨',
        },
    },     

    ['fries'] = {
        label = '薯条',
        weight = 350,
        client = {
            status = { hunger = 200000 },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_food_cb_chips`, pos = vec3(0.020000, 0.020000, -0.020000), rot = vec3(0.000000, 0.000000, 0.000000) },
            usetime = 2500,
            notification = '你吃了薯条',
        },
    },
    
    ['coffee'] = {
        label = '咖啡',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.010000, 0.010000, 0.060000), rot = vec3(5.000000, 5.000000, -180.500000) },
            usetime = 2500,
            notification = '你用咖啡解渴了',
        },
    },
    
    ['ecola'] = {
        label = '可乐',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.010000, 0.010000, 0.060000), rot = vec3(5.000000, 5.000000, -180.500000) },
            usetime = 2500,
            notification = '你用可乐解渴了',
        },
    },
    

    ['ecola_light'] = {
        label = '可乐',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.010000, 0.010000, 0.060000), rot = vec3(5.000000, 5.000000, -180.500000) },
            usetime = 2500,
            notification = '你用可乐解渴了',
        },
    },

    ['sludgie'] = {
        label = '斯拉吉',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.010000, 0.010000, 0.060000), rot = vec3(5.000000, 5.000000, -180.500000) },
            usetime = 2500,
            notification = '你用斯拉吉解渴了',
        },
    },
    
    ['bandage'] = {
        label = '绷带',
        weight = 115,
        client = {
            anim = { dict = 'missheistdockssetup1clipboard@idle_a', clip = 'idle_a', flag = 49 },
            prop = { model = `prop_rolled_sock_02`, pos = vec3(-0.14, -0.14, -0.08), rot = vec3(-50.0, -50.0, 0.0) },
            disable = { move = true, car = true, combat = true },
            usetime = 2500,
        }
    },
    
    ['black_money'] = {
        label = '黑钱',
    },
    
    ['burger'] = {
        label = '汉堡',
        weight = 220,
        client = {
            status = { hunger = 200000 },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_burger`, pos = vec3(0.020000, 0.020000, -0.020000), rot = vec3(0.000000, 0.000000, 0.000000) },
            usetime = 2500,
            notification = '你吃了一个美味的汉堡',
        },
    },
    

    ['sprunk'] = {
        label = '雪碧',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.01, 0.01, 0.06), rot = vec3(5.0, 5.0, -180.5) },
            usetime = 2500,
            notification = '你用雪碧解渴了',
        }
    },
    
    ['parachute'] = {
        label = '降落伞',
        weight = 8000,
        stack = false,
        client = {
            anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
            usetime = 1500
        }
    },
    
    ['garbage'] = {
        label = '垃圾',
        client = {
            image = 'garbage.png'
        }
    },
    
    ['paperbag'] = {
        label = '纸袋',
        weight = 1,
        stack = false,
        close = false,
        consume = 0
    },
    
    ['identification'] = {
        label = '身份证明',
        client = {
            image = 'card_id.png'
        }
    },
    

    ['panties'] = {
        label = '内裤',
        weight = 10,
        consume = 0,
        client = {
            status = { thirst = -100000, stress = -25000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_cs_panties_02`, pos = vec3(0.03, 0.0, 0.02), rot = vec3(0.0, -13.5, -1.5) },
            usetime = 2500,
        }
    },
    
    ['lockpick'] = {
        label = '开锁工具',
        weight = 160,
    },
    
    ["phone_dongle"] = {
        label = "手机配件",
        weight = 50,
        stack = false,
    },
    
    ["powerbank"] = {
        label = "移动电源",
        weight = 50,
        stack = false,
    },
    
    ['phone'] = {
        label = '手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },    
    
    ['black_phone'] = {
        label = '黑色手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },
    
    ['yellow_phone'] = {
        label = '黄色手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },
    
    ['red_phone'] = {
        label = '红色手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },
    
    ['green_phone'] = {
        label = '绿色手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },    
    
    ['white_phone'] = {
        label = '白色手机',
        weight = 150,
        stack = false,
        consume = 0,
        client = {
            export = "qs-smartphone-pro.UsePhoneItem",
            add = function(total)
                TriggerServerEvent('phone:itemAdd')
            end,
    
            remove = function(total)
                TriggerServerEvent('phone:itemDelete')
            end
        }
    },
    
	['money'] = {
		label = '钱',
	},

    ['mustard'] = {
        label = '芥末酱',
        weight = 500,
        client = {
            status = { hunger = 25000, thirst = 25000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_food_mustard`, pos = vec3(0.01, 0.0, -0.07), rot = vec3(1.0, 1.0, -1.5) },
            usetime = 2500,
            notification = '你……喝了芥末酱'
        }
    },
    
    ['water'] = {
        label = '水',
        weight = 500,
        client = {
            status = { thirst = 300000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
            usetime = 2500,
            cancel = true,
            notification = '你喝了一些清爽的水'
        }
    },
    
    ['radio'] = {
        label = '无线电',
        weight = 1000,
        stack = false,
        allowArmed = true
    },
    
    ['armour'] = {
        label = '防弹背心',
        weight = 3000,
        stack = false,
        client = {
            anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
            usetime = 3500
        }
    },

    ['clothing'] = {
        label = '衣物',
        consume = 0,
    },
    
    ['mastercard'] = {
        label = 'Fleeca 卡',
        stack = false,
        weight = 10,
        client = {
            image = 'card_bank.png'
        }
    },
    
    ['scrapmetal'] = {
        label = '废金属',
        weight = 80,
    },
    
    ["advancedrepairkit"] = {
        label = "高级修理工具包",
        weight = 4000,
        stack = true,
        close = true,
        description = "一个装有工具的工具箱，用于修理车辆",
        client = {
            image = "advancedrepairkit.png",
        },
        server = {
            export = 'vehiclehandler.advancedrepairkit',
        }
    },

    ["tirekit"] = {
        label = "轮胎工具包",
        weight = 250,
        stack = true,
        close = true,
        description = "一个装有工具的工具箱，用于修理轮胎",
        client = {
            image = "tirekit.png",
        },
        server = {
            export = 'vehiclehandler.tirekit'
        }
    },
    
    ["coke_brick"] = {
        label = "可卡因砖块",
        weight = 1000,
        stack = false,
        close = true,
        description = "一大包可卡因，主要用于交易，占用大量空间",
        client = {
            image = "coke_brick.png",
        }
    },
    
    ["dendrogyra_coral"] = {
        label = "柱状珊瑚",
        weight = 1000,
        stack = true,
        close = true,
        description = "也被称为柱状珊瑚",
        client = {
            image = "dendrogyra_coral.png",
        }
    },    

    ["gatecrack"] = {
        label = "门锁破解器",
        weight = 0,
        stack = true,
        close = true,
        description = "一个能突破围栏的实用软件",
        client = {
            image = "usb_device.png",
        }
    },
    
    ["weed_purple-haze"] = {
        label = "紫雾大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克紫雾大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["lawyerpass"] = {
        label = "律师通行证",
        weight = 0,
        stack = false,
        close = false,
        description = "专属律师的通行证，用于证明其可以为嫌疑人辩护",
        client = {
            image = "lawyerpass.png",
        }
    },
    
    ["grape"] = {
        label = "葡萄",
        weight = 100,
        stack = true,
        close = false,
        description = "嗯，美味的葡萄",
        client = {
            image = "grape.png",
        }
    },
    
    ["drill"] = {
        label = "电钻",
        weight = 20000,
        stack = true,
        close = false,
        description = "专业工具...",
        client = {
            image = "drill.png",
        }
    },
    

    ["security_card_01"] = {
        label = "安全卡 A",
        weight = 0,
        stack = true,
        close = true,
        description = "一张安全卡……不知它能打开什么",
        client = {
            image = "security_card_01.png",
        }
    },
    
    ["iphone"] = {
        label = "iPhone",
        weight = 1000,
        stack = true,
        close = true,
        description = "非常昂贵的手机",
        client = {
            image = "iphone.png",
        }
    },
    
    ["antipatharia_coral"] = {
        label = "黑珊瑚",
        weight = 1000,
        stack = true,
        close = true,
        description = "也被称为黑珊瑚或刺珊瑚",
        client = {
            image = "antipatharia_coral.png",
        }
    },
    
    ["ifaks"] = {
        label = "医疗包",
        weight = 200,
        stack = true,
        close = true,
        description = "用于治疗并完全缓解压力的医疗包。",
        client = {
            image = "ifaks.png",
        }
    },    

    ["weaponlicense"] = {
        label = "武器许可证",
        weight = 0,
        stack = false,
        close = true,
        description = "武器许可证",
        client = {
            image = "weaponlicense.png",
        }
    },
    
    ["heavyarmor"] = {
        label = "重型护甲",
        weight = 5000,
        stack = true,
        close = true,
        description = "多点保护不会有坏处... 对吧？",
        client = {
            image = "armor.png",
        }
    },
    
    ["walkstick"] = {
        label = "拐杖",
        weight = 1000,
        stack = true,
        close = true,
        description = "专为奶奶们准备的拐杖.. 哈哈",
        client = {
            image = "walkstick.png",
        }
    },
    
    ["pinger"] = {
        label = "定位器",
        weight = 1000,
        stack = true,
        close = true,
        description = "用定位器和手机可以发送你的位置信息",
        client = {
            image = "pinger.png",
        }
    },
    
    ["coke_small_brick"] = {
        label = "可卡因小包",
        weight = 350,
        stack = false,
        close = true,
        description = "一小包可卡因，主要用于交易，占用大量空间",
        client = {
            image = "coke_small_brick.png",
        }
    },
    
    ["labkey"] = {
        label = "钥匙",
        weight = 500,
        stack = false,
        close = true,
        description = "一把锁的钥匙...?",
        client = {
            image = "labkey.png",
        }
    },
    
    ["weed_white-widow_seed"] = {
        label = "白寡妇种子",
        weight = 0,
        stack = true,
        close = false,
        description = "白寡妇的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["weed_white-widow"] = {
        label = "白寡妇大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克白寡妇大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["snikkel_candy"] = {
        label = "Snikkel 糖果",
        weight = 100,
        stack = true,
        close = true,
        description = "一些美味的糖果 :O",
        client = {
            image = "snikkel_candy.png",
        }
    },
    
    ["firework3"] = {
        label = "爆破烟花",
        weight = 1000,
        stack = true,
        close = true,
        description = "烟花",
        client = {
            image = "firework3.png",
        }
    },
    
    ["twerks_candy"] = {
        label = "Twerks 糖果",
        weight = 100,
        stack = true,
        close = true,
        description = "一些美味的糖果 :O",
        client = {
            image = "twerks_candy.png",
        }
    },
    
    ["beer"] = {
        label = "啤酒",
        weight = 500,
        stack = true,
        close = true,
        description = "没有什么比冰啤酒更好的了！",
        client = {
            image = "beer.png",
        }
    },
    
    ["goldchain"] = {
        label = "金链",
        weight = 1500,
        stack = true,
        close = true,
        description = "金链子，看起来像个大奖！",
        client = {
            image = "goldchain.png",
        }
    },
    
    ["weed_ak47"] = {
        label = "AK47 大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克AK47大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["firework4"] = {
        label = "垂柳烟花",
        weight = 1000,
        stack = true,
        close = true,
        description = "烟花",
        client = {
            image = "firework4.png",
        }
    },
    
    ["grapejuice"] = {
        label = "葡萄汁",
        weight = 200,
        stack = true,
        close = false,
        description = "据说葡萄汁有益健康",
        client = {
            image = "grapejuice.png",
        }
    },
    
    ["harness"] = {
        label = "赛车安全带",
        weight = 1000,
        stack = false,
        close = true,
        description = "赛车安全带，无论如何都能让你待在车里",
        client = {
            image = "harness.png",
        }
    },
    
    ["meth"] = {
        label = "冰毒",
        weight = 100,
        stack = true,
        close = true,
        description = "一小袋冰毒",
        client = {
            image = "meth.png",
        }
    },
    
    ["thermite"] = {
        label = "铝热剂",
        weight = 1000,
        stack = true,
        close = true,
        description = "有时候你会希望一切都能燃烧",
        client = {
            image = "thermite.png",
        }
    },
    
    ["copper"] = {
        label = "铜",
        weight = 100,
        stack = true,
        close = false,
        description = "一块可以用来做点什么的好金属",
        client = {
            image = "copper.png",
        }
    },
    
    ["armor"] = {
        label = "护甲",
        weight = 5000,
        stack = true,
        close = true,
        description = "多点保护不会有坏处... 对吧？",
        client = {
            image = "armor.png",
        }
    },
    
    ["trojan_usb"] = {
        label = "木马USB",
        weight = 0,
        stack = true,
        close = true,
        description = "一个用于关闭某些系统的实用软件",
        client = {
            image = "usb_device.png",
        }
    },
    
    ["weed_ak47_seed"] = {
        label = "AK47 种子",
        weight = 0,
        stack = true,
        close = true,
        description = "AK47的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["firework1"] = {
        label = "两兄弟烟花",
        weight = 1000,
        stack = true,
        close = true,
        description = "烟花",
        client = {
            image = "firework1.png",
        }
    },
    
    ["rubber"] = {
        label = "橡胶",
        weight = 100,
        stack = true,
        close = false,
        description = "橡胶，我想你可以用它做一个橡皮鸭 :D",
        client = {
            image = "rubber.png",
        }
    },
    
    ["nitrous"] = {
        label = "氮气",
        weight = 1000,
        stack = true,
        close = true,
        description = "加速，加油！:D",
        client = {
            image = "nitrous.png",
        }
    },
    
    ["police_stormram"] = {
        label = "破门锤",
        weight = 18000,
        stack = true,
        close = true,
        description = "用于破门的好工具",
        client = {
            image = "police_stormram.png",
        }
    },
    
    ["xtcbaggy"] = {
        label = "一袋摇头丸",
        weight = 0,
        stack = true,
        close = true,
        description = "吞下这些药片吧",
        client = {
            image = "xtcbaggy.png",
        }
    },
    
    ["firework2"] = {
        label = "流行烟花",
        weight = 1000,
        stack = true,
        close = true,
        description = "烟花",
        client = {
            image = "firework2.png",
        }
    },
    
    ["diamond_ring"] = {
        label = "钻戒",
        weight = 1500,
        stack = true,
        close = true,
        description = "一枚钻戒，对我来说像是大奖！",
        client = {
            image = "diamond_ring.png",
        }
    },
    
    ["wine"] = {
        label = "红酒",
        weight = 300,
        stack = true,
        close = false,
        description = "在一个美好的夜晚来杯红酒",
        client = {
            image = "wine.png",
        }
    },
    
    ["binoculars"] = {
        label = "望远镜",
        weight = 600,
        stack = true,
        close = true,
        description = "偷偷摸摸的...",
        client = {
            image = "binoculars.png",
        }
    },
    
    ["diving_fill"] = {
        label = "潜水气瓶",
        weight = 3000,
        stack = false,
        close = true,
        description = "一个氧气瓶和一个循环呼吸器",
        client = {
            image = "diving_fill.png",
        }
    },
    
    ["stickynote"] = {
        label = "便利贴",
        weight = 0,
        stack = false,
        close = false,
        description = "有时候记点事情很方便 :)",
        client = {
            image = "stickynote.png",
        }
    },
    
    ["repairkit"] = {
        label = "修理工具包",
        weight = 2500,
        stack = true,
        close = true,
        description = "一个装有修车工具的好工具箱",
        client = {
            image = "repairkit.png",
        },
        server = {
            export = 'vehiclehandler.repairkit',
        }
    },
    
    ["microwave"] = {
        label = "微波炉",
        weight = 46000,
        stack = false,
        close = true,
        description = "微波炉",
        client = {
            image = "placeholder.png",
        }
    },
    
    ["cola"] = {
        label = "可乐",
        weight = 500,
        stack = true,
        close = true,
        description = "给所有口渴的人",
        client = {
            image = "kurkakola.png",
        }
    },
    
    ["whiskey"] = {
        label = "威士忌",
        weight = 500,
        stack = true,
        close = true,
        description = "给所有口渴的人",
        client = {
            image = "whiskey.png",
        }
    },
    
    ["vodka"] = {
        label = "伏特加",
        weight = 500,
        stack = true,
        close = true,
        description = "给所有口渴的人",
        client = {
            image = "vodka.png",
        }
    },
    
    ["weed_purple-haze_seed"] = {
        label = "紫雾种子",
        weight = 0,
        stack = true,
        close = true,
        description = "紫雾的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["aluminum"] = {
        label = "铝",
        weight = 100,
        stack = true,
        close = false,
        description = "一块可以用来做点什么的好金属",
        client = {
            image = "aluminum.png",
        }
    },
    
    ["sandwich"] = {
        label = "三明治",
        weight = 200,
        stack = true,
        close = true,
        description = "好吃的三明治填饱肚子",
        client = {
            image = "sandwich.png",
        }
    },
    
    ["weed_skunk_seed"] = {
        label = "臭鼬种子",
        weight = 0,
        stack = true,
        close = true,
        description = "臭鼬的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["aluminumoxide"] = {
        label = "铝粉",
        weight = 100,
        stack = true,
        close = false,
        description = "一些用于混合的粉末",
        client = {
            image = "aluminumoxide.png",
        }
    },
    
    ["samsungphone"] = {
        label = "三星 S10",
        weight = 1000,
        stack = true,
        close = true,
        description = "非常昂贵的手机",
        client = {
            image = "samsungphone.png",
        }
    },
    
    ["rolling_paper"] = {
        label = "卷烟纸",
        weight = 0,
        stack = true,
        close = true,
        description = "专为包裹和吸食烟草或大麻而制作的纸。",
        client = {
            image = "rolling_paper.png",
        }
    },
    
    ["weed_amnesia_seed"] = {
        label = "失忆种子",
        weight = 0,
        stack = true,
        close = true,
        description = "失忆的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["printerdocument"] = {
        label = "文件",
        weight = 500,
        stack = false,
        close = true,
        description = "一份不错的文件",
        client = {
            image = "printerdocument.png",
        }
    },
    
    ["weed_skunk"] = {
        label = "臭鼬大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克臭鼬大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["moneybag"] = {
        label = "钱袋",
        weight = 0,
        stack = false,
        close = true,
        description = "装有现金的袋子",
        client = {
            image = "moneybag.png",
        }
    },
    
    ["steel"] = {
        label = "钢",
        weight = 100,
        stack = true,
        close = false,
        description = "一块可以用来做点什么的好金属",
        client = {
            image = "steel.png",
        }
    },
    
    ["empty_weed_bag"] = {
        label = "空的大麻袋",
        weight = 0,
        stack = true,
        close = true,
        description = "一个小空袋子",
        client = {
            image = "weed_baggy_empty.png",
        }
    },
    
    ["weed_nutrition"] = {
        label = "植物肥料",
        weight = 2000,
        stack = true,
        close = true,
        description = "植物营养",
        client = {
            image = "weed_nutrition.png",
        }
    },
    
    ["ironoxide"] = {
        label = "氧化铁粉末",
        weight = 100,
        stack = true,
        close = false,
        description = "一些用于混合的粉末。",
        client = {
            image = "ironoxide.png",
        }
    },
    
    ["iron"] = {
        label = "铁",
        weight = 100,
        stack = true,
        close = false,
        description = "一块可以用来做点什么的实用金属",
        client = {
            image = "iron.png",
        }
    },
    
    ["cokebaggy"] = {
        label = "一袋可卡因",
        weight = 0,
        stack = true,
        close = true,
        description = "快速让人兴奋",
        client = {
            image = "cokebaggy.png",
        }
    },
    
    ["glass"] = {
        label = "玻璃",
        weight = 100,
        stack = true,
        close = false,
        description = "非常易碎，小心使用",
        client = {
            image = "glass.png",
        }
    },
    
    ["diamond"] = {
        label = "钻石",
        weight = 1000,
        stack = true,
        close = true,
        description = "钻石对我来说像是大奖！",
        client = {
            image = "diamond.png",
        }
    },
    
    ["oxy"] = {
        label = "处方药Oxy",
        weight = 0,
        stack = true,
        close = true,
        description = "标签已被撕掉",
        client = {
            image = "oxy.png",
        }
    },
    
    ["electronickit"] = {
        label = "电子套件",
        weight = 100,
        stack = true,
        close = true,
        description = "如果你一直想造个机器人，可以从这里开始。也许你会成为下一个马斯克？",
        client = {
            image = "electronickit.png",
        }
    },
    
    ["handcuffs"] = {
        label = "手铐",
        weight = 100,
        stack = true,
        close = true,
        description = "当人们不守规矩时很有用。也许还能用在其他地方？",
        client = {
            image = "handcuffs.png",
        }
    },
    
    ["security_card_02"] = {
        label = "安全卡 B",
        weight = 0,
        stack = true,
        close = true,
        description = "一张安全卡... 不知它能打开什么",
        client = {
            image = "security_card_02.png",
        }
    },
    
    ["markedbills"] = {
        label = "被标记的钱",
        weight = 1000,
        stack = false,
        close = true,
        description = "钱？",
        client = {
            image = "markedbills.png",
        }
    },
    
    ["cleaningkit"] = {
        label = "清洁工具包",
        weight = 250,
        stack = true,
        close = true,
        description = "一块微纤维布和一些肥皂可以让你的车再次闪闪发光！",
        client = {
            image = "cleaningkit.png",
        },
        server = {
            export = 'vehiclehandler.cleaningkit'
        }
    },    

    ["weed_og-kush"] = {
        label = "OGKush 大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克OG Kush大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["firstaid"] = {
        label = "急救包",
        weight = 2500,
        stack = true,
        close = true,
        description = "你可以使用这个急救包帮助他人恢复",
        client = {
            image = "firstaid.png",
        }
    },
    
    ["painkillers"] = {
        label = "止痛药",
        weight = 0,
        stack = true,
        close = true,
        description = "当你无法忍受疼痛时，这颗药可以让你感觉好一些",
        client = {
            image = "painkillers.png",
        }
    },
    
    ["goldbar"] = {
        label = "金条",
        weight = 7000,
        stack = true,
        close = true,
        description = "看起来很值钱",
        client = {
            image = "goldbar.png",
        }
    },
    
    ["small_tv"] = {
        label = "小电视",
        weight = 30000,
        stack = false,
        close = true,
        description = "电视",
        client = {
            image = "placeholder.png",
        }
    },
    
    ["tablet"] = {
        label = "平板电脑",
        weight = 2000,
        stack = true,
        close = true,
        description = "昂贵的平板电脑",
        client = {
            image = "tablet.png",
        }
    },
    
    ["crack_baggy"] = {
        label = "一袋克拉克",
        weight = 0,
        stack = true,
        close = true,
        description = "让人快速开心",
        client = {
            image = "crack_baggy.png",
        }
    },
    
    ["metalscrap"] = {
        label = "金属废料",
        weight = 100,
        stack = true,
        close = false,
        description = "你可能能用这个做些不错的东西",
        client = {
            image = "metalscrap.png",
        }
    },
    
    ["cryptostick"] = {
        label = "加密棒",
        weight = 200,
        stack = false,
        close = true,
        description = "为什么会有人购买不存在的钱... 它会包含多少呢？",
        client = {
            image = "cryptostick.png",
        }
    },
    
    ["plastic"] = {
        label = "塑料",
        weight = 100,
        stack = true,
        close = false,
        description = "循环利用！——Greta Thunberg 2019",
        client = {
            image = "plastic.png",
        }
    },
    
    ["lighter"] = {
        label = "打火机",
        weight = 0,
        stack = true,
        close = true,
        description = "新年时的好伙伴",
        client = {
            image = "lighter.png",
        }
    },
    
    ["10kgoldchain"] = {
        label = "金链",
        weight = 2000,
        stack = true,
        close = true,
        description = "10克拉的金链",
        client = {
            image = "10kgoldchain.png",
        }
    },
    
    ["weed_amnesia"] = {
        label = "失忆大麻",
        weight = 200,
        stack = true,
        close = false,
        description = "一袋装有2克失忆大麻",
        client = {
            image = "weed_baggy.png",
        }
    },
    
    ["jerry_can"] = {
        label = "油桶",
        weight = 20000,
        stack = true,
        close = true,
        description = "一桶20L燃油",
        client = {
            image = "jerry_can.png",
        }
    },
    
    ["filled_evidence_bag"] = {
        label = "证据袋",
        weight = 200,
        stack = false,
        close = false,
        description = "一个装满的证据袋，可以用来揭示犯罪者 >:(",
        client = {
            image = "evidence.png",
        }
    },
    
    ["toaster"] = {
        label = "烤面包机",
        weight = 18000,
        stack = false,
        close = true,
        description = "吐司",
        client = {
            image = "placeholder.png",
        }
    },
    
    ["water_bottle"] = {
        label = "一瓶水",
        weight = 500,
        stack = true,
        close = true,
        description = "给所有口渴的人",
        client = {
            image = "water_bottle.png",
        }
    },
    
    ["radioscanner"] = {
        label = "无线电扫描器",
        weight = 1000,
        stack = true,
        close = true,
        description = "可以接收到一些警报，不过不完全有效",
        client = {
            image = "radioscanner.png",
        }
    },
    
    ["rolex"] = {
        label = "金表",
        weight = 1500,
        stack = true,
        close = true,
        description = "金表，对我来说像是大奖！",
        client = {
            image = "rolex.png",
        }
    },
    
    ["tosti"] = {
        label = "烤奶酪三明治",
        weight = 200,
        stack = true,
        close = true,
        description = "好吃的",
        client = {
            image = "tosti.png",
        }
    },
    
    ["empty_evidence_bag"] = {
        label = "空证据袋",
        weight = 0,
        stack = true,
        close = false,
        description = "常用于保存血液、弹壳等的DNA",
        client = {
            image = "evidence.png",
        }
    },
    
    ["screwdriverset"] = {
        label = "工具包",
        weight = 1000,
        stack = true,
        close = false,
        description = "非常适合拧...螺丝...",
        client = {
            image = "screwdriverset.png",
        }
    },
    
    ["weed_brick"] = {
        label = "大麻砖块",
        weight = 1000,
        stack = true,
        close = true,
        description = "1公斤的大麻砖，用于卖给大客户。",
        client = {
            image = "weed_brick.png",
        }
    },
    
    ["diving_gear"] = {
        label = "潜水装备",
        weight = 30000,
        stack = false,
        close = true,
        description = "一个氧气瓶和一个循环呼吸器",
        client = {
            image = "diving_gear.png",
        }
    },
    
    ["certificate"] = {
        label = "证书",
        weight = 0,
        stack = true,
        close = true,
        description = "证明你拥有某些东西的证书",
        client = {
            image = "certificate.png",
        }
    },
    
    ["id_card"] = {
        label = "身份证",
        weight = 0,
        stack = false,
        close = false,
        description = "包含你的所有信息的卡片，用于识别自己",
        client = {
            image = "id_card.png",
        }
    },
    
    ["joint"] = {
        label = "卷烟",
        weight = 0,
        stack = true,
        close = true,
        description = "Sidney会为你感到骄傲",
        client = {
            image = "joint.png",
        }
    },
    
    ["driver_license"] = {
        label = "驾照",
        weight = 0,
        stack = false,
        close = false,
        description = "证明你可以驾驶车辆的许可证",
        client = {
            image = "driver_license.png",
        }
    },
    
    ["advancedlockpick"] = {
        label = "高级开锁器",
        weight = 500,
        stack = true,
        close = true,
        description = "如果你经常丢失钥匙，这个非常有用……还可以用来打开啤酒",
        client = {
            image = "advancedlockpick.png",
        }
    },
    
    ["weed_og-kush_seed"] = {
        label = "OGKush 种子",
        weight = 0,
        stack = true,
        close = true,
        description = "OG Kush的大麻种子",
        client = {
            image = "weed_seed.png",
        }
    },
    
    ["casinochips"] = {
        label = "赌场筹码",
        weight = 0,
        stack = true,
        close = false,
        description = "用于赌场赌博的筹码",
        client = {
            image = "casinochips.png",
        }
    },
    
    ["laptop"] = {
        label = "笔记本电脑",
        weight = 4000,
        stack = true,
        close = true,
        description = "昂贵的笔记本电脑",
        client = {
            image = "laptop.png",
        }
    },
    
    ["visa"] = {
        label = "Visa 卡",
        weight = 0,
        stack = false,
        close = false,
        description = "Visa 卡可以在ATM使用",
        client = {
            image = "visa.png",
        }
    },
    
    ["spikestrip"] = {
        label = "钉刺带",
        weight = 500,
        stack = true,
    },
    
    ['tuning_component'] = {
        label = '调节组件',
        weight = 1000,
        client = {
            image = 'item_component.png',
        }
    },

    ['bobby_pin'] = {
        label = '发夹',
        weight = 0,
        stack = true
    },

    ["field_dressing"] = {
        label = "现场敷料",
        weight = 1
    },

    ["packing_bandage"] = {
        label = "填塞绷带",
        weight = 1
    },

    ["elastic_bandage"] = {
        label = "弹性绷带",
        weight = 1
    },

    ["quickclot"] = {
        label = "快速止血剂",
        weight = 1
    },

    ["blood_100"] = {
        label = "血液100ml",
        weight = 1
    },

    ["blood_250"] = {
        label = "血液250ml",
        weight = 1
    },

    ["blood_500"] = {
        label = "血液500ml",
        weight = 1
    },

    ["blood_750"] = {
        label = "血液750ml",
        weight = 1
    },

    ["blood_1000"] = {
        label = "血液1L",
        weight = 1
    },

    ["morphine"] = {
        label = "吗啡",
        weight = 1
    },

    ["epinephrine"] = {
        label = "肾上腺素",
        weight = 1
    },

    ["emergency_revive_kit"] = {
        label = "复苏包",
        weight = 1
    },

    ["surgical_kit"] = {
        label = "手术包",
        weight = 1
    },

    ["tourniquet"] = {
        label = "止血带",
        weight = 1
    },

    ["ecg_monitor"] = {
        label = "心电图仪",
        weight = 1
    },

    ["fentanyl"] = {
        label = "芬太尼",
        weight = 1
    },

    ["propofol_100"] = {
        label = "丙泊酚100ml",
        weight = 1
    },

    ["propofol_250"] = {
        label = "丙泊酚250ml",
        weight = 1
    },

    ["vehiclekeys"] = {
        label = "车钥匙",
        weight = 1,
        stack = false,
        close = false,
        consume = 0,
    },
    
    ['plate'] = {
        label = '车牌',
        weight = 100,
        stack = true,
        close = false,
        description = "车辆的车牌",
        consume = 0,
    },
    
    ['carlockpick'] = {
        label = '车辆撬锁工具',
        weight = 100,
        stack = true,
        close = false,
    },
    
    ['caradvancedlockpick'] = {
        label = '高级车辆撬锁工具',
        weight = 100,
        stack = true,
        close = false,
    },
    

}
