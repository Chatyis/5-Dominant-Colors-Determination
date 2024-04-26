# 5 Dominant Colors Determination
Full-stack web application which purpose is to determine 5 dominant colors on the passed image with selected parameters
![image](https://github.com/Chatyis/5-Dominant-Colors-Determination/assets/32648007/f4042bbf-411f-48c7-8310-9062f982b9dd)

## Algorithm
Algorithm was based on the: _Y. Chang and N. Mukai, Color Feature Based Dominant Color Extraction, IEEE Access, vol. 10, pp. 93055-93061, 2022, doi: 10.1109/ACCESS.2022.3202632._ With some changes applied

example input image:

![image](https://github.com/Chatyis/5-Dominant-Colors-Determination/assets/32648007/7d7cca80-00cb-4c68-966d-92e006ce5367)

bilateral filter applied:

![image](https://github.com/Chatyis/5-Dominant-Colors-Determination/assets/32648007/abc78dcd-8aaa-4c80-98ae-573a6fc78c50)

K-means algorithm applied:

![image](https://github.com/Chatyis/5-Dominant-Colors-Determination/assets/32648007/7890b4cf-2115-44e5-9ddd-65d7dd8ee792)

After image is prepared there are values calculated for each candidate color for

1. Contrast
2. Amount
3. Saturation

every one of these parameters are normalised and summed for each candidate color

Finally dominant colors are determined in the following criteria:

1. First color is with the highest saturation
2. Second color is that taking the most space
3. Last 3 colors are determined by comparison of each candidate color parameters with already chosen one.

example response:

{
  "result": [
    [
      212,
      153,
      124
    ],
    [
      220,
      201,
      182
    ],
    [
      23,
      16,
      15
    ],
    [
      74,
      43,
      31
    ],
    [
      206,
      151,
      109
    ]
  ]
}
