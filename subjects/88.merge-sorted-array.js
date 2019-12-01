// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var j = 0;//nums1的第j位
    for (var i = 0; i < nums2.length; i++) {//nums2的第i位
        while (!(nums2[i] < nums1[j] || j >= m + i)) j++;
        for (var k = nums1.length - 1; k > j; k--) nums1[k] = nums1[k - 1];
        nums1[j] = nums2[i];
    }

作者：rhinoc
链接：https://leetcode-cn.com/problems/merge-sorted-array/solution/javascript-he-bing-liang-ge-you-xu-shu-zu-by-rhino/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};