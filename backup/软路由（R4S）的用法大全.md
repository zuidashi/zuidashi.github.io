### 固件收集
iStoreOS:    https://www.istoreos.com/
骷髅头编译固件：https://github.com/DHDAXCW
小朋友编译固件：https://github.com/thomaswcy
klever 1988编译固件：https://github.com/klever1988/nanopi-openwrt
soffchen编译固件：https://github.com/soffchen/NanoPi-R2S
QiuSimons GC404编译固件：https://github.com/QiuSimons/YAOF

### iStoreOS和卡刷教程
官方网站  https://www.istoreos.com/

#### 准备工作：
- 一个 TF卡/SD卡
- 一个 USB 读卡器
- 一台 windows 电脑

#### 下载固件：
根据具体机型的文档，下载 .img.gz 固件，下载后不需要解压。

#### 做启动盘：
- 电脑上用 rufus 将固件写入 TF卡/SD卡。 官网下载：https://rufus.ie/zh/
- 电脑插入U盘/读卡器，打开rufus工具，选择下载好的固件，把固件写入到TF卡/SD卡中。
- 将写入了固件的TF卡/SD卡插入到目标设备中，通电启动。
![Image](https://blog.aklin.cn/images/20250313180624.png)

#### 后台管理：
- 默认IP http://192.168.100.1/ 或者 http://iStoreOS.lan/
- 默认密码：password
- 如果设备只有一个网口，则此网口就是 LAN；如果大于一个网口，默认第一个网口是 WAN 口，其它都是 LAN。
- 如果要修改 LAN 口 IP，首页有个内网设置，或者用命令 quickstart 修改。

### 解决软件源的问题
ssh工具登录路由器, 地址:192.168.100.1, 端口: 22, 账号密码和后台一样.
运行以下代码:
`sh -c "$(curl -sSL https://fw.koolcenter.com/iStoreOS/alpha/fix-istore.sh)"`

### 插件安装方法
参考大神编译好的插件
[Are-u-ok/apps at main · AUK9527/Are-u-ok · GitHub](https://github.com/AUK9527/Are-u-ok/tree/main/apps)

### Passwall负载均衡的使用
首先，节点的账号密码密钥等最好都是相同的

#### 节点配置:
![Image](https://blog.aklin.cn/images/20250313181607.png)
![Image](https://blog.aklin.cn/images/20250313181556.png)

#### 添加使用节点
![Image](https://blog.aklin.cn/images/20250313181937.png)

### Hysertia2节点+Sing-Box的使用
![Image](https://blog.aklin.cn/images/20250313182315.png)