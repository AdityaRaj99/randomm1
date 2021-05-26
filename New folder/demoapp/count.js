
const Coountt=(arr)=>{
    var count =0;
    for(var i=0; i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]%arr[i]==0){
                count++;
            }
        }
    }return count;
}
var arr = Coountt([1,1,1,1,1]);
// var num_cou = Coountt([9,4,3,7,1]);
console.log(arr+ " ");


