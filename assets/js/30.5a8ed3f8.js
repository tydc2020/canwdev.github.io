(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{567:function(t,n,s){"use strict";s.r(n);var a=s(57),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"android-刷机备份步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-刷机备份步骤"}},[t._v("#")]),t._v(" Android 刷机备份步骤")]),t._v(" "),s("blockquote",[s("p",[t._v("2020-03-03")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("插电、断网，使用 "),s("strong",[t._v("SDMaid")]),t._v(" 或其他的什么清理软件清理垃圾和缓存")])]),t._v(" "),s("li",[s("p",[t._v("备份通讯录，导出为 vcf")])]),t._v(" "),s("li",[s("p",[t._v("如果系统有自带备份软件，先用这个软件备份一遍系统设置（方便下次刷回来的时候使用）")])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("strong",[t._v("钛备份")]),t._v("备份应用程序和数据：")]),t._v(" "),s("ul",[s("li",[t._v("系统数据：通话记录、数据使用情况、信息、Wi-Fi接入点、桌面布局、输入法")]),t._v(" "),s("li",[t._v("用户应用：静读天下、备份所有用户数据，时间很长，也可以同时执行第 4 步操作")]),t._v(" "),s("li",[t._v("linux-deploy 等写入到 "),s("code",[t._v("/data")]),t._v(" 分区的数据")]),t._v(" "),s("li",[t._v("毒瘤应用：京东、淘宝等耗时太长，不建议备份，可清除应用数据后再备份")])])]),t._v(" "),s("li",[s("p",[t._v("备份内置存储（"),s("code",[t._v("/sdcard")]),t._v("）数据：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("各类文件打包，使用 "),s("strong",[t._v("Termux")]),t._v(" 或者 "),s("code",[t._v("adb shell")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /sdcard\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Android 应用文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" czf Android.tgz Android/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 毒瘤应用（示例）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" czf tencent.tgz tencent/\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压缩则是：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" cxf tencent.tgz\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("等待上面的备份操作完成后，使用 "),s("strong",[t._v("TotalCommander(TC)")]),t._v(" 的 ADBPlugin.wfx 插件（或 "),s("code",[t._v("ssh")]),t._v(" + "),s("code",[t._v("rsync")]),t._v("）将用户文件复制到电脑：")]),t._v(" "),s("ul",[s("li",[t._v("个人文件：ADM、Books、BlueDict、Flash")]),t._v(" "),s("li",[t._v("系统创建的文件夹：Alarms、DCIM、Documents、Download、Movies、Music、Notifications、Pictures、Podcasts、Ringtones")]),t._v(" "),s("li",[t._v("备份文件：MIUI、data、"),s("strong",[t._v("TitaniumBackup")]),t._v("、TWRP")]),t._v(" "),s("li",[t._v("打包的备份文件：Android.tgz、tencent.tgz")])])]),t._v(" "),s("li",[s("p",[t._v("备份/复制文件的时间非常漫长，这个时候你可以去整理刷机文件，或干点别的事。刷完机后，恢复数据的顺序应该从下到上进行。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("注：使用 TC 菜单栏中的 "),s("code",[t._v("标记>导出选择")]),t._v(" 功能，下次在导入即可重新选择这些文件")])]),t._v(" "),s("p",[t._v("backup_selection.txt")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".@sdcard\\\nADM\\\nBooks\\\nBlueDict\\\nFlash\\\nAlarms\\\nDCIM\\\nDocuments\\\nDownload\\\nMovies\\\nMusic\\\nNotifications\\\nPictures\\\nPodcasts\\\nRingtones\\\nMIUI\\\ndata\\\nTitaniumBackup\\\nTWRP\\\nAndroid.tgz\ntencent.tgz\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);