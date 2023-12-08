import Vue from 'vue';

export default function  useCounter() {
    const counterData = Vue.observable({
        count :100,
    })


const modifyCounter =(value) => {
    counterData.count += value;
};

//定义奇偶性
const odd_even = Vue.computed(() =>{
if(counterData.count% 2 === 0) return "偶数";
else return "奇数"
});

return {
    counterData,
    modifyCounter,
    odd_even
}

}