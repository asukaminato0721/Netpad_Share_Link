from clipboard import copy
while True:
    id_ = input("input netpad id,input \"q\" to quit:\n")
    if id_ != "q":
        print(f"https://www.netpad.net.cn/resource_web/course/#/{id_}\n")
        print(
            "<iframe width=\"772\" "
            "height=\"434\" "
            f"src =\"https://www.netpad.net.cn/thirdInnerPad.html?id={id_}#posts/{id_}\" " +
            "frameborder=\"0\" "
            "scrolling=\"auto\"> "
            "</iframe>\n")
    else:
        break
    num = input("input 1: copy first link, 2. second link\n")
    if num == "1":
        copy(f"https://www.netpad.net.cn/resource_web/course/#/{id_}")
    elif num == 2:
        copy("<iframe width=\"772\" "
             "height=\"434\" "
             f"src =\"https://www.netpad.net.cn/thirdInnerPad.html?id={id_}#posts/{id_}\" " +
             "frameborder=\"0\" "
             "scrolling=\"auto\"> "
             "</iframe>\n")
    print('\nlink copied to copyboard')
