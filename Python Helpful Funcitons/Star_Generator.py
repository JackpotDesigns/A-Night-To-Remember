import random

after = ""
final_string = ""
vh = "vh"
vw = "vw"
color = "#fff"

for x in range(696):

    substring = ""

    #vw
    x = random.choice(range(-100,100))
    #vh
    y = random.choice(range(0,100))

    substring = substring + str(x) + vw + " " + str(y) + vh + " " + color + ", "
    final_string = final_string + substring

    if x>0:
        after = after + substring


print(final_string)
print("AFTER\n\n")
print(after)
