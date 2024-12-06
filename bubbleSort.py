def bubbleSort(arr):
   n = len(arr)
   for i in range (n):
     for j in range (0, n-i-1):
      if arr[j] > arr [j+1] :
        arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [ 23, 42, 435, 334, 23, 12, 246, 1, 34, 9, 98, 4]

bubbleSort(arr)

print(" Sorted array is: ")

for i in range(len(arr)):
   print(arr[i], end = ' ')