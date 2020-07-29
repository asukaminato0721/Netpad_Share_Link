/*
* Copyright (c)2020
*All rights reserved.
* 文件名称：netpad.c
* 当前版本：1.0
* 作    者：wuyudi
* 完成日期：2020 年 07 月 27 日 星期一
*/
#include <stdio.h>
unsigned long id;
int main(void)
{
    printf("input netpad id,input \"Q\" to quit:\n");
    while (scanf("%lu", &id) && id != 'Q')
    {
        printf("https://www.netpad.net.cn/resource_web/course/#/%d\n", id);
        printf(
            "<iframe width=\"772\"\
            height=\"434\"\
            src =\"https://www.netpad.net.cn/thirdInnerPad.html?id=%d#posts/%d\"\
            frameborder=\"0\"\
            scrolling=\"auto\">\
            </iframe>\n",id,id);
        printf("input netpad id,input \"Q\" to quit:\n");
    }
    return 0;
}
