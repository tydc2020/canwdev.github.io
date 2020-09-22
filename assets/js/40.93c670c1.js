(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{605:function(s,t,a){"use strict";a.r(t);var e=a(57),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-rsync-克隆-linux-系统-mbr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-rsync-克隆-linux-系统-mbr"}},[s._v("#")]),s._v(" 使用 rsync 克隆 Linux 系统（MBR）")]),s._v(" "),a("h2",{attrs:{id:"_1-给新的磁盘分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-给新的磁盘分区"}},[s._v("#")]),s._v(" 1. 给新的磁盘分区")]),s._v(" "),a("p",[s._v("推荐使用 KDE Partition Manager 进行分区操作。")]),s._v(" "),a("p",[s._v("命令行可以使用 "),a("code",[s._v("fdisk")]),s._v(" 或 "),a("code",[s._v("gdisk")]),s._v("，具体操作细节略。")]),s._v(" "),a("h2",{attrs:{id:"_2-使用-rsync-拷贝系统文件到新的分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-rsync-拷贝系统文件到新的分区"}},[s._v("#")]),s._v(" 2. 使用 rsync 拷贝系统文件到新的分区")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -avrh --progress /mnt/os_old/ /mnt/os_new/\n")])])]),a("h2",{attrs:{id:"_3-修改配置文件的-uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改配置文件的-uuid"}},[s._v("#")]),s._v(" 3. 修改配置文件的 UUID")]),s._v(" "),a("p",[s._v("新的分区和原来的分区 UUID 肯定是不同的，为了让系统正常启动，需要修改这几个文件：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/etc/fstab")])]),s._v(" "),a("li",[a("code",[s._v("/boot/grub/grub.cfg")]),s._v(" —— 这个文件虽然是自动生成的，但为了方便起见也可以手动修改")])]),s._v(" "),a("p",[s._v("用 "),a("code",[s._v("vim /etc/fstab")]),s._v(" 打开，可以看到里面像这样：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# /etc/fstab: static file system information.\n#\n# Use 'blkid' to print the universally unique identifier for a device; this may\n# be used with UUID= as a more robust way to name devices that works even if\n# disks are added and removed. See fstab(5).\n#\n# <file system>             <mount point>  <type>  <options>  <dump>  <pass>\nUUID=45a8f854-55c1-435b-b37e-8cfce8f8a6b2 /              ext4    defaults,noatime 0 1\n")])])]),a("p",[s._v("其中 "),a("code",[s._v("45a8f854-55c1-435b-b37e-8cfce8f8a6b2")]),s._v(" 就是旧分区 UUID 值了，需要把它换成新分区的值。")]),s._v(" "),a("p",[s._v("查看分区 UUID 命令，有多种方式：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("sudo blkid")])]),s._v(" "),a("li",[a("code",[s._v("ls -l /dev/disk/by-uuid")])])]),s._v(" "),a("p",[s._v("用任意一种，确定新分区的 UUID 然后替换上面两个文件的旧 UUID 就可以了。")]),s._v(" "),a("h2",{attrs:{id:"_4-修复-grub-引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修复-grub-引导"}},[s._v("#")]),s._v(" 4. 修复 GRUB 引导")]),s._v(" "),a("h3",{attrs:{id:"_4-1-修复-grub-mbr-引导扇区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-修复-grub-mbr-引导扇区"}},[s._v("#")]),s._v(" 4.1 修复 GRUB MBR 引导扇区")]),s._v(" "),a("blockquote",[a("p",[s._v("也适用于任何磁盘丢失 MBR 引导的问题")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用光盘镜像启动到 Live 环境。")])]),s._v(" "),a("li",[a("p",[s._v("终端运行 "),a("code",[s._v("lsblk")]),s._v(" 命令找到目标系统磁盘（例如 "),a("code",[s._v("/dev/sda")]),s._v("），和包含系统的分区（例如 "),a("code",[s._v("/dev/sda1")]),s._v("）。")])]),s._v(" "),a("li",[a("p",[s._v("挂载系统，并进入 "),a("code",[s._v("chroot")]),s._v(" 环境：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sda1 /mnt/system\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t proc proc /mnt/system/proc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t sysfs sys /mnt/system/sys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" /dev /mnt/system/dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chroot")]),s._v(" /mnt/system/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 现在已经进入了 chroot 环境，可以看到当前根目录 `/` 下的文件都是原来文件系统里的文件。")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 chroot 环境执行 "),a("code",[s._v("grub-install /dev/sda")]),s._v(" ，为该磁盘安装 GRUB MBR 引导程序。")])])]),s._v(" "),a("h3",{attrs:{id:"_4-2-修复-grub-efi-引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修复-grub-efi-引导"}},[s._v("#")]),s._v(" 4.2 修复 GRUB EFI 引导")]),s._v(" "),a("p",[s._v("挂载分区")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/nvme0n1p3 /mnt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/nvme0n1p1 /mnt/boot/efi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /dev /dev/pts /proc /sys /run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -B "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" /mnt"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("p",[s._v("使用 chroot 修复引导")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo chroot /mnt\ngrub-install /dev/nvme0n1\n")])])]),a("p",[s._v("如果报错：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("正在为 x86_64-efi 平台进行安装。\nEFI variables are not supported on this system.\nEFI variables are not supported on this system.\ngrub-install：错误： efibootmgr failed to register the boot entry: 没有那个文件或目录.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 退出到系统终端\nexit\n# 执行这条命令\nsudo mount --bind /sys/firmware/efi/efivars/ /mnt/sys/firmware/efi/efivars/\n# 再次进入 chroot\nsudo chroot /mnt\n# 重新修复引导\ngrub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub --recheck\n")])])]),a("p",[s._v("安装成功：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("正在为 x86_64-efi 平台进行安装。\n安装完成。没有报告错误。\n")])])]),a("p",[s._v("后续工作：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新grub设置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grub-mkconfig")]),s._v(" -o /boot/grub/grub.cfg \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用 `update-grub`，其实这条命令就是封装了上一条命令的 shell 脚本")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);