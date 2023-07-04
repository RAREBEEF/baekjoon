def solution(input):
    len = input.pop(0)
    nums = input
    tokDict = {}

    for i in range(len):
        n = nums[i]

        if tokDict.get(n) == None:
            count = 0

            for j in range(len):
                if n % nums[j] == 0:
                    count += 1

            tokDict[n] = count - 1

        print(tokDict[n])


filePath = "./input1.txt"
file = open(filePath, "r")
# input = list(map(int, input()))
print(input().split())

# solution(input)
