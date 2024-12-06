def insertionSort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i-1
    while j >= 0 and key < arr[j]:
      arr[j+1] = arr[j]
      j -= 1
    arr[j + 1] = key

arr = [23, 69, 2, 6, 10, 26]
insertionSort(arr)
print('datanya adalah:')
print(arr)
print('setelah disortir menjadi:')
for i in range(len(arr)):
  print(arr[i], end = ' ')

  #C:\Users\user\ODP_IT_BSI\insertionSort.py