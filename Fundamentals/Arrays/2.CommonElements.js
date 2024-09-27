Common(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
function Common(arr1,arr2){
    let common=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(typeof arr1[i]==typeof arr2[j]){
                if(arr1[i]==arr2[j])
                common.push(arr1[i])
            }
                
        }
    }
    common.forEach((string) => console.log(string))
}