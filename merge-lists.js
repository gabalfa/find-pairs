function merge_lists(nums1, m, nums2, n) {
  let pointer = nums1.length - 1;
  let pointer1 = m - 1;
  let pointer2 = n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[pointer] = nums2[pointer2];
      pointer2--;
    }
    pointer--;
  }

  if (n != m) {
    nums1.splice(0, pointer2 + 1, ...nums2.slice(0, pointer2 + 1));
  }

  console.log(nums1);
}
// Input
let nums1 = [1, 2, 3, 0, 0, 0, 0];
let m = 3;
let nums2 = [-4, 2, 3, 9];
let n = 4;
merge_lists(nums1, m, nums2, n);

// Output
// [-4,1,2,2,3,3,9]
