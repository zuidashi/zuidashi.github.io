## Windows系统没有访问权限
### 一、修改策略组  `gpedit.msc`
禁用SMB客户端签名要求:
导航到“计算机配置” > “Windows 设置” > “安全设置” > “本地策略” > “安全选项”。
找到并双击“Microsoft网络客户端：对通信进行数字签名（始终）”。
选择“已禁用”，然后点击“确定”。

### 二、启用不安全的来宾登录
同样在“本地组策略编辑器”中。
导航到“计算机配置” > “管理模板” > “网络” > “Lanman 工作站”。
双击“启用不安全的来宾登录”，选择“已启用”，然后点击“确定”

### 三、重启电脑
重新尝试连接smb共享

## 访问时提示 "未正确安装扩展..."
### 关闭SMB签名
以管理员身份打开 PowerShell 并运行以下命令以禁用 SMB 签名并重新启动计算机以查看是否可以解决问题：
```
Set-SmbClientConfiguration -RequireSecuritySignature $false
Set-SmbServerConfiguration -RequireSecuritySignature $false
```